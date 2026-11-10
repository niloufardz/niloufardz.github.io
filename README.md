# Niloufar Dizangian — personal website

Plain HTML/CSS/JS. No build step: open `index.html` in a browser to see it on your computer.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: intro, about, research interests, news |
| `research.html` | Thesis, contributions, interactive quadratic-boost lab, tools |
| `publications.html` | Journal and conference papers |
| `experience.html` | Research jobs, teaching, education, awards, service |
| `cv.html` | Download and preview of the CV |
| `feed.html` | Feed: videos, articles and posts about you |
| `js/site.js` | **Your details** (name, status line, links, menu). Edit the `SITE` block at the top. |
| `css/site.css` | Colours and layout |
| `assets/img/profile.jpg` | Your photo |
| `files/` | CV, poster and programme PDFs linked from the site |

## Common edits

- **Add a news item:** in `index.html`, copy one `<div class="row">…</div>` line and change the date and text. Newest goes on top.
- **Add a feed item (video, article, post):** in `feed.html`, copy one `<article class="feed-item">…</article>` block to the top of the list and change the date, source, title, text and links.
- **Add a paper:** in `publications.html`, copy one `<div class="pub">…</div>` block.
- **Add or change a profile link:** edit the `links` list in `js/site.js`.
- **Change the "Open to…" line:** `status` in `js/site.js`.
- **Update a CV:** replace the PDF in `files/` with the same file name.

## Publish free on GitHub Pages

1. On GitHub, create a new **public** repository named exactly `YOURUSERNAME.github.io`
   (with username `niloufardz` → `niloufardz.github.io`).
   If you plan to rename your GitHub account, do it first: the site address follows the username.
2. Upload everything in this folder (the files, not the folder itself) and commit.
   With GitHub Desktop: clone the repo, copy the files in, commit, push.
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. After a minute or two the site is live at `https://YOURUSERNAME.github.io`.

Every time you push a change, the site updates by itself.
