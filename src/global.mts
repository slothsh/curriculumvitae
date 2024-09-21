export interface Contact {
    email: string,
    phone?: string,
    cellphone?: string,
}

export interface ExperienceItem {
    yearStart: number,
    yearEnd: number,
    entity: string,
    position: string,
    responsibilities: Array<string>,
}

export interface ReferenceItem {
    fullName: string,
    position: string,
    contact: Contact,
}

export interface EducationItem {
    entity: string,
    topic: string,
    yearStart: number,
    yearEnd: number,
}

export const enum ContactKind {
    EMAIL,
    CELLPHONE,
    LANDLINE,
    FAX,
    INSTAGRAM,
    WEBSITE,
    LINKEDIN,
    GITHUB,
}

export const FIRST_NAME = "Stefan";
export const LAST_NAME = "Olivier";
export const FULL_NAMES = `${FIRST_NAME} ${LAST_NAME}`;

export const TITLE = "Software Developer";

export const CONTACT = [
    {
        kind: ContactKind.EMAIL,
        value: "s.olivier1194@gmail.com",
        iconLocalUri: "assets/icons/atsign.svg",
    },
    {
        kind: ContactKind.CELLPHONE,
        value: "+44 123 4567",
        iconLocalUri: "assets/icons/telephone.svg",
    },
    {
        kind: ContactKind.WEBSITE,
        value: "stefanolivier.com",
        iconLocalUri: "assets/icons/www.svg",
    },
    {
        kind: ContactKind.GITHUB,
        value: "github.com/slothsh",
        iconLocalUri: "assets/icons/github.svg",
    }, ];

export const ADDRESS_CITY = "Cape Town";
export const ADDRESS_STATE = "Western Cape";
export const ADDRESS_COUNTRY = "South Africa";

export const ABOUT = "I excel in developing software solutions for both desktop and web platforms, with a strong foundation in programming fundamentals. Transitioning from audio post-production, I’m a self-starter who creates specialized tools for dubbing and post-production. Now, I’m eager to break into the tech industry and drive innovation.";

export const EXPERIENCE: Array<ExperienceItem> = [
    {
        yearStart: 2022,
        yearEnd: 2024,
        entity: "Adrenaline Studios",
        position: "Technical Supervisor",
        responsibilities: [
            "Pre-process client-supplied video, audio and text source materials.",
            "Implemented a desktop application for parsing, searching, and filtering production data.",
            "Built and maintained repository for company Google Sheets editor add-ons.",
            "Retrieve supplemental production data from public web-sources using scripting, reverse-engineering, and web-scraping techniques.",
            "Administration and maintenance of internal production knowledge databases.",
            "Final mix, post-production, and delivery of dubbed television and web-streaming content.",
        ],
    },
    {
        yearStart: 2018,
        yearEnd: 2022,
        entity: "Adrenaline Studios",
        position: "Supervising Engineer",
        responsibilities: [
            "Allocation of studio resources according to talent and recording staff's schedules.",
            "Onboarding and training of interns and junior engineers.",
            "Coordination and supervision of pre-production tasks.",
            "Define standard recording practices for production staff.",
            "Direct and engineer recording sessions with talent, both on-site and remotely.",
            "Configured a solution for facilitating remote recording sessions with multiple incoming & outgoing audio sources.",
        ],
    },
];

export const REFERENCES: Array<ReferenceItem> = [
    {
        fullName: "Mark Knopfler",
        position: "Lead Guitarist & Vocalist",
        contact: {
            email: "redacted@example.com",
        }
    },
    {
        fullName: "Jack White",
        position: "White Stripe & Raconteur",
        contact: {
            email: "redactd@example.com",
        }
    },
    {
        fullName: "B.B. King",
        position: "King of the Blues",
        contact: {
            email: "redacted@example.com",
        }
    },
];

export const EDUCATION: Array<EducationItem> = [
    {
        entity: "Courera",
        topic: "IBM Back-End Development",
        yearStart: 2024,
        yearEnd: 2024,
    },
    {
        entity: "SAE Institute Cape Town",
        topic: "BA Sound Production",
        yearStart: 2015,
        yearEnd: 2018,
    },
];

export const TECHNICAL_SKILLS: Array<string> = [
    "System Design",
    "Network Programming",
    "Data Analysis",
    "C++",
    "Rust",
    "Typescript",
    "Python",
];

export const SOFT_SKILLS: Array<string> = [];

export const LANGUAGES = [
    "English",
    "Afrikaans",
];
