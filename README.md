---

# one-click-portfolio

[![GitHub stars](https://img.shields.io/github/stars/RayeesYousufGenAi/one-click-portfolio?style=social)](https://github.com/RayeesYousufGenAi/one-click-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/RayeesYousufGenAi/one-click-portfolio?style=social)](https://github.com/RayeesYousufGenAi/one-click-portfolio/network/members)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Deploy](https://img.shields.io/github/actions/workflow/status/RayeesYousufGenAi/one-click-portfolio/deploy.yml?label=deploy&logo=githubactions&logoColor=white)](https://github.com/RayeesYousufGenAi/one-click-portfolio/actions)
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://RayeesYousufGenAi.github.io/one-click-portfolio)

> **The laziest way to have the most impressive portfolio.**
> Fork it. Edit one file. You're live.

## 🔴 [LIVE DEMO →](https://RayeesYousufGenAi.github.io/one-click-portfolio)

---

## ⚡ How it works (3 steps)

```bash
# Step 1: Fork this repo
# Step 2: Edit data.json with your info  
# Step 3: Go to Settings → Pages → GitHub Actions
# Done. Your portfolio is live at:
# https://YOUR-USERNAME.github.io/one-click-portfolio
```

---

## 📸 Preview

![Portfolio Preview](https://RayeesYousufGenAi.github.io/one-click-portfolio/og-preview.png)

> ⚡ Dark mode by default. Light mode toggle included.

---

## ✨ Features

| Feature | Status |
|---|---|
| Zero dependencies, zero build step | ✅ |
| Edit **one file** → auto redeploy | ✅ |
| Dark / Light mode toggle | ✅ |
| Fully mobile responsive | ✅ |
| SEO + Open Graph ready | ✅ |
| Sections: Hero, About, Experience, Projects, Skills, Education | ✅ |
| Graceful fallback (missing fields auto-hide) | ✅ |

---

## 📁 File structure

```
one-click-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml     ← Auto deploys on every push
├── data.json              ← ✏️  ONLY FILE YOU NEED TO EDIT
├── index.html             ← Full UI + Logic (no framework)
├── validate.js            ← Checks your data.json before deploy
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## ✏️ Customization (edit `data.json`)

| Field | What it controls | Required |
|---|---|---|
| `meta.name` | Your full name | ✅ Yes |
| `meta.tagline` | Subtitle under your name | ✅ Yes |
| `meta.avatar` | Profile photo path | No |
| `meta.resume` | Resume PDF path | No |
| `socials.github` | GitHub profile link | ✅ Yes |
| `socials.linkedin` | LinkedIn link | No |
| `socials.twitter` | Twitter/X link | No |
| `socials.email` | Contact email | No |
| `experience` | Work history timeline | No |
| `projects` | Project cards | No |
| `skills` | Skill tags by category | No |
| `education` | Education section | No |
| `theme` | `"dark"` or `"light"` default | No |

---

## 🌐 Custom Domain

1. Go to **Settings → Pages**
2. Enter your domain under **Custom Domain**
3. Add a `CNAME` record pointing to `RayeesYousufGenAi.github.io`

---

## 🤝 Contributing

Contributions welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

Want to add a new theme? Drop a PR with your CSS variables in a `themes/` folder.

---

## 📄 License

[MIT](LICENSE) — free to use, fork, and modify.

---

<p align="center">
  Made with ❤️ · <a href="https://RayeesYousufGenAi.github.io/one-click-portfolio">Live Demo</a> · <a href="https://github.com/RayeesYousufGenAi/one-click-portfolio">Star this repo ⭐</a>
</p>

---
