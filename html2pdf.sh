#!/bin/bash

BUILD_DIR=./build
BUILD_HTML_DIR="$BUILD_DIR/html"
BUILD_PDF_DIR="$BUILD_DIR/pdf"

main() {
    [[ ! -d ./.venv ]] && printf "install virtual environment!\n" && exit 1
    source ./.venv/bin/activate
    set -xe

    mkdir -p $BUILD_PDF_DIR

    html_files=($(find "$BUILD_HTML_DIR" -type f -name "*.html"))
    for html in "${html_files[@]}"; do
        pdf=$(basename $html | cut -d '.' -f 1).pdf
        weasyprint "$html" "$BUILD_PDF_DIR/$pdf"
    done
}

main
