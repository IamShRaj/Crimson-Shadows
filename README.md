# StoryWeb Creator - Transform Any Story Idea into a Professional Website

Turn your story ideas into beautiful, professional story websites using GitHub Copilot and our comprehensive templates. Built on [Docusaurus](https://docusaurus.io/), featuring gothic themes, character guides, and immersive reading experiences.

## 🌟 Featured Example: Crimson Shadows

Visit our showcase story at: **https://iamshraj.github.io/Crimson-Shadows/**

> A gothic romance thriller demonstrating the full capabilities of our story website system.

## ✨ What You Can Create

- **Full-Length Novels**: Prologue, 15+ chapters, and epilogue
- **Character Profiles**: Detailed character pages with backgrounds and relationships
- **Interactive Timeline**: Chronological story events and world-building
- **Gothic Themes**: Dark, atmospheric styling perfect for romance/thriller stories
- **Mobile-Optimized**: Beautiful reading experience on all devices
- **Auto-Deploy**: GitHub Pages deployment with every update
- **AI-Ready**: Complete prompts for generating story images

## 🚀 Quick Start (5 Minutes)

1. **Choose a template**: `story-template.md` (simple) or `copilot-story-conversion-prompt.md` (advanced)
2. **Fill in your story idea**: Replace placeholders with your characters, plot, and settings
3. **Ask Copilot**: Paste template + "Convert this to a complete story website"
4. **Deploy**: Commit to GitHub and enable Pages for instant publishing

👉 **[Read the Complete Quick Start Guide](QUICK-START.md)**

## � Available Templates

### 1. Simple Story Template (`story-template.md`)
- **Best for**: First-time users, straightforward stories
- **Features**: Guided prompts, easy to fill out
- **Output**: Complete story website with standard features

### 2. Advanced Conversion Prompt (`copilot-story-conversion-prompt.md`)
- **Best for**: Professional sites, complex stories
- **Features**: Comprehensive technical specifications, custom styling
- **Output**: Production-ready site with deployment configuration

### 3. Example Implementation (`example-story-conversion.md`)
- **Best for**: Understanding the template format
- **Features**: Complete "Midnight Garden" story example
- **Output**: Reference for your own story ideas

## 🎯 Template Features

| What You Get | Simple Template | Advanced Template |
|--------------|----------------|-------------------|
| **Story Content** | ✅ 15+ Chapters | ✅ 15+ Chapters |
| **Character Profiles** | ✅ Basic | ✅ Detailed |
| **Custom Styling** | ✅ Standard Gothic | ✅ Story-Specific Theme |
| **AI Image Prompts** | ✅ Basic | ✅ Comprehensive |
| **Deployment Config** | ✅ GitHub Pages | ✅ Full CI/CD |
| **SEO Optimization** | ✅ Basic | ✅ Advanced |

## 🎨 Customization Examples

- **Romance Focus**: Warm colors, character relationship tracking
- **Mystery Thriller**: Dark themes, clue tracking, red herrings
- **Historical Fiction**: Period-appropriate styling, historical timeline
- **Fantasy**: Magical themes, world-building sections, character powers

## �🚀 Development

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

### Generate Images (Optional)

```bash
node scripts/generate-images.js
```

Creates optimized favicons, social cards, and hero images for your story.

## 📚 Example: Crimson Shadows Structure

- **Prologue**: The mysterious invitation
- **Part I: The Awakening** (Chapters 1-5): Discovery and initial attraction
- **Part II: Temptation** (Chapters 6-10): Power exploration and complications  
- **Part III: Revelation** (Chapters 11-15): Climax and resolution
- **Epilogue**: New beginnings

## 🎭 Features

- **Gothic-themed design** with atmospheric styling
- **Mobile-responsive** reading experience
- **Character relationship tracking** and detailed profiles
- **Interactive timeline** of events and world-building
- **Chapter navigation** with reading progress indicators
- **SEO-optimized** for discoverability and social sharing
- **AI image integration** with generated prompts
- **Auto-deployment** to GitHub Pages

## 🔄 Automatic Deployment

This site uses **GitHub Actions** for automatic deployment to GitHub Pages. Every time you push changes to the `main` branch:

1. GitHub Actions automatically builds the site
2. Deploys to GitHub Pages
3. Your story is live within minutes

## 🎨 AI Image Generation

Each template includes comprehensive AI image prompts for:
- **Chapter headers**: Atmospheric scene illustrations
- **Character portraits**: Detailed character visualizations  
- **Story poster**: Professional book cover design
- **Social media cards**: Shareable story previews
- **Homepage hero**: Eye-catching main banner

Use these prompts with AI image generators like DALL-E, Midjourney, or Stable Diffusion.

## 🔧 Technical Stack

- **Framework**: Docusaurus 3.0
- **Styling**: Custom CSS with CSS Variables
- **Deployment**: GitHub Actions → GitHub Pages
- **Image Processing**: Sharp.js for optimization
- **Search**: Built-in Algolia DocSearch integration
- **Analytics**: Ready for Google Analytics, Plausible, etc.

## 📖 Documentation

- **[Quick Start Guide](QUICK-START.md)**: Get started in 5 minutes
- **[Story Template](story-template.md)**: Simple template for new users
- **[Advanced Template](copilot-story-conversion-prompt.md)**: Comprehensive prompt for professional sites
- **[Example Story](example-story-conversion.md)**: "The Midnight Garden" template example
- **[AI Prompts](prompts.md)**: Ready-to-use image generation prompts

## 🤝 Contributing

1. Fork the repository
2. Create your story using the templates
3. Submit a pull request with your improvements
4. Share your story site with the community!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Docusaurus Team**: For the excellent static site generator
- **GitHub Copilot**: For enabling AI-powered story generation
- **Open Source Community**: For inspiration and feedback

---

**Ready to create your story website?** Start with the [Quick Start Guide](QUICK-START.md) and bring your story to life!
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
