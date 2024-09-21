import Handlebars from "handlebars";
import esbuild from "esbuild";
import fg from "fast-glob";
import pt from "prettier";
import { basename, resolve } from "node:path";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { HandleBars as HbUtils } from "./utilities.mjs";

const BASE_DIR = process.cwd();
const SRC_DIR = resolve(BASE_DIR, "src");
const TEMPLATES_DIR = resolve(SRC_DIR, "templates");
const STYLES_DIR = resolve(SRC_DIR, "styles");

const BUILD_DIR = resolve(BASE_DIR, "build");
const BUILD_HTML_DIR = resolve(BUILD_DIR, "html");
const BUILD_PDF_DIR = resolve(BUILD_DIR, "pdf");

function configureBuild() {
    mkdirSync(BUILD_DIR, { recursive: true });
    mkdirSync(BUILD_HTML_DIR, { recursive: true });
    mkdirSync(BUILD_PDF_DIR, { recursive: true });
    HbUtils.initializeHandlebars();
}

async function compileTemplateData(sourceFilePath: string): Promise<any> {
    const fileName = basename(sourceFilePath, ".mts");
    await esbuild.build({
        entryPoints: [sourceFilePath],
        outfile: `build/temp/${fileName}.js`,
        bundle: true,
        treeShaking: false,
        format: "esm",
        platform: "node",
        target: "esnext",
        minify: true,
    });
    const dynamicImport = readFileSync(resolve(BUILD_DIR, "temp", `${fileName}.js`)).toString();
    const { default: payload } = await import(`data:text/javascript,${dynamicImport}`);
    return payload;
}

(async () => {
    configureBuild();


    const allTemplateMarkupPaths = fg.sync(`${TEMPLATES_DIR}/*.html`);
    const allTemplateDataPaths = fg.sync(`${TEMPLATES_DIR}/*.mts`);
    const allTemplateStylePaths = fg.sync(`${TEMPLATES_DIR}/*.css`);
    const allGlobalStylePaths = fg.sync(`${STYLES_DIR}/*.css`);

    const globalStyles = allGlobalStylePaths
        .map((path) => {
            return readFileSync(path).toString();
        })
        .reduce((acc, styleString) => {
            return acc + styleString + "\n";
        }, "");

    const compilationUnits: Array<[string, string | null, string | null]> = [];
    for (const markupPath of allTemplateMarkupPaths) {
        let matchedDataPath = null;
        for (const dataPath of allTemplateDataPaths) {
            const markupName = basename(markupPath, ".html");
            const dataName = basename(dataPath, ".mts");
            if (markupName === dataName) {
                matchedDataPath = dataPath
            }
        }

        let matchedStylePath = null;
        for (const stylePath of allTemplateStylePaths) {
            const markupName = basename(markupPath, ".html");
            const styleName = basename(stylePath, ".css");
            if (markupName === styleName) {
                matchedStylePath = stylePath
            }
        }

        compilationUnits.push([markupPath, matchedDataPath, matchedStylePath]);
    }

    for (const [markupPath, dataPath, stylePath] of compilationUnits) {
        let templateData = {
            style: globalStyles,
        };

        if (dataPath !== null) {
            let data = await compileTemplateData(dataPath);
            templateData = {
                ...templateData,
                ...data,
            };
        }

        if (stylePath !== null) {
            const styleData = readFileSync(stylePath).toString();
            templateData["style"] += styleData + "\n";
        }

        const template = Handlebars.compile(readFileSync(markupPath).toString());
        const cv = template((templateData !== null) ? templateData : {});

        writeFileSync(resolve(BUILD_DIR, "html", basename(markupPath)), await pt.format(cv, { parser: "html" }));
    }
})();
