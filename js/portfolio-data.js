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
      summary:
        "I independently developed the website in TypeScript, built CounterStrikeSharp plugins in C#, and created a separate Discord bot in JavaScript.",
      technologies: ["TypeScript", "C#", "JavaScript"],
      screenshot: "",
      screenshotAlt: "",
      referenceUrl: "https://1st.mn/",
      referenceLabel: "Visit project website",
      details: [],
    },
    {
      id: "arsenal",
      title: "Arsenal",
      summary:
        "Focused on gun mechanics and gameplay rotation, with additional work on events and the battlepass.",
      technologies: ["Lua / Roblox", "DataStore"],
      screenshot: "./assets/projects/arsenal-rolve.png",
      screenshotAlt:
        "Official Arsenal artwork from ROLVe, featuring the Arsenal wordmark and a Roblox character.",
      referenceUrl: "https://www.roblox.com/games/286090429/Arsenal",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked on persistent inventory, player stats, event progress, and battlepass progress using Roblox DataStore.",
        },
      ],
      homeSummary:
        "Gun systems, gameplay rotation, events, and battlepass features.",
    },
    {
      id: "counter-blox",
      title: "Counter Blox",
      summary:
        "Worked on gun mechanics, gameplay rotation, and the game economy system.",
      technologies: ["Lua / Roblox", "DataStore"],
      screenshot: "./assets/projects/counter-blox.png",
      screenshotAlt:
        "Official Counter Blox artwork and wordmark from its Roblox experience page.",
      referenceUrl: "https://www.roblox.com/games/301549746/Counter-Blox",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked with DataStore systems for persistent economy and inventory data.",
        },
      ],
      homeSummary: "Gun systems, gameplay rotation, and the game economy.",
    },
    {
      id: "typical-colors-2",
      title: "Typical Colors 2",
      summary:
        "Worked on gun mechanics, gameplay rotation, and class selection.",
      technologies: ["Lua / Roblox", "DataStore"],
      screenshot: "./assets/projects/typical-colors-2.png",
      screenshotAlt:
        "Official Typical Colors 2 artwork and wordmark from its Roblox experience page.",
      referenceUrl: "https://www.roblox.com/games/328028363/Typical-Colors-2",
      referenceLabel: "Official game",
      details: [
        {
          heading: "DataStore",
          text: "Worked on DataStore persistence for inventory, player stats, settings, and custom map builder data.",
        },
      ],
      homeSummary: "Gun systems, gameplay rotation, and class selection.",
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
      title: "Languages",
      items: ["Lua / Roblox", "JavaScript", "TypeScript", "C#", "HTML and CSS"],
    },
    {
      title: "Web & gameplay",
      items: [
        "Web development",
        "Gameplay mechanics",
        "Persistent data systems",
      ],
    },
    {
      title: "Server & community",
      items: [
        "Game server plugins",
        "CounterStrikeSharp",
        "Discord bot development",
      ],
    },
    {
      title: "Tools & collaboration",
      items: ["Git and GitHub", "Work coordination", "Team management"],
    },
  ],
  learning: [],
};
