# Project screenshots and development evidence

This folder contains fifteen user-supplied in-game screenshots: six Arsenal, four Counter Blox, and five Typical Colors 2 images. Public files are full-resolution sRGB WebP exports and 192px-wide thumbnails. Original PNGs remain outside the repository; derived exports omit source screenshot metadata.

| Full image                                  | Visible subject                                          |
| ------------------------------------------- | -------------------------------------------------------- |
| `arsenal-weapon-gameplay.webp`              | Equipped weapon during gameplay.                         |
| `arsenal-weapon-firing.webp`                | Weapon firing during gameplay.                           |
| `arsenal-monthly-contracts.webp`            | Monthly contracts interface.                             |
| `arsenal-locker-loadout.webp`               | Locker/loadout interface.                                |
| `arsenal-character-inventory.webp`          | Character inventory interface.                           |
| `arsenal-player-statistics.webp`            | Player statistics interface.                             |
| `counter-blox-weapon-gameplay.webp`         | First-person rifle gameplay and match HUD.               |
| `counter-blox-weapon-buy-menu.webp`         | Weapon buy menu and pistol options.                      |
| `counter-blox-pistol-inventory.webp`        | Pistol inventory, loadout slots, and weapon skins.       |
| `counter-blox-equipment-inventory.webp`     | Equipment inventory with knives and gloves.              |
| `typical-colors-2-class-selection.webp`     | Class selection, character preview, and current loadout. |
| `typical-colors-2-class-loadout.webp`       | Agent equipment, cosmetics, and saved loadouts.          |
| `typical-colors-2-weapon-gameplay.webp`     | Shotgun gameplay and daily contracts.                    |
| `typical-colors-2-melee-gameplay.webp`      | Melee gameplay and equipment selection.                  |
| `typical-colors-2-scoreboard-map-vote.webp` | Team scoreboard and voting for the next map.             |

Each image has a matching `-thumb.webp` file, for example `arsenal-weapon-gameplay-thumb.webp`. Captions describe the visible scene or UI only. These images do not establish interface authorship, PlayerClass architecture, or persistence implementation. In-game statistics are not development metrics.

Images appear inside related system topic panels, without separate gallery sections or pending-image placeholders. 1sT.MN has no supplied screenshots yet. Counter Blox redemption and trading also have no matching images; these panels remain text-only. Official artwork stays in the parent folder and identifies projects separately.

The current topic associations are:

- Arsenal gameplay and firing: `arsenal-weapons`; gameplay also appears in `arsenal-gun-game`. Monthly contracts: `arsenal-progression`. Locker, inventory, and statistics: `arsenal-datastore`.
- Counter Blox gameplay and buy menu: `counter-blox-weapons`. Pistol and equipment inventories: `counter-blox-datastore`.
- Typical Colors 2 class selection and loadout: `typical-colors-2-playerclass`; loadout also appears in `typical-colors-2-datastore`. Shotgun/melee gameplay and scoreboard/map vote: `typical-colors-2-rotation`.

When images are supplied:

1. Save local PNG, JPEG, WebP, GIF, or AVIF files here with simple filenames.
2. Add `{ src, alt, caption }` entries to the matching project's `evidence` array in `js/portfolio-data.js`. Optional `topics` contains full panel IDs without `#`; set it to map the image to related panels. Optional `thumbnail` points to a smaller local image and falls back to `src` when omitted. Optional `width` and `height` should match the full image. Use relative local paths, descriptive alt text, and a caption grounded in the actual image.
3. Place matching static figures, captions, and full-image links inside the related panel's `.system-evidence` wrapper. Set `data-evidence-gallery` to the project ID and `data-evidence-topic` to the full panel ID. The script filters the project's array by `topics` and enhances that same wrapper. All panels and figures remain available without JavaScript. If an image belongs to two topics, mirror its figure in both panels using the same asset.
4. Check the images and captions, thumbnail and Previous/Next controls, modal zoom, its Previous/Next buttons and full-size image link, Escape/focus return, missing-image handling, and no-script fallback before publishing.

Additional supplied evidence could show relevant UI, a Roblox development view or PlayerClass implementation, or 1sT.MN website/plugin/bot work. Include a contribution note where available and describe what the image actually shows. Keep originals outside the public repository and strip source metadata from derived exports.

Keep each project's array empty until its files exist. The root README documents the gallery behavior and the distinction between `evidence` and official `screenshot` artwork.
