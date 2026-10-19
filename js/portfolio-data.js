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
      evidence: [
        {
          src: "./assets/projects/evidence/arsenal-weapon-gameplay.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-weapon-gameplay-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Arsenal first-person gameplay with a G-18 equipped and the match HUD visible.",
          caption:
            "First-person weapon gameplay with the match HUD and ammunition display.",
          topics: ["arsenal-weapons", "arsenal-gun-game"],
        },
        {
          src: "./assets/projects/evidence/arsenal-weapon-firing.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-weapon-firing-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Arsenal first-person gameplay showing a G-18 firing with a visible muzzle flash.",
          caption: "Weapon firing during a Standard match.",
          topics: ["arsenal-weapons"],
        },
        {
          src: "./assets/projects/evidence/arsenal-monthly-contracts.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-monthly-contracts-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Arsenal main menu showing monthly contracts and daily challenge progress.",
          caption:
            "Monthly contracts and daily challenge progress in the main menu.",
          topics: ["arsenal-progression"],
        },
        {
          src: "./assets/projects/evidence/arsenal-locker-loadout.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-locker-loadout-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Arsenal locker showing the character loadout, emotes, melee item, and weapon skin.",
          caption:
            "Locker overview with the equipped character, emotes, and cosmetic items.",
          topics: ["arsenal-datastore"],
        },
        {
          src: "./assets/projects/evidence/arsenal-character-inventory.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-character-inventory-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Arsenal character inventory with a search field and a paginated grid of character items.",
          caption: "Character inventory with search and page navigation.",
          topics: ["arsenal-datastore"],
        },
        {
          src: "./assets/projects/evidence/arsenal-player-statistics.webp",
          thumbnail:
            "./assets/projects/evidence/arsenal-player-statistics-thumb.webp",
          width: 2878,
          height: 1372,
          alt: "Arsenal player statistics screen alongside a calling card and favorite items.",
          caption: "Player statistics, calling card, and favorite items.",
          topics: ["arsenal-datastore"],
        },
      ],
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
      evidence: [
        {
          src: "./assets/projects/evidence/counter-blox-weapon-gameplay.webp",
          thumbnail:
            "./assets/projects/evidence/counter-blox-weapon-gameplay-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Counter Blox first-person gameplay with a red-and-white rifle and the match HUD visible.",
          caption:
            "First-person weapon gameplay with the radar, round timer, and ammunition display.",
          topics: ["counter-blox-weapons"],
        },
        {
          src: "./assets/projects/evidence/counter-blox-weapon-buy-menu.webp",
          thumbnail:
            "./assets/projects/evidence/counter-blox-weapon-buy-menu-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Counter Blox weapon buy menu with a radial category selector and pistol options.",
          caption:
            "Weapon buy menu with category selection, pistol options, and buy-time countdown.",
          topics: ["counter-blox-weapons"],
        },
        {
          src: "./assets/projects/evidence/counter-blox-pistol-inventory.webp",
          thumbnail:
            "./assets/projects/evidence/counter-blox-pistol-inventory-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Counter Blox pistol inventory with loadout slots, item search, and a grid of weapon skins.",
          caption:
            "Pistol inventory with loadout slots, item search, and weapon skins.",
          topics: ["counter-blox-datastore"],
        },
        {
          src: "./assets/projects/evidence/counter-blox-equipment-inventory.webp",
          thumbnail:
            "./assets/projects/evidence/counter-blox-equipment-inventory-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Counter Blox equipment inventory showing knives and gloves beside the selected loadout.",
          caption:
            "Equipment inventory showing knives, gloves, and the selected loadout.",
          topics: ["counter-blox-datastore"],
        },
      ],
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
      evidence: [
        {
          src: "./assets/projects/evidence/typical-colors-2-class-selection.webp",
          thumbnail:
            "./assets/projects/evidence/typical-colors-2-class-selection-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Typical Colors 2 class selection menu with nine class choices, a character preview, and the current loadout.",
          caption:
            "Class selection menu with character preview and the current loadout.",
          topics: ["typical-colors-2-playerclass"],
        },
        {
          src: "./assets/projects/evidence/typical-colors-2-class-loadout.webp",
          thumbnail:
            "./assets/projects/evidence/typical-colors-2-class-loadout-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Typical Colors 2 Agent loadout screen with equipment, cosmetic items, and multiple loadout slots.",
          caption:
            "Agent equipment and cosmetic choices with multiple loadout slots.",
          topics: [
            "typical-colors-2-playerclass",
            "typical-colors-2-datastore",
          ],
        },
        {
          src: "./assets/projects/evidence/typical-colors-2-weapon-gameplay.webp",
          thumbnail:
            "./assets/projects/evidence/typical-colors-2-weapon-gameplay-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Typical Colors 2 first-person shotgun gameplay with health, ammunition, objective progress, and daily contracts visible.",
          caption:
            "First-person shotgun gameplay with the match HUD and daily contracts.",
          topics: ["typical-colors-2-rotation"],
        },
        {
          src: "./assets/projects/evidence/typical-colors-2-melee-gameplay.webp",
          thumbnail:
            "./assets/projects/evidence/typical-colors-2-melee-gameplay-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Typical Colors 2 first-person gameplay with a fish melee weapon equipped beside a green-team character.",
          caption:
            "First-person melee gameplay with equipment selection and daily contracts visible.",
          topics: ["typical-colors-2-rotation"],
        },
        {
          src: "./assets/projects/evidence/typical-colors-2-scoreboard-map-vote.webp",
          thumbnail:
            "./assets/projects/evidence/typical-colors-2-scoreboard-map-vote-thumb.webp",
          width: 2880,
          height: 1800,
          alt: "Typical Colors 2 end-of-round scoreboard for GRN and RED with a vote for the next map.",
          caption: "Team scoreboard and voting options for the next map.",
          topics: ["typical-colors-2-rotation"],
        },
      ],
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
