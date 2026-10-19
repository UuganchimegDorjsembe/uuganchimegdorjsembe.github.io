# Dorjsembe | software engineer & game programmer

A personal, multipage portfolio built with HTML, CSS, and vanilla JavaScript. The static files are ready for GitHub Pages without npm, a build step, a framework, a backend, a database, environment variables, API keys, or paid services.

The public display name is **Dorjsembe**, the full name is **Uuganchimeg Dorjsembe**, the alias is **marigold**, and the configured email is **dorjsembe@1st.mn**. The project descriptions use the supplied contributions to 1sT.MN, Arsenal, Counter Blox, and Typical Colors 2. The approximate 2015 to 2023 period describes the Roblox work collectively; no per-game dates, job titles, performance results, or contribution statistics have been invented.

## Pages and files

| File or folder              | Purpose                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `index.html`                | Personal introduction, project-artwork collage, selected-work gallery, and email contact.                      |
| `projects.html`             | Compact project directory, category filters, links to four detail pages, and shared Roblox experience context. |
| `first-mn.html`             | Website, CounterStrikeSharp plugins, separate Discord bot, and coordination contributions.                     |
| `arsenal.html`              | Weapon framework, Gun Game rotation, player data, and progression contributions.                               |
| `counter-blox.html`         | Weapon framework, player data, Twitter-code redemption, and trading contributions.                             |
| `typical-colors-2.html`     | Object-oriented PlayerClass, player data, and gameplay rotation contributions.                                 |
| `about.html`                | Personal profile, compact study information, language icons, categorized skills, and contact links.            |
| `cv.html`                   | Dedicated two-page CV preview, PDF source links, and the native CV download.                                   |
| `print.html`                | Dedicated printable portfolio with five A4 content groups and a native Print / Save as PDF button.             |
| `css/style.css`             | Shared responsive screen design, keyboard focus states, and reduced-motion behavior.                           |
| `css/cv.css`                | Responsive full-page CV image presentation and print rules for the CV preview.                                 |
| `css/project-pages.css`     | Directory filters, project detail layouts, topic navigation, evidence galleries, and zoom dialog.              |
| `css/print.css`             | The printable document's screen preview, A4 page setup, grayscale presentation, and print rules.               |
| `js/portfolio-data.js`      | Editable profile information, projects, language icons, skill groups, and current learning.                    |
| `js/main.js`                | Progressive content enhancement, contact configuration, mobile-menu behavior, and native printing.             |
| `js/project-pages.js`       | Progressive topic tabs, category filters, and optional evidence carousel and image zoom.                       |
| `assets/projects/`          | Official project artwork and logo with source documentation.                                                   |
| `assets/projects/evidence/` | Destination for future authentic contribution screenshots, separate from official artwork.                     |
| `assets/profile/avatar.jpg` | Supplied profile picture, used in screen headers and the About profile card.                                   |
| `assets/cv/`                | Public CV PDF and its two locally rendered full-page preview PNGs.                                             |
| `assets/icons/languages/`   | Eight local Devicon SVGs: six language/web icons plus Git and GitHub.                                          |
| `assets/fonts/`             | Self-hosted Manrope font and its OFL license.                                                                  |
| `.nojekyll`                 | Keeps these static files outside Jekyll processing on GitHub Pages.                                            |
| `DESIGN.md`                 | Current visual direction and implementation decisions.                                                         |

All nine HTML pages contain their essential content directly. Without JavaScript, the project directory shows every card, topic links jump to fully visible contribution panels, evidence areas retain their static HTML, and the native mobile menu and email links still work.

## Preview locally

Open `index.html` in a browser and follow the links to the other HTML files. No framework or development server is required for this file-based site.

For an optional HTTP preview, run this command from the project folder:

```sh
python3 -m http.server 8000
```

Visit `http://localhost:8000/`. Stop the preview with `Ctrl+C`. Python is only a local preview option, not a deployment or runtime requirement.

## Edit the portfolio

Update both the data and the relevant static HTML. `main.js` enhances matching elements; `project-pages.js` adds topic tabs, filters, and optional evidence galleries. Neither script generates the complete website, headers, footers, or core contribution text. The HTML is the authoritative fallback for visitors without JavaScript.

The data file uses this structure:

```js
window.portfolioData = {
  profile: {
    name: "Dorjsembe",
    fullName: "Uuganchimeg Dorjsembe",
    alias: "marigold",
    age: 20,
    cv: "./assets/cv/dorjsembe-cv.pdf",
    email: "dorjsembe@1st.mn",
    discord: "marigold669",
    phone: "+976 9912 9516",
    zangia: "",
    github: "",
    profiles: [], // Optional objects with label and url fields.
  },
  projects: [
    {
      id: "matching-html-project-id",
      title: "",
      page: "./matching-project-page.html",
      summary: "",
      homeSummary: "", // Optional shorter gallery and print-index summary.
      technologies: [],
      screenshot: "",
      screenshotAlt: "",
      evidence: [], // Optional authentic images: { src, alt, caption }.
      referenceUrl: "",
      referenceLabel: "",
      details: [{ heading: "", text: "" }],
    },
  ],
  languages: [{ label: "Lua", icon: "./assets/icons/languages/lua.svg" }],
  skills: [{ title: "Category title", items: [] }],
  learning: [],
};
```

This example documents the schema; preserve the real project entries when editing. Keep valid JavaScript syntax, including quotation marks, commas, and matching brackets.

- A project's `id` matches its HTML `data-project` value and `data-evidence-gallery` value. The current IDs are `first-mn`, `arsenal`, `counter-blox`, and `typical-colors-2`. `page` holds the relative detail-page URL; mirror that URL in static card, title, and navigation anchors.
- `data-project-title`, `data-project-summary`, `data-project-technologies`, and numbered `data-detail` elements receive the corresponding data. `homeSummary` optionally supplies shorter gallery and print-index copy. Add or update the static HTML counterpart whenever changing essential content.
- `first-mn` has an empty `details` array. Each game's `details[0]` retains `heading: "DataStore"` and its confirmed per-game persistence categories, supporting both detail pages and the print document. Contribution topic panels are authored directly in each detail page; they are not generated from this array.
- `data-skill-group="0"` corresponds to the first `skills` item, `1` to the second, and so on. Add or reorder both representations together.
- Mirror project edits in the corresponding detail page and `print.html`. Keep the compact cards in `projects.html` and the shorter home-gallery descriptions, technology lines, images, and links in `index.html` consistent.
- Skills belong in both `about.html` and `print.html`. Keep the compact study fact current in those pages.
- Headers and footers are deliberately duplicated across the eight screen pages to avoid a build or JavaScript dependency. Update those copies when editing shared navigation. `print.html` has its own toolbar.

The 1sT.MN website's original **TypeScript** implementation is project history. This portfolio uses vanilla JavaScript.

### Identity and contact

`profile.name` is the short public name; `profile.fullName` is the full written name. `profile.alias` supplies the “also known as” line; an empty alias hides that line. When changing them, update the static headings, footer copyright lines, page titles, metadata, and accessible labels across the HTML files too.

The supplied profile picture is self-hosted at `assets/profile/avatar.jpg`. Screen-page headers use a decorative 32px thumbnail, reduced to 24px on narrow phones, while the About profile card uses a 96px image with descriptive alt text. Keep the header images decorative because the adjacent name and home-link label already identify the person. The same JPEG is embedded in `assets/icons/favicon.svg` for the browser-tab icon. When changing the picture, replace the JPEG, update the SVG's embedded image, and change the favicon URL's version query across the HTML pages to refresh cached icons. No runtime avatar lookup or image service is required.

The email is already configured as a genuine `mailto:dorjsembe@1st.mn` link. If it changes, update `profile.email` and all HTML email anchors. The `data-email-label` attribute preserves special labels such as “Say hello.”

Set `profile.github` to your real HTTPS profile URL if desired. Add other professional profiles as `{ label, url }` objects. Unconfigured or invalid external-profile links stay hidden; no GitHub profile URL is fabricated. To retain configured links without scripts, add the equivalent anchors to the HTML contact sections. There is no contact form or simulated submission.

The About page identifies Dorjsembe as a self-taught programmer. `profile.age` is the editable displayed age; mirror it in the static About profile. No birth date is stored in the site. Exact birthday-based automatic updates would expose that date in a fully static client, so age updates are manual.

Contact sections include email, Discord, and phone. `profile.discord` is a username; it is displayed with `@` and offers a copy button when the browser supports secure clipboard access. A username alone is not used to invent a Discord profile link. `profile.phone` creates a real `tel:` link. Keep the static contact blocks in Home, About, and the print document in sync.

Contact labels use local email, Discord, and phone SVG icons. Their `data-contact-method` attributes select decorative CSS masks while the visible text keeps each method accessible. Sources and licenses are in `assets/icons/contact/`. Contact rows share one width and type scale; on phones, labels sit above the values so the supplied email and phone number remain intact.

`profile.zangia` remains empty until a verified public profile/CV link is available. The bare `/my-cv` account page is not used as a public profile URL. Unconfigured profile links stay hidden.

### Projects, screenshots, and references

`projects.html` is a compact directory with category filters and links to four separate project pages. The filters appear only when JavaScript is available; all cards remain visible without scripts. Keep `data-project-filters`, `data-project-filter`, `data-project-category`, and the live `data-filter-status` hooks aligned when changing categories.

Each detail page contains a short overview, role, technology tags, official reference, contribution topic panels, a native engineering-takeaway disclosure, an evidence area, and project navigation:

| Detail page             | Contribution topics                                                                                           | Confirmed DataStore categories                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `first-mn.html`         | Independent TypeScript website; C# CounterStrikeSharp plugins; separate JavaScript Discord bot; coordination. | No Roblox DataStore claim.                                    |
| `arsenal.html`          | Main weapon framework; Gun Game rotation; player data; battlepass and event progression.                      | Inventory, player stats, event progress, battlepass progress. |
| `counter-blox.html`     | Weapon framework; persistent data; Twitter-code redemption; trading.                                          | Economy and inventory.                                        |
| `typical-colors-2.html` | Object-oriented PlayerClass; player data; gameplay rotation.                                                  | Inventory, player stats, settings, custom map builder data.   |

The Roblox work is described as contributions within development teams. The approximate 2015 to 2023 period and built-in Roblox development environment belong to the shared experience context. PlayerClass is presented as an object-oriented approach intended to make player classes more manageable. Do not add module architectures, network protocols, persistence strategies, trading guarantees, performance results, or per-game dates without further evidence. The custom map builder category describes persistent data work, not implementation of the builder itself.

The contribution navigation starts as real anchors inside `data-system-explorer`, using `data-system-tabs` and `data-system-tab` to target section IDs. `project-pages.js` progressively adds tab/tablist/tabpanel roles, selected state, and one visible panel. Arrow keys move between topics; Home and End select the first and last. The selected topic updates the URL hash, and direct hash links select the matching panel. With JavaScript disabled, every panel remains visible and the same links act as ordinary in-page anchors. Preserve those IDs and hooks when editing content. The native engineering `<details>` remains usable without JavaScript.

#### Add authentic development evidence

No development screenshots have been supplied yet. Each detail page therefore has a clearly labeled static placeholder describing the intended evidence. Its caption is a request for future evidence, not proof that a system or code is visible. Official artwork stays separate from these placeholders.

Place supplied images in `assets/projects/evidence/` using simple filenames such as `arsenal-studio.webp`. Add entries to the matching project's `evidence` array:

```js
evidence: [
  {
    src: "./assets/projects/evidence/arsenal-studio.webp",
    alt: "Describe the actual development view supplied by the author.",
    caption: "State what is visible and how the author contributed.",
  },
],
```

This is an editing example, not a shipped image path. Use existing local PNG, JPEG, WebP, GIF, or AVIF files, a nonempty descriptive `alt`, and a caption grounded in the actual image. Keep unavailable arrays empty. Do not replace the `screenshot` identity artwork field with evidence: `evidence` is the gallery source, while `screenshot` and `screenshotAlt` continue to identify the project visual.

With valid entries, the script replaces the matching `data-evidence-gallery` placeholder with an image, caption, image-count status, Previous/Next controls, and thumbnails when there is more than one image. A failed image displays an unavailable message. Buttons and thumbnail selections support normal keyboard activation. Selecting the main image opens a native `<dialog>` when supported; Escape, Close, or clicking its backdrop dismisses it and focus returns to the image link. Left and Right move between images in the dialog. If the browser lacks native modal support, the image link opens the original local image in a new tab.

For supplied screenshots to remain available without JavaScript, also replace the placeholder in the corresponding detail HTML with real static figures containing the local image, descriptive alt text, caption, and an original-image link with `target="_blank"` and `rel="noopener noreferrer"`. Keep the `data-evidence-gallery` wrapper so the script can enhance that same content. Adding entries only to the JavaScript array does not populate the no-script page.

The included official game artwork and 1sT.MN logo identify the projects. They are not contribution screenshots or evidence of individual contributions. Their provenance is recorded in [assets/projects/SOURCES.md](assets/projects/SOURCES.md). Official game links are labeled accordingly. Set `referenceUrl` and `referenceLabel` to real public references; leave an unavailable reference blank and remove its static fallback link too.

Project cards and titles open the corresponding local detail page in a new tab. Official website/game references also open in new tabs, with `target="_blank"`, `rel="noopener noreferrer"`, and an accessible new-tab label. Breadcrumbs and “All projects” return to the directory in the current tab. Keep the static link destinations and data fields consistent.

### Languages, skills, and icons

The About page shows six local language/web icons from `languages`: Lua, JavaScript, TypeScript, C#, HTML, and CSS. Git and GitHub use two additional static icons in the tool strip. Keep the `languages` array and the HTML icon grid in sync. To add a tool icon, update the static tool strip too.

The icons are original Devicon SVG assets, with source URLs in [assets/icons/languages/SOURCES.md](assets/icons/languages/SOURCES.md) and the preserved MIT license in [LICENSE.devicon.txt](assets/icons/languages/LICENSE.devicon.txt). They require no CDN or runtime package. The favicon is `assets/icons/favicon.svg`.

The four skill groups are Programming, Roblox development, Engineering, and Web & servers. They distinguish languages, directly implemented gameplay and data systems, experience with existing codebases and technical debt, and web/server/community development. HTML/CSS and Git/GitHub remain in the requested toolkit without invented project claims or proficiency percentages.

Populate `learning` only with confirmed current-learning topics. It is empty by default. Add the equivalent HTML learning content and visibility state if it should also appear without scripts.

## Content still to supply

The public name, alias, email, and gameplay/DataStore contributions are already supplied. Additional content is optional:

- [ ] A GitHub profile URL and other professional-profile links you want public.
- [ ] Authentic contribution screenshots with useful captions and image descriptions.
- [ ] Public contribution references or repositories, where available. Existing official project links do not verify individual contributions.
- [ ] Further implementation details, only if you choose to provide and substantiate them.

The current study fact is second-year Computer Science at the University of Finance and Economics, UFE / СЭЗИС, Mongolia. Update the year when appropriate.

## View the CV, download it, or print the portfolio

**View CV** links open `cv.html` before any download. They appear in screen-page headers and mobile menus, the Home introduction, the About profile, and the print toolbar. These ordinary relative links work without JavaScript and are not redirected by `profile.cv`.

The CV page shows two full-page images, `assets/cv/dorjsembe-cv-page-1.png` and `assets/cv/dorjsembe-cv-page-2.png`, each 1191 × 1684 pixels. **Download CV** is available on that preview page and serves `./assets/cv/dorjsembe-cv.pdf` using the browser's native `download` attribute. **Open PDF** provides the source document in a new tab for selectable text and document zoom. Both controls work without JavaScript. Set `profile.cv` to a local asset path if the public PDF changes, and update the static `data-cv-file-link` anchors in `cv.html` too. JavaScript only enhances those file controls when the configured path passes the local-asset check; preview links stay on `cv.html`.

Use a sanitized public copy for the CV asset. Keep private source documents outside the publishing folder, and check the PDF's visible content, searchable text, and metadata before replacing it. When the public PDF changes, regenerate both preview PNGs from that sanitized public copy and update their image dimensions if needed. Rendering is an offline content-maintenance step; the website has no runtime renderer, package, API, or build dependency. Include the public PDF and both preview images when publishing. The download serves an existing file and does not generate a CV in the browser.

The included public copy removes the birth date, national registration number, and secondary phone number. It displays the supplied public age and Discord handle instead of the private ID fields. Both pages were rendered and checked; the original downloaded CV stays outside this project and is unchanged.

**Print portfolio** is a separate option that opens `print.html`, available from the About profile and mobile menus. Its **Print / Save as PDF** button calls `window.print()` to open the browser's native print dialog. Without JavaScript, open `print.html` and use the browser's Print command.

Choose **Save as PDF** in that dialog to save the printable portfolio. The print action does not automatically generate or download a PDF.

The dedicated document has five deliberate A4 content groups:

1. Personal introduction and selected-project overview.
2. The 1sT.MN overview, verified responsibilities, and shared Roblox development context.
3. Arsenal and Counter Blox contributions, persistence, and engineering lessons.
4. Typical Colors 2's PlayerClass work, persistence, and shared player-data categories.
5. Technical skills, the compact study fact, and configured contact information.

Use A4 paper, 100% scale, and the browser's default margin setting so the CSS `@page` margins can apply. Disable browser headers and footers for a clean result. The stylesheet sets 16mm margins, deliberate page starts, grayscale text, and rules to avoid splitting entries where space allows. Check the native preview after content changes: exact pagination depends on the browser, content length, and printer settings.

## Publish with GitHub Pages

The public site is [uuganchimegdorjsembe.github.io](https://uuganchimegdorjsembe.github.io/), with source in [the portfolio repository](https://github.com/UuganchimegDorjsembe/uuganchimegdorjsembe.github.io). GitHub Pages publishes the `main` branch from `/(root)`. Push future updates to `main` to deploy them automatically.

1. Commit the files to the repository's `main` branch with all nine HTML pages at the repository root, including the four project detail pages. Include the CSS, JavaScript, assets, and `.nojekyll` file.
2. Open the GitHub repository and go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** as the source.
4. Choose **main** and **/(root)**, then select **Save**.
5. Wait for the deployment and open the URL displayed in Pages settings.

If the publishing branch has a different name, select that existing branch instead. GitHub documents these settings in [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Keep local URLs relative: `./arsenal.html`, `./about.html#skills`, and `./assets/projects/evidence/arsenal-studio.webp` work under a repository subpath when the referenced files exist. Avoid paths beginning with `/`, which point at the domain root. CSS asset paths are relative to the CSS file, such as `../assets/fonts/Manrope.ttf`. No server routes, rewriting, or custom workflow are required. Keep `.nojekyll` at the publishing root.

Generated files in `output/` and temporary local files are excluded from Git. The public CV, its two preview images, and the supplied profile picture are included in `assets/`.

## Checks before publishing

- [ ] Inspect Home, the Projects directory, all four detail pages, About, the CV preview, and the print document at desktop and mobile widths.
- [ ] Follow all page links and hash targets, including direct entry to a project URL under a repository subpath.
- [ ] Check the native mobile menu, keyboard focus, real email links, and any configured external profiles.
- [ ] Disable JavaScript and confirm the HTML fallback on every page.
- [ ] Check directory filters, topic tabs, direct topic hashes, Arrow/Home/End navigation, and native engineering disclosures.
- [ ] If authentic evidence is configured, check captions, thumbnails, Previous/Next, modal zoom, Escape, focus return, unavailable-image behavior, and the original-image link fallback. Mirror those images in static HTML and verify them without scripts.
- [ ] Check that local artwork, font files, and SVG icons load, with no browser-console errors.
- [ ] Follow View CV and confirm that it opens the two-page preview before downloading. Test Download CV and Open PDF from that page under both the root and repository-subpath URLs, including with JavaScript disabled.
- [ ] Use the native print dialog to inspect all five A4 groups and confirm that controls are hidden. Exact page count can vary with content and browser settings.
- [ ] Test the deployed repository-subpath URL after GitHub Pages finishes publishing.
