# Complete Story-to-Site Conversion Prompt for Copilot

> **Purpose**: This is a comprehensive prompt template for converting any story idea into a complete Docusaurus story website like "Crimson Shadows". Use this when you want Copilot to create an entire story site from scratch.

---

## 🎯 CONVERSION INSTRUCTIONS FOR COPILOT

When I provide you with a story idea using the template below, please create a complete Docusaurus story website with the following specifications:

### 📚 Story Structure Requirements
- **Format**: Full-length novel with prologue, 15+ chapters, and epilogue
- **Style**: Rich, atmospheric prose in the gothic romance/thriller genre
- **Length**: Each chapter should be 2000-3000 words for immersive reading
- **Tone**: Dark, romantic, mysterious with supernatural undertones

### 🏗️ Technical Structure to Create
1. **Story Files** (markdown with Docusaurus frontmatter):
   - `docs/prologue.md`
   - `docs/part1/chapter1.md` through `docs/part1/chapter5.md`
   - `docs/part2/chapter6.md` through `docs/part2/chapter10.md`
   - `docs/part3/chapter11.md` through `docs/part3/chapter15.md`
   - `docs/epilogue.md`

2. **Supporting Documentation**:
   - `docs/characters.md` - Detailed character profiles
   - `docs/timeline.md` - Story chronology
   - `docs/story-outline.md` - Plot summary and structure

3. **Navigation Files**:
   - Update `sidebars.js` with proper story navigation
   - Update `docusaurus.config.js` with story title and theme

4. **Visual Elements** (provide descriptions for):
   - Custom favicon concept
   - Hero image for homepage
   - Social media card design
   - Chapter header images (descriptions for AI generation)

5. **Styling**:
   - Update `src/css/custom.css` with gothic theme colors
   - Modify homepage (`src/pages/index.js`) to reflect new story
   - Update homepage features (`src/components/HomepageFeatures/`)

### 🎨 Design Requirements
- **Color Scheme**: Dark, moody colors appropriate to the story theme
- **Typography**: Elegant, readable fonts that enhance atmosphere
- **Layout**: Clean, immersive reading experience
- **Navigation**: Intuitive chapter progression with clear story structure

### 📝 Writing Style Guidelines
- **Atmosphere**: Create immersive, sensory-rich descriptions
- **Character Development**: Show growth through actions and internal conflict
- **Dialogue**: Natural but genre-appropriate conversations
- **Pacing**: Build tension while developing relationships
- **Chapter Hooks**: End each chapter with compelling cliffhangers
- **Themes**: Weave central themes naturally throughout the narrative

### 🔧 Additional Deliverables
- **AI Image Prompts**: Create `prompts.md` with detailed prompts for:
  - Chapter header images
  - Character portraits
  - Key scene illustrations
  - Homepage hero image
  - Book cover/poster design

- **Deployment Ready**: 
  - GitHub Actions workflow (`.github/workflows/deploy.yml`)
  - Updated package.json with proper dependencies
  - .gitignore file for clean repository

---

## 📋 STORY IDEA TEMPLATE

### Story Overview
**Title**: [Your compelling story title]

**Genre**: [Primary: Gothic Romance/Thriller, Secondary: Historical/Paranormal/etc.]

**Setting**: 
- **Time Period**: [When does this take place?]
- **Location**: [Where does the story unfold?]
- **Atmosphere**: [What's the mood and feel?]

**Logline**: [One sentence summary of your story]

### Main Characters

#### Protagonist
- **Name**: [Character name]
- **Age**: [Age]
- **Background**: [Their history and what drives them]
- **Personality**: [Key traits that define them]
- **Goal**: [What do they want to achieve?]
- **Flaw**: [What holds them back?]

#### Love Interest
- **Name**: [Character name]
- **Age**: [Age]
- **Background**: [Their history and secrets]
- **Personality**: [What makes them compelling?]
- **Dark Secret**: [What are they hiding?]
- **Connection to Plot**: [How do they tie into the mystery?]

#### Antagonist
- **Name**: [Character name]
- **Motivation**: [Why do they oppose the protagonist?]
- **Methods**: [How do they create conflict?]
- **Connection**: [How do they relate to other characters?]

#### Supporting Cast
- [List 3-5 key supporting characters with brief descriptions]

### Plot Structure

#### Three-Act Breakdown
**Act 1 - Setup (Chapters 1-5)**:
- Inciting incident: [What pulls the protagonist into the story?]
- World establishment: [How do you introduce the setting and atmosphere?]
- Character introductions: [How do the main characters meet?]
- Initial mystery: [What questions are raised?]

**Act 2 - Development (Chapters 6-10)**:
- Rising tension: [How does the conflict escalate?]
- Relationship development: [How does the romance progress?]
- Major obstacles: [What stands in the way?]
- Midpoint twist: [What major revelation changes everything?]

**Act 3 - Resolution (Chapters 11-15)**:
- Crisis point: [When everything seems lost]
- Final confrontation: [How do conflicts come to a head?]
- Resolution: [How are mysteries solved and relationships resolved?]
- New equilibrium: [What's the new status quo?]

#### Key Mysteries/Conflicts
1. [Central mystery that drives the plot]
2. [Romantic tension and obstacles]
3. [Character secrets and revelations]
4. [Supernatural or gothic elements]

### Themes & Atmosphere

#### Primary Themes
- [Theme 1: e.g., "Love conquers darkness"]
- [Theme 2: e.g., "Truth hidden beneath beauty"]
- [Theme 3: e.g., "Redemption through sacrifice"]

#### Gothic Elements
- [Supernatural occurrences, if any]
- [Family curses or secrets]
- [Mysterious locations]
- [Symbolic objects or imagery]

#### Atmosphere Descriptors
- [How should readers feel? Tense? Romantic? Mysterious?]
- [What imagery dominates? Shadows? Moonlight? Storms?]
- [What sensory details are important?]

### Style Preferences
- **Pacing**: [Fast thriller? Slow burn? Gradual revelation?]
- **Heat Level**: [Sweet romance? Steamy? Fade to black?]
- **Violence Level**: [How intense should conflicts be?]
- **Supernatural Level**: [Subtle hints? Obvious magic? Psychological?]
- **Ending Type**: [Happy? Bittersweet? Hopeful?]

### Inspiration & References
- [Books, movies, or stories that inspire this concept]
- [Specific scenes or elements you want to see]
- [Visual or cultural references]

### Special Requests
- [Any specific scenes you want included]
- [Particular character dynamics]
- [Unique plot elements or twists]
- [Cultural or historical details to research]

---

## 🚀 EXECUTION CHECKLIST FOR COPILOT

When creating the story site, ensure you:

- [ ] Create all required markdown files with proper frontmatter
- [ ] Write compelling, atmospheric prose for each chapter
- [ ] Develop consistent character voices and growth arcs
- [ ] Build tension and mystery throughout the narrative
- [ ] Include vivid, sensory descriptions that create atmosphere
- [ ] End chapters with hooks that encourage continued reading
- [ ] Create detailed character profiles and timeline
- [ ] Update all configuration files (sidebars, docusaurus config)
- [ ] Design gothic-appropriate color scheme and styling
- [ ] Provide comprehensive AI image generation prompts
- [ ] Include deployment configuration for GitHub Pages
- [ ] Test navigation and ensure all links work properly

---

## 💡 USAGE INSTRUCTIONS

1. **Fill out the story template** above with your complete story idea
2. **Copy this entire document** and provide it to GitHub Copilot
3. **Add the instruction**: "Using the story idea provided in this template, create a complete Docusaurus story website following all the technical and creative specifications outlined. Generate all files, code, and content needed for a professional story site deployment."
4. **Review and refine** the generated content as needed
5. **Deploy** using the provided GitHub Actions workflow

---

*This template is designed to give Copilot everything needed to recreate the "Crimson Shadows" experience with your unique story. The more detail you provide in the template, the better and more personalized your generated story site will be.*
