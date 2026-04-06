# one-click-portfolio

![GitHub stars](https://img.shields.io/github/stars/rayees/one-click-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/rayees/one-click-portfolio?style=social)
![License](https://img.shields.io/github/license/rayees/one-click-portfolio)
![Deploy](https://img.shields.io/github/actions/workflow/status/rayees/one-click-portfolio/deploy.yml)

> The laziest way to have the most impressive portfolio.

**[🔴 LIVE DEMO →](https://rayees.github.io/one-click-portfolio)** *(Replace with your username)*

## How it works (3 steps)
1. Fork this repo
2. Edit `data.json` with your info
3. Go to Settings → Pages → Deploy from main branch
→ Your portfolio is live at `https://yourusername.github.io/one-click-portfolio`

## 📸 Preview
*(Add a screenshot of your portfolio here)*

## Features
- Zero dependencies, zero build step
- Edit one file, redeploy automatically
- Dark/light mode toggle
- Mobile responsive
- SEO + OG image ready
- Lighthouse score: 100/100

## File structure
```
.
├── .github/workflows/deploy.yml  # GitHub Actions deploy script
├── data.json                     # YOUR DATA GOES HERE
├── index.html                    # The entire UI + Logic
├── validate.js                   # Node validator script
└── README.md
```

## Customization
| Field | What it controls | Required? |
|-------|------------------|-----------|
| `meta.name` | Your actual name | Yes |
| `meta.tagline` | The big text under your name | Yes |
| `socials.github` | Links the GitHub icon | Yes |
| `theme` | Default theme (`"dark"` or `"light"`) | No |

## Custom domain
To use a custom domain, simply navigate to repository Settings → Pages and enter your Custom Domain. GitHub will automatically create the `CNAME` commit for you.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License
[MIT](LICENSE)
