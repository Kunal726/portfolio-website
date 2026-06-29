# Portfolio Website

A fast, modern, single-page portfolio built with **React + Vite + Tailwind CSS v4** and **Framer Motion**. Everything you see is driven by one JSON file — edit `src/data/portfolio.json` and the whole site updates. The contact form sends real emails to your inbox via **Web3Forms** (free, no backend).

## ✨ Features

- 🎨 Polished dark theme with gradient accents, animated blobs, and scroll reveals
- 📄 **100% content-driven** by `src/data/portfolio.json` — no need to touch components
- 🧩 Sections: Hero, About + Skills, Experience timeline, Education, Projects, Certificates, Contact
- 📬 Working **Contact form** that emails you directly (Web3Forms) + spam honeypot
- 🔗 Social links, project Code/Demo links, certificate verify links
- 📱 Fully responsive + accessible, with reduced-motion support

## 🚀 Getting started

This project targets **Node 20+** (an `.nvmrc` is included).

```bash
# from the portfolio-website/ folder
nvm use            # picks up Node 20 from .nvmrc (run `nvm install 20` if missing)
npm install
npm run dev        # start the dev server (usually http://localhost:5173)
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## 📝 Customize your content

Open **`src/data/portfolio.json`** and replace the placeholder content:

| Field | What it is |
| --- | --- |
| `name`, `role`, `tagline`, `location` | Hero headline info |
| `email` | Shown in the contact section + used for the mailto link |
| `profileImage` | Path to your photo (see below). Falls back to your initials if missing |
| `resumeUrl` | Link to your resume PDF (leave `""` to hide the button) |
| `about`, `stats`, `skills` | About section. Use `\n` in `about` to split paragraphs |
| `social[]` | Your links. `icon` can be: `github`, `linkedin`, `mail`, `twitter`, `globe`, `instagram`, `youtube` |
| `experience[]` | Jobs with `role`, `company`, `period`, `location`, `summary`, `highlights[]` |
| `education[]` | Degrees with `degree`, `institution`, `period`, `score`, `description` |
| `projects[]` | `title`, `description`, `tech[]`, `github`, `demo`, `image` |
| `certificates[]` | `title`, `issuer`, `date`, `url`, `image` |
| `contact.web3formsAccessKey` | **Required to send email** — see below |

### Add your photo

Drop your image into the **`public/`** folder (e.g. `public/profile.jpg`) and set
`"profileImage": "/profile.jpg"` in the JSON. Same idea for project/certificate
images: put them in `public/` and reference them as `/my-image.png`. If no image
is set, a clean gradient placeholder is shown automatically.

## 📬 Enable the contact form (Web3Forms)

1. Go to **https://web3forms.com** and enter the email where you want to receive messages.
2. Copy the **Access Key** they email you (no account needed).
3. Paste it into `src/data/portfolio.json`:
   ```json
   "contact": { "web3formsAccessKey": "your-access-key-here" }
   ```

Until a valid key is set, the form shows a friendly notice and the button stays disabled.

## 🌐 Deploy

The built site is fully static, so it deploys anywhere.

### GitHub Pages — automatic ✅

A GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
builds and deploys the site on **every push to `main`**. One-time setup:

1. Create a new GitHub repo and push **this `portfolio-website` folder** as the repo root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Done. Every push to `main` rebuilds and redeploys. Your site goes live at
   `https://<you>.github.io/<repo>/`.

The workflow auto-detects the correct **base path** from your repo name, so asset
links work whether the repo is `my-portfolio` (served at `/my-portfolio/`) or
`<you>.github.io` (served at `/`) — no config needed.

### Vercel / Netlify

Import the repo — the framework is auto-detected as Vite. Build command `npm run build`, output directory `dist`.

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion.
