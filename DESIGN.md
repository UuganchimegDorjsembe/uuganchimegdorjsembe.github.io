# Design decisions

The current site is a personal, multipage portfolio for **Dorjsembe**, with the full name **Uuganchimeg Dorjsembe**, alias **marigold**, and public email **dorjsembe@1st.mn**. The screen experience leads with the person and recognizable project work. A compact Projects directory leads to four contribution detail pages; the printable document provides a separate reading format.

## Page hierarchy

- **Home: `index.html`:** a personal name-led hero, the software engineer and game programmer role, a collage of official project imagery, a four-project selected-work gallery, and direct email contact.
- **Projects: `projects.html`:** four compact cards with category filters and links to local detail pages. A shared experience section describes the approximate 2015 to 2023 Roblox programming period, team development, the built-in development environment, and data categories handled across the work.
- **1sT.MN: `first-mn.html`:** independent website development, CounterStrikeSharp plugins, a separate Discord bot, and coordination.
- **Arsenal: `arsenal.html`:** main weapon framework, Gun Game rotation, player data, and battlepass/event progression.
- **Counter Blox: `counter-blox.html`:** weapon framework, persistent data, Twitter-code redemption, and trading.
- **Typical Colors 2: `typical-colors-2.html`:** object-oriented PlayerClass, player data, and gameplay rotation.
- **About: `about.html`:** a short personal profile, a compact second-year Computer Science study fact, language and tool icons, categorized skills, and genuine contact links. The university information stays factual and brief.
- **CV: `cv.html`:** a dedicated preview with two full-page images of the public CV. A visitor can read the preview, open the PDF, or download it from this page.
- **Print: `print.html`:** a separate complete document arranged into five A4 content groups. The main site links here; the document's button opens the native browser print dialog.

Project imagery appears near the introduction and again in the home gallery so a visitor can recognize the work before reading the contribution details. The typography gives the personal name and project titles priority. The home gallery and project directory use two columns on wider screens and one column on phones. Detail pages pair a concise introduction with official artwork, then expose contributions and related supplied screenshots inside topic panels. There is no separate project gallery section.

## Visual system

| Token or element      | Current implementation                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| Paper                 | `#F7F5F0`                                                                                        |
| Ink                   | `#242722`                                                                                        |
| Accent                | `#B7472A`                                                                                        |
| Muted text            | `#64675F`                                                                                        |
| Surface               | `#EEECE4`                                                                                        |
| Dividers              | `#DEDED5`                                                                                        |
| Typography            | Self-hosted Manrope; 16px / 24px body text.                                                      |
| Personal name         | 96px at the widest base layout, reduced through responsive breakpoints to 48px on narrow phones. |
| Secondary page titles | 72px at the base desktop size, reduced for smaller screens.                                      |
| Content width         | A centered shell capped at 1200px, with responsive side margins.                                 |
| Component shape       | Mostly simple image areas and restrained 4–8px radii.                                            |

The ivory, charcoal, and orange palette provides continuity across the pages. The navigation stays light, with the supplied profile picture as a compact 32px thumbnail, reduced to 24px on narrow phones, and an active-link underline. The About card repeats the picture at 96px with an 8px corner radius. Project images carry most of the visual variation. The About page uses six language/web SVGs and a separate two-icon Git/GitHub tool strip; the icons supplement the categorized skill text.

## Interaction and accessibility

External-link arrows use the local `assets/icons/external-link.svg` mask so phone fonts cannot turn them into emoji. Static HTML, enhanced links, and project-card indicators share the same icon.

Navigation uses real relative HTML links and hash targets. The mobile menu uses native `<details>` and `<summary>`, with JavaScript enhancements for closing it after a selection, on Escape, or when clicking elsewhere. Local project-page links and external references identify when they open a new tab; breadcrumbs and “All projects” return to the directory in the current tab.

The directory's category filters are a progressive enhancement. Without JavaScript, the controls remain hidden and every static card is visible. With scripts, filter buttons expose pressed state and update an announced project count.

Contribution topics begin as ordinary anchors with all panels visible. `js/project-pages.js` adds tab roles, selected state, keyboard navigation, and one visible panel. The topic list is vertical on wider screens and horizontal below 700px. Arrow keys, Home, and End move between topics; the selected hash supports direct topic links. Without scripts, the anchors still navigate to complete contribution sections. Engineering takeaways use native `<details>` and work in both modes.

Interactions use restrained CSS hover movement, image scaling, underline changes, and visible keyboard focus. Smooth anchor scrolling and transitions respect reduced-motion preferences. Essential content is not dependent on reveal animations. JavaScript enhances existing elements rather than replacing the complete page with a rendered application.

All fifteen supplied Roblox screenshots appear within their related “Explore the systems” topic panels. A `.system-evidence` wrapper identifies the project through `data-evidence-gallery` and the full panel ID through `data-evidence-topic`. Each image's optional `topics` array maps it to one or more panels; the script shows only matching images. Panels without supplied images remain text-only, including 1sT.MN's topics and Counter Blox's redemption/trading topics. There are no separate gallery sections or pending-image placeholders.

Within a panel, image enhancement provides captions, count status, Previous/Next controls, and thumbnails for multiple images. The main image link opens a native modal dialog when supported; the dialog supports Escape, Close, backdrop dismissal, Previous/Next buttons, Left/Right navigation, and focus return. Its footer opens the full-size image in a new tab, while modified clicks retain native link behavior. The ordinary image link also works when modal support is unavailable. Static figures inside the panels provide the no-script fallback alongside the fully visible contribution text.

View CV links lead to the dedicated preview page instead of starting a download. That page presents two responsive A4 page images with descriptive alt text and explicit PDF source links for selectable text and zoom. The native Download CV control is confined to the preview page. The page and file links remain usable without JavaScript.

The configured email is a genuine `mailto:` link. Optional GitHub and professional-profile URLs remain absent until supplied. There is no simulated form, unverified availability claim, or fabricated social profile.

## Content and assets

The portfolio states supplied responsibilities without adding per-game employment dates, qualifications, unconfirmed architectures, or performance results. The approximate 2015 to 2023 period applies to the Roblox work collectively. Arsenal emphasizes its main weapon framework, Gun Game rotation, persistence, and progression; Counter Blox emphasizes weapons, data, code redemption, and trading; Typical Colors 2 emphasizes its object-oriented PlayerClass implementation. All are described as contributions within development teams.

The DataStore text retains the confirmed per-game categories: economy and inventory for Counter Blox; inventory, stats, event progress, and battlepass progress for Arsenal; and inventory, stats, settings, and custom map builder data for Typical Colors 2. Shared purchases, statistics, inventory, audit logs, and event progression are categories handled across the work, not identical claims about every game. The site does not infer data schemas, locking, retry policies, transaction guarantees, inheritance hierarchies, or performance gains. Technical-debt lessons describe working within established codebases without assigning personal blame or claiming an unconfirmed rewrite.

The 1sT.MN detail page preserves independent TypeScript website development, C# CounterStrikeSharp plugins, a separate JavaScript Discord bot, and task coordination, reverse engineering, and collaborative development experience. Its historical use of TypeScript is distinct from this portfolio's vanilla JavaScript implementation. The four skill groups distinguish Programming, Roblox development, Engineering, and Web & servers, with no proficiency scores. Optional additions remain professional-profile URLs, authentic contribution screenshots, public references, and further verified implementation detail.

The supplied profile picture is stored locally as `assets/profile/avatar.jpg` and used directly in screen headers and the About profile card. Header copies are decorative beside the visible name; the larger About image has descriptive alt text. The image needs no runtime account lookup or external image service.

Official game artwork and the actual 1sT.MN logo identify the projects. They do not establish ownership or verify individual contributions. Sources are recorded in [assets/projects/SOURCES.md](assets/projects/SOURCES.md). These identity images remain in the existing `screenshot`/`screenshotAlt` fields, separate from authentic development evidence.

Arsenal's six supplied screenshots show weapon gameplay, weapon firing, monthly contracts, locker/loadout, character inventory, and player statistics. Counter Blox's four show weapon gameplay, the weapon buy menu, pistol inventory, and equipment inventory. Typical Colors 2's five show class selection, Agent loadout, shotgun gameplay, melee gameplay, and scoreboard/map voting. Captions describe the visible scene or UI without asserting interface authorship, PlayerClass source-code architecture, persistence implementation, or development metrics. 1sT.MN has no supplied images; development-environment/code screenshots remain optional future evidence.

Arsenal's weapon images accompany the weapon topic, with the gameplay image also in Gun Game rotation; contracts accompany progression, and locker/inventory/statistics accompany player data. Counter Blox's gameplay and buy menu accompany weapons, while inventories accompany persistent data. Typical Colors 2's class selection/loadout accompany PlayerClass, with loadout also in player data; gameplay and scoreboard/map voting accompany rotation. These are contextual associations, not proof of a hidden implementation.

All three games' assets in `assets/projects/evidence/` use full-resolution sRGB WebP exports and 192px-wide thumbnails. Original PNGs remain outside the repository; derived exports omit source screenshot metadata. Each optional `evidence` entry has `{ src, alt, caption }` and may include `topics`, `thumbnail`, `width`, and `height`. The thumbnail falls back to `src` when omitted. Preserve the wrapper's project/topic attributes and mirror figures within the corresponding static panels. The README documents exact mappings, accepted formats, carousel behavior, and the full-image fallback.

The eight language and development-tool SVGs come from Devicon. Source URLs and the preserved MIT license are in [assets/icons/languages/SOURCES.md](assets/icons/languages/SOURCES.md) and [LICENSE.devicon.txt](assets/icons/languages/LICENSE.devicon.txt). Manrope is self-hosted with its OFL license. These assets create no runtime CDN or package dependency.

## Static architecture and printing

The site uses HTML, CSS, and vanilla JavaScript without a framework, build step, backend, or runtime package. Headers and footers are intentionally duplicated across eight screen pages so navigation is available without JavaScript. Essential text also exists directly in the print document. Data updates must be mirrored in the relevant HTML fallback.

`js/portfolio-data.js` holds editable summaries, local detail-page URLs, official artwork, optional evidence arrays, and skills. `js/main.js` retains the existing `data-project`, `data-project-title`, `data-project-summary`, `data-project-technologies`, `data-detail`, and skill/profile hooks. The game's DataStore text remains `details[0]` for compatibility with print enhancement. Topic panels stay authored in the detail HTML. `js/project-pages.js` handles only the directory filters, topic navigation, and optional evidence enhancement; `css/project-pages.css` extends the shared tokens and responsive conventions.

The CV preview uses local PNGs rendered from the sanitized public PDF, sized at 1191 × 1684 pixels. Updating the public document requires regenerating these images from the sanitized copy as an offline maintenance step. No renderer or runtime dependency is shipped. `profile.cv` enhances only the preview page’s PDF controls; all View CV links remain ordinary links to `cv.html`.

The five print groups are personal introduction and project overview; 1sT.MN responsibilities and shared Roblox context; Arsenal and Counter Blox; Typical Colors 2 and shared data categories; and skills, study information, and contact. Essential contributions are present directly in the print HTML. CSS provides A4 sizing, 16mm margins, deliberate group starts, grayscale text, and hidden interactive controls. Exact pagination depends on the browser and content rather than a forced four-page limit. When a detail page is printed, its contribution panels are all revealed and topic/gallery controls are hidden. JavaScript opens the native print dialog through `window.print()`; saving as PDF remains a browser action.

This document records the current source design. The README includes the checks to repeat after content changes, including native-print verification. Deployment uses the public `uuganchimegdorjsembe.github.io` repository, with GitHub Pages publishing the `main` branch from the repository root.
