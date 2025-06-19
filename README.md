# Crimson Shadows - Interactive Story Website

This is "Crimson Shadows," a sophisticated romance thriller story built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The website features an immersive reading experience with Gothic themes, character guides, and interactive timelines.

## 🌟 Live Website

Visit the live story at: **https://iamshraj.github.io/Crimson-Shadows/**

## 🚀 Development

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 📚 Story Structure

- **Prologue**: The mysterious invitation
- **Part I: The Awakening** (Chapters 1-5): Discovery and initial attraction
- **Part II: Temptation** (Chapters 6-9): Power exploration and complications
- **Epilogue**: Resolution and new beginnings

## 🎭 Features

- **Gothic-themed design** with atmospheric styling
- **Mobile-responsive** reading experience
- **Character relationship tracking**
- **Interactive timeline** of events
- **Chapter navigation** with reading progress
- **SEO-optimized** for discoverability

## 🔄 Automatic Deployment

This site uses **GitHub Actions** for automatic deployment to GitHub Pages. Every time you push changes to the `main` branch:

1. GitHub Actions automatically builds the site
2. Deploys it to GitHub Pages
3. Updates the live website at https://iamshraj.github.io/Crimson-Shadows/

### Adding New Chapters

1. Create new markdown files in the appropriate `docs/partX/` directory
2. Update `sidebars.js` to include the new chapters
3. Commit and push your changes
4. GitHub Actions will automatically deploy the updates

## 🛠️ Technical Details

- **Framework**: Docusaurus 3.8.1
- **Deployment**: GitHub Actions + GitHub Pages
- **Styling**: Custom CSS with Gothic theme
- **Content**: Markdown-based story chapters
