# Joseph Thomas Mansilla — portfolio

Personal developer site built with **vanilla HTML, CSS, and JavaScript**. No npm, bundlers, React, or TypeScript.

## Local preview

Do not open `index.html` as a `file://` URL if you want the contact form `fetch` to behave like production. Use a static server from this folder:

```bash
cd portfolio
python -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

Alternatively, from the parent folder:

```bash
npx --yes serve portfolio
```

Pages: `index.html` (home), `about.html`, `experience.html`, `projects.html`, `project.html?id=`, `articles.html`, `contact.html`. The site is dark only, with a yellow accent. A constellation background loads from the tsparticles CDN.

### What to check

- Desktop layout and a narrow (~375px) viewport
- Hamburger menu on small screens
- Experience: Education and Work side by side on a wide screen, stacked on a phone. Courses stay hidden until you add `type: "course"` items
- Project cards open `project.html?id=...`
- Article cards leave the site
- Contact validation (Formspree will not send until you set `FORMSPREE_ID` in `js/contact.js`)

Sticky hover, notch/safe-area, and input zoom need a **real phone**. Desktop device emulation does not reproduce those.

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io).
2. Copy the ID from `https://formspree.io/f/xxxxxxxx`.
3. Replace `YOUR_FORMSPREE_ID` in `js/contact.js`.

## Edit your content

| File | What to change |
| --- | --- |
| `js/experience.js` | Education, work, and courses (`EXPERIENCE`) |
| `js/projects.js` | About chips (`TECH_STACK`), cards, and `details` |
| `js/articles.js` | Article cards and `SUBSTACK_URL` |
| `about.html` | Bio |
| `assets/images/` | Replace `placeholder-avatar.svg` with a photo (keep `alt` text in HTML) |

## GitHub Pages

Pages can serve the **repository root** or a **`/docs`** folder, not an arbitrary `portfolio/` directory.

1. Create a GitHub repo (for a user site: `josephmansilla.github.io`).
2. Copy the **contents** of this `portfolio/` folder to the repo root, or into `/docs`.
3. GitHub → Settings → Pages → Deploy from branch `main`, folder `/` (or `/docs`).
4. Set `FORMSPREE_ID` before you share the live URL.

If the repo is `josephmansilla.github.io` and files sit at the root, the site is `https://josephmansilla.github.io/`.

## Design notes

Visual motion and mobile polish follow the notes in `skills/` (Apple-style materials/type, native mobile CSS). UI-library picks in `skills/pick-ui-library` were **not** installed, so the site stays static.
