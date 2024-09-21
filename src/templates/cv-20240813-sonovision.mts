import { resolve } from "node:path";

import { 
    FULL_NAMES,
    TITLE,
    ABOUT,
    CONTACT,
    EDUCATION,
    EXPERIENCE,
    REFERENCES,
    TECHNICAL_SKILLS,
    LANGUAGES,
} from "../global.mts";

export default {
    fullName: FULL_NAMES,
    title: TITLE,
    avatarLocalUri: resolve(process.cwd(), "assets/portrait.jpg"),
    about: ABOUT,
    contact: CONTACT,
    experience: EXPERIENCE,
    references: REFERENCES,
    education: EDUCATION,
    skills: TECHNICAL_SKILLS,
    languages: LANGUAGES,
};
