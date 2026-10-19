// Mirror essential edits in the static HTML pages for readers without scripts.
window.portfolioData = {
  profile: {
    name: "Dorjsembe",
    fullName: "Uuganchimeg Dorjsembe",
    alias: "marigold",
    age: 20,
    cv: "./assets/cv/dorjsembe-cv.pdf", // PDF controls on the CV preview page.
    email: "dorjsembe@1st.mn",
    discord: "marigold669",
    phone: "+976 9912 9516",
    zangia: "",
    github: "",
    profiles: [],
  },
  projects: [
    {
      id: "first-mn",
      title: "1sT.MN",
      page: "./first-mn.html",
      summary:
        "I independently developed the website in TypeScript, built CounterStrikeSharp plugins in C#, and created a separate Discord bot in JavaScript.",
      technologies: ["TypeScript", "C#", "JavaScript"],
      screenshot: "",
      screenshotAlt: "",
      evidence: [], // Future authentic screenshots: { src, alt, caption }.
      referenceUrl: "https://1st.mn/",
      referenceLabel: "Visit project website",
      details: [],
      homeSummary:
        "Independent TypeScript website, C# server plugins, and a separate JavaScript Discord bot.",
    },
    {
      id: "arsenal",
      title: "Arsenal",
      page: "./arsenal.html",
      summary:
        "Contributed to Arsenal’s main weapon framework, Gun Game rotation, persistent player data, and battlepass and event progression as part of its development team.",
      technologies: ["Lua", "Roblox", "DataStore"],
      screenshot: "./assets/projects/arsenal-rolve.png",
      screenshotAlt:
        "Official Arsenal artwork from ROLVe, featuring the Arsenal wordmark and a Roblox character.",
      evidence: [],
      referenceUrl: "https://www.roblox.com/games/286090429/Arsenal",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked on persistent inventory, player stats, event progress, and battlepass progress using Roblox DataStore.",
        },
      ],
      homeSummary:
        "Weapon framework, Gun Game rotation, persistent player data, and progression systems.",
    },
    {
      id: "counter-blox",
      title: "Counter Blox",
      page: "./counter-blox.html",
      summary:
        "Contributed to Counter Blox’s weapon framework, DataStore persistence, Twitter code redemption, and trading functionality within a development team working in an established codebase.",
      technologies: ["Lua", "Roblox", "DataStore"],
      screenshot: "./assets/projects/counter-blox.png",
      screenshotAlt:
        "Official Counter Blox artwork and wordmark from its Roblox experience page.",
      evidence: [],
      referenceUrl: "https://www.roblox.com/games/301549746/Counter-Blox",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked with DataStore systems for persistent economy and inventory data.",
        },
      ],
      homeSummary:
        "Weapon framework, persistent data, Twitter code redemption, and trading.",
    },
    {
      id: "typical-colors-2",
      title: "Typical Colors 2",
      page: "./typical-colors-2.html",
      summary:
        "Worked on Typical Colors 2’s object oriented PlayerClass system, DataStore persistence, and gameplay rotation within its development team, with an emphasis on making player classes more manageable.",
      technologies: ["Lua", "Roblox", "DataStore", "OOP"],
      screenshot: "./assets/projects/typical-colors-2.png",
      screenshotAlt:
        "Official Typical Colors 2 artwork and wordmark from its Roblox experience page.",
      evidence: [],
      referenceUrl: "https://www.roblox.com/games/328028363/Typical-Colors-2",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked on DataStore persistence for inventory, player stats, settings, and custom map builder data.",
        },
      ],
      homeSummary:
        "Object oriented PlayerClass architecture, player data, and gameplay rotation.",
    },
  ],
  languages: [
    {
      label: "Lua",
      icon: "./assets/icons/languages/lua.svg",
    },
    {
      label: "JavaScript",
      icon: "./assets/icons/languages/javascript.svg",
    },
    {
      label: "TypeScript",
      icon: "./assets/icons/languages/typescript.svg",
    },
    {
      label: "C#",
      icon: "./assets/icons/languages/csharp.svg",
    },
    {
      label: "HTML",
      icon: "./assets/icons/languages/html5.svg",
    },
    {
      label: "CSS",
      icon: "./assets/icons/languages/css3.svg",
    },
  ],
  skills: [
    {
      title: "Programming",
      items: ["Lua", "JavaScript", "TypeScript", "C#", "HTML and CSS"],
    },
    {
      title: "Roblox development",
      items: [
        "Gameplay and weapon frameworks",
        "Object-oriented programming",
        "Lua ModuleScripts and Roblox services",
        "DataStore persistence",
        "Progression systems",
        "Trading and code redemption",
      ],
    },
    {
      title: "Engineering",
      items: [
        "Existing codebases",
        "Technical-debt awareness",
        "Cross-system development",
        "Collaborative software development",
      ],
    },
    {
      title: "Web & servers",
      items: [
        "Web development",
        "CounterStrikeSharp plugins",
        "Discord bot development",
        "Task coordination",
      ],
    },
  ],
  learning: [],
};
