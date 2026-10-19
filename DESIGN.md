# Design decisions

The current site is a personal, multipage portfolio for **Dorjsembe**, with the full name **Uuganchimeg Dorjsembe**, alias **marigold**, and public email **dorjsembe@1st.mn**. The screen experience leads with the person and recognizable project work. Visible project contributions live on the Projects page and in the dedicated printable document.

## Page hierarchy

- **Home: `index.html`:** a personal name-led hero, the software engineer and game programmer role, a collage of official project imagery, a four-project selected-work gallery, and direct email contact.
- **Projects: `projects.html`:** a concise 1sT.MN overview with its verified responsibilities and separate Arsenal, Counter Blox, and Typical Colors 2 entries. Each game presents visible Gameplay and DataStore blocks. There is no extended case study or placeholder disclosure.
- **About: `about.html`:** a short personal profile, a compact second-year Computer Science study fact, language and tool icons, categorized skills, and genuine contact links. The university information stays factual and brief.
- **CV: `cv.html`:** a dedicated preview with two full-page images of the public CV. A visitor can read the preview, open the PDF, or download it from this page.
- **Print: `print.html`:** a separate complete document arranged into four A4 content groups. The main site links here; the document's button opens the native browser print dialog.

Project imagery appears near the introduction and again in the gallery so a visitor can recognize the work before reading the contribution details. The typography gives the personal name and project titles priority. The home gallery uses two columns on wider screens and one column on phones.

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

Navigation uses real relative HTML links and hash targets. The mobile menu uses native `<details>` and `<summary>`, with JavaScript enhancements for closing it after a selection, on Escape, or when clicking elsewhere. Project contribution text is directly visible in the HTML and remains available without scripts.

Interactions use restrained CSS hover movement, image scaling, underline changes, and visible keyboard focus. Smooth anchor scrolling and transitions respect reduced-motion preferences. Essential content is not dependent on reveal animations. JavaScript enhances existing elements rather than replacing the complete page with a rendered application.

View CV links lead to the dedicated preview page instead of starting a download. That page presents two responsive A4 page images with descriptive alt text and explicit PDF source links for selectable text and zoom. The native Download CV control is confined to the preview page. The page and file links remain usable without JavaScript.

The configured email is a genuine `mailto:` link. Optional GitHub and professional-profile URLs remain absent until supplied. There is no simulated form, unverified availability claim, or fabricated social profile.

## Content and assets

The portfolio states supplied responsibilities without adding employment dates, qualifications, architectural relationships, or performance results. All three games include gun mechanics and gameplay rotation. Arsenal also includes events and battle pass, Counter Blox includes an economy system, and Typical Colors 2 includes class selection. The separate DataStore blocks identify economy and inventory for Counter Blox; inventory, stats, event progress, and battle-pass progress for Arsenal; and inventory, stats, settings, and custom map builder data for Typical Colors 2. Weapon implementation details and rotation type remain unspecified.

The 1sT.MN entry stays focused on independent TypeScript website development, C# CounterStrikeSharp plugins, a separate JavaScript Discord bot, and work coordination and team management. Its historical use of TypeScript is distinct from this portfolio's vanilla JavaScript implementation. The public name, alias, email, and gameplay contributions are supplied; optional additions are professional-profile URLs, authentic contribution screenshots, public references, and further verified implementation detail.

The supplied profile picture is stored locally as `assets/profile/avatar.jpg` and used directly in the four screen headers and the About profile card. Header copies are decorative beside the visible name; the larger About image has descriptive alt text. The image needs no runtime account lookup or external image service.

Official game artwork and the actual 1sT.MN logo identify the projects. They do not establish ownership or verify individual contributions. Sources are recorded in [assets/projects/SOURCES.md](assets/projects/SOURCES.md). Authentic contribution screenshots can replace or supplement these assets later.

The eight language and development-tool SVGs come from Devicon. Source URLs and the preserved MIT license are in [assets/icons/languages/SOURCES.md](assets/icons/languages/SOURCES.md) and [LICENSE.devicon.txt](assets/icons/languages/LICENSE.devicon.txt). Manrope is self-hosted with its OFL license. These assets create no runtime CDN or package dependency.

## Static architecture and printing

The site uses HTML, CSS, and vanilla JavaScript without a framework, build step, backend, or runtime package. Headers and footers are intentionally duplicated across the four screen pages so navigation is available without JavaScript. Essential text also exists directly in the print document. Data updates must be mirrored in the relevant HTML fallback.

The CV preview uses local PNGs rendered from the sanitized public PDF, sized at 1191 × 1684 pixels. Updating the public document requires regenerating these images from the sanitized copy as an offline maintenance step. No renderer or runtime dependency is shipped. `profile.cv` enhances only the preview page’s PDF controls; all View CV links remain ordinary links to `cv.html`.

The four print groups are personal introduction and project overview; the concise 1sT.MN overview and responsibilities; the three games with visible Gameplay and DataStore contributions; and skills, study information, and contact. Essential contributions are present directly in the print HTML. CSS provides A4 sizing, 16mm margins, deliberate page starts, grayscale text, and hidden interactive controls. JavaScript opens the native print dialog through `window.print()`; saving as PDF remains a browser action.

This document records the current source design. The README includes the checks to repeat after content changes, including native-print verification. Deployment uses the public `uuganchimegdorjsembe.github.io` repository, with GitHub Pages publishing the `main` branch from the repository root.
