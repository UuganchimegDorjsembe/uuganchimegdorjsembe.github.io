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

Project imagery appears near the introduction and again in the gallery so a visitor can recognize the work before reading the contribution details. The typography gives the personal name and project titles priority. The home gallery and project directory use two columns on wider screens and one column on phones. Detail pages pair a concise introduction with official artwork, then expose contributions by topic instead of placing every paragraph in the directory.

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

Navigation uses real relative HTML links and hash targets. The mobile menu uses native `<details>` and `<summary>`, with JavaScript enhancements for closing it after a selection, on Escape, or when clicking elsewhere. Local project-page links and external references identify when they open a new tab; breadcrumbs and “All projects” return to the directory in the current tab.

The directory's category filters are a progressive enhancement. Without JavaScript, the controls remain hidden and every static card is visible. With scripts, filter buttons expose pressed state and update an announced project count.

Contribution topics begin as ordinary anchors with all panels visible. `js/project-pages.js` adds tab roles, selected state, keyboard navigation, and one visible panel. The topic list is vertical on wider screens and horizontal below 700px. Arrow keys, Home, and End move between topics; the selected hash supports direct topic links. Without scripts, the anchors still navigate to complete contribution sections. Engineering takeaways use native `<details>` and work in both modes.

Interactions use restrained CSS hover movement, image scaling, underline changes, and visible keyboard focus. Smooth anchor scrolling and transitions respect reduced-motion preferences. Essential content is not dependent on reveal animations. JavaScript enhances existing elements rather than replacing the complete page with a rendered application.

Evidence galleries activate only after authentic local images are configured. They provide captions, count status, Previous/Next controls, and thumbnails for multiple images. The main image link opens a native modal dialog for zoom when supported; the dialog supports Escape, Close, backdrop dismissal, Left/Right image navigation, and focus return. Its ordinary link destination provides an original-image new-tab fallback when native modal support is unavailable. Static evidence figures must also be authored when screenshots are supplied so those images remain available without JavaScript. Current placeholders explicitly describe planned evidence; they contain no fabricated screenshots.

View CV links lead to the dedicated preview page instead of starting a download. That page presents two responsive A4 page images with descriptive alt text and explicit PDF source links for selectable text and zoom. The native Download CV control is confined to the preview page. The page and file links remain usable without JavaScript.

The configured email is a genuine `mailto:` link. Optional GitHub and professional-profile URLs remain absent until supplied. There is no simulated form, unverified availability claim, or fabricated social profile.

## Content and assets

The portfolio states supplied responsibilities without adding per-game employment dates, qualifications, unconfirmed architectures, or performance results. The approximate 2015 to 2023 period applies to the Roblox work collectively. Arsenal emphasizes its main weapon framework, Gun Game rotation, persistence, and progression; Counter Blox emphasizes weapons, data, code redemption, and trading; Typical Colors 2 emphasizes its object-oriented PlayerClass implementation. All are described as contributions within development teams.

The DataStore text retains the confirmed per-game categories: economy and inventory for Counter Blox; inventory, stats, event progress, and battlepass progress for Arsenal; and inventory, stats, settings, and custom map builder data for Typical Colors 2. Shared purchases, statistics, inventory, audit logs, and event progression are categories handled across the work, not identical claims about every game. The site does not infer data schemas, locking, retry policies, transaction guarantees, inheritance hierarchies, or performance gains. Technical-debt lessons describe working within established codebases without assigning personal blame or claiming an unconfirmed rewrite.

The 1sT.MN detail page preserves independent TypeScript website development, C# CounterStrikeSharp plugins, a separate JavaScript Discord bot, and task coordination, reverse engineering, and collaborative development experience. Its historical use of TypeScript is distinct from this portfolio's vanilla JavaScript implementation. The four skill groups distinguish Programming, Roblox development, Engineering, and Web & servers, with no proficiency scores. Optional additions remain professional-profile URLs, authentic contribution screenshots, public references, and further verified implementation detail.

The supplied profile picture is stored locally as `assets/profile/avatar.jpg` and used directly in screen headers and the About profile card. Header copies are decorative beside the visible name; the larger About image has descriptive alt text. The image needs no runtime account lookup or external image service.

Official game artwork and the actual 1sT.MN logo identify the projects. They do not establish ownership or verify individual contributions. Sources are recorded in [assets/projects/SOURCES.md](assets/projects/SOURCES.md). These identity images remain in the existing `screenshot`/`screenshotAlt` fields, separate from authentic development evidence.

No development screenshots have been supplied. Future local files belong in `assets/projects/evidence/` and in each project's optional `evidence` array as `{ src, alt, caption }`. Captions must describe the actual image and contribution; the current planned captions do not establish proof. Keep `data-evidence-gallery` wrappers and mirror real images in static HTML when supplied. The README documents accepted image formats, carousel behavior, and the original-image fallback.

The eight language and development-tool SVGs come from Devicon. Source URLs and the preserved MIT license are in [assets/icons/languages/SOURCES.md](assets/icons/languages/SOURCES.md) and [LICENSE.devicon.txt](assets/icons/languages/LICENSE.devicon.txt). Manrope is self-hosted with its OFL license. These assets create no runtime CDN or package dependency.

## Static architecture and printing

The site uses HTML, CSS, and vanilla JavaScript without a framework, build step, backend, or runtime package. Headers and footers are intentionally duplicated across eight screen pages so navigation is available without JavaScript. Essential text also exists directly in the print document. Data updates must be mirrored in the relevant HTML fallback.

`js/portfolio-data.js` holds editable summaries, local detail-page URLs, official artwork, optional evidence arrays, and skills. `js/main.js` retains the existing `data-project`, `data-project-title`, `data-project-summary`, `data-project-technologies`, `data-detail`, and skill/profile hooks. The game's DataStore text remains `details[0]` for compatibility with print enhancement. Topic panels stay authored in the detail HTML. `js/project-pages.js` handles only the directory filters, topic navigation, and optional evidence enhancement; `css/project-pages.css` extends the shared tokens and responsive conventions.

The CV preview uses local PNGs rendered from the sanitized public PDF, sized at 1191 × 1684 pixels. Updating the public document requires regenerating these images from the sanitized copy as an offline maintenance step. No renderer or runtime dependency is shipped. `profile.cv` enhances only the preview page’s PDF controls; all View CV links remain ordinary links to `cv.html`.

The five print groups are personal introduction and project overview; 1sT.MN responsibilities and shared Roblox context; Arsenal and Counter Blox; Typical Colors 2 and shared data categories; and skills, study information, and contact. Essential contributions are present directly in the print HTML. CSS provides A4 sizing, 16mm margins, deliberate group starts, grayscale text, and hidden interactive controls. Exact pagination depends on the browser and content rather than a forced four-page limit. When a detail page is printed, its contribution panels are all revealed and topic/gallery controls are hidden. JavaScript opens the native print dialog through `window.print()`; saving as PDF remains a browser action.

This document records the current source design. The README includes the checks to repeat after content changes, including native-print verification. Deployment uses the public `uuganchimegdorjsembe.github.io` repository, with GitHub Pages publishing the `main` branch from the repository root.
