// Everything you will edit most often lives here: copy, projects, jokes.

export type Project = { title: string; desc: string; tags: string[]; link: string; };
export type Stage = { when: string; title: string; detail: string; };

export const ME = {
    name: "Patrick Ching",
    role: "Software engineer",
    photo: "/headshot.jpg",
    headline: "Engineer, problem solver, and lifelong learner.",
    blurb: "My career spans military service, transplant medicine, software development, and mission leadership. I build systems that improve workflows, automate processes, and solve complex operational problems while continuing to deepen my expertise in software engineering and machine learning.",
    email: "patrickching264@gmail.com",
    skills: {
        Languages: ["C#", "Java", "JavaScript", "TypeScript", "Python", "SQL", "VB6 and VBA (legacy)"],
        Frameworks: ["React", "Vue.js", ".NET", "Node.js", "Express.js", "Spring Boot"],
        Databases: ["SQL Server", "PostgreSQL", "MySQL"],
        Integration: ["HL7", "FHIR", "REST APIs", "Windows services"],
        Tooling: ["Azure DevOps", "Git"],
    } as Record<string, string[]>,
    background: [
        {
            when: "Early Years: \n1997-2004",
            title: "Military service and scientific foundation.",
            detail: "Served as a SERE Specialist in the U.S. Air Force while developing the discipline, leadership, and planning skills that would shape my career. Later earned a B.S. in Microbiology at Arizona State University, providing the scientific foundation for my future work in transplant medicine and healthcare software.",
        },
        {
        when: "Lab years: \n2005-2021",
        title: "Transplant Laboratory Specialist",
        detail:
            "Fifteen(+) years in high-complexity testing clinical labs. Along the way I taught myself programming, data science, and API work to automate and engineer solutions to the rapidly developing lab technologies and issues affecting critical decision making for patient care.",
        },
        {
        when: "Engineering years: \n2021-2026",
        title: "Healthcare Software Engineer and more scientific learning.",
        detail:
            "Transitioned from the clinical lab bench to a software company to engineer custom modules for transplant software. I continued to develop problem solving skills and decided to formalize my engineering training by returning to Arizona State University's Fulton School of Engineering."
        },
        {
            when: "... and still going...",
            title: "The Next Chapter",
            detail:
                "Finishing the final capstone project and an embedded software class to finish a Software Engineering degree at Arizona State University (May 2027) while continuing to build software, develop machine learning projects, and look for the next interesting problem to solve."
        },
    ] as Stage[],
    projects: [
        {
        title: "Custom HistoTrac modules",
        desc: "Purpose-built modules for transplant labs that needed new features before the next release.",
        tags: ["C#", "Desktop"],
        link: "#",
        },
        {
        title: "Lab system integrations",
        desc: "Interfaces between HistoTrac and third-party databases, files and messaging systems, including HL7 and FHIR.",
        tags: ["Integration"],
        link: "#",
        },
        {
        title: "Capstone project",
        desc: "Final project for my B.S. in Software Engineering (May 2027).",
        tags: ["Capstone"],
        link: "#",
        },
    ] as Project[],
};

export const JOKES = [
    "There are 10 kinds of people: those who understand binary and those who don’t.",
    "A SQL query walks into a bar, sees two tables, and asks: can I join you?",
    "It works on my machine. Ship my machine.",
    "I would tell you a UDP joke, but you might not get it.",
    "Debugging: being the detective in a crime movie where you are also the murderer.",
    "My HL7 message and I have a lot in common: lots of pipes, little explanation.",
];

export const COMMITS = [
    "fix: remove the thing that was causing the other thing",
    "feat: add button (it does not do anything yet)",
    "chore: update dependencies, pray",
    "refactor: rename variables until they felt right",
    "fix: it was a typo. It is always a typo",
    "feat: works on my machine",
    "chore: delete code nobody understood",
    "fix: off-by-one, but in the other direction",
    "docs: explain why this looks wrong but is right",
    "revert: revert the revert of the revert",
    "test: add test that fails less often",
    "perf: make it faster by doing less",
];