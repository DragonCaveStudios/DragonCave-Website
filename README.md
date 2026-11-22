# DragonCave-Website

The website for **dragoncavestudios.co.uk**: DragonCave Studios (games) and DragonCave (music).

Plain HTML and CSS. No build step: edit a file, commit, and GitHub Pages publishes it within a minute or two.

## Pages
| Page | File | Address |
|---|---|---|
| Home | `index.html` | / |
| Games | `games/index.html` | /games/ |
| Music | `music/index.html` | /music/ |
| About | `about/index.html` | /about/ |
| Work with me | `work/index.html` | /work/ |
| Contact | `contact/index.html` | /contact/ |
| Privacy | `privacy/index.html` | /privacy/ |
| Not found | `404.html` | any wrong address |

## Other folders
- `css/site.css`: shared look (header, footer, buttons, colours, fonts). `css/music.css` and `js/music.js` are for the Music page only.
- `img/`: logo, covers (`img/covers/<id>.jpg`), game screenshots (`img/games/`).
- `fonts/`: Anton and Barlow Condensed, stored here so nothing loads from Google.
- `CNAME`: the custom domain.

## "Coming soon" items to swap in later
Search the files for `soon` to find them all.
- **Store pages (Steam, Epic, GOG)**: `games/index.html` and the Driftfire block on `index.html`. Replace each `<span class="btn btn-soon">…</span>` with a link, e.g. `<a class="btn btn-red" href="STEAM-LINK">Wishlist on Steam</a>`.
- **Games YouTube channel**: the "More from the cave" block on `games/index.html`. Also add "YouTube (games)" to the footer of every page and point the Contact page at it where it fits. The music channel is `@dragoncavemusic`. Discord invite (permanent): https://discord.gg/nP9wSxY3sB (footer, Games, Home, Contact).
- **Mailing list**: the "Hear it first" section on `index.html`.
- **Contact forms**: `contact/index.html`.
- **Work with me enquiries**: `work/index.html`.
- **Press kit**: `about/index.html`.
- **Deezer, Apple Music and social links**: marked with comments in `music/index.html` and the footer of every page.

## Music page: add a new release
1. Put the square cover in `img/covers/<id>.jpg` (square, 800×800 JPEG; id = lower case title with dashes, e.g. `signal-flow`).
2. In `music/index.html`, copy one card `<li>` in the Releases grid and paste it at the top. Change the id, title, type, date and `data-out="YYYY-MM-DD"`.
3. Copy one `<article class="release-panel">` and paste it at the top of the panels. Same id, same `data-out`, new note and tracklist.
4. Before the release date the card shows "Out ..."; from the release day it shows "Listen on Spotify" by itself.

When a new album comes out, also replace the "Latest album" block near the top of `music/index.html`, and the "Fresh from the cave" cards on `index.html`.

## Changing the header or footer
It's repeated on every page, so change it in each `index.html` (and `404.html`).

