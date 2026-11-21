# HyperFrames Pro — Complete Install Guide

> **Official Open-Source Repository:** https://github.com/heygen-com/hyperframes

This guide covers installing **HyperFrames** (`heygen-com/hyperframes`) with **Claude Code**, other AI coding agents (**Cursor, VS Code, GitHub Copilot, Gemini CLI, OpenCode**), **HyperFrames Studio**, and the optional **Remotion + fal.ai** comparison stack.

---

## Prerequisites
- **Node.js 18+** (`node -v` and `npx -v`)
- **Claude Code CLI** (with Claude.ai Pro/Max or Anthropic API access) — or another supported AI coding agent
- **Git** (optional, for version controlling your `~/.hyperframes-studio/` video projects)

---

## 1. Install HyperFrames for Claude Code (Recommended)

Run the following two commands in your terminal to add the official HeyGen HyperFrames marketplace and install the versioned plugin:

```bash
claude plugin marketplace add heygen-com/hyperframes
claude plugin install hyperframes@hyperframes
```

### Enable Auto-Updates & Verify
1. Launch Claude Code inside your project folder:
   ```bash
   claude
   ```
2. Run `/plugin` inside Claude Code.
3. Navigate to **Marketplaces** → **hyperframes** → **Enable auto-update**.
4. Verify the skill is active by typing:
   ```text
   /hyperframes:hyperframes
   ```

---

## 2. Install for Other AI Coding Agents (Cursor, VS Code, Copilot, Gemini CLI, OpenCode)

For non-Claude-Code agents, install the HyperFrames agent skill directly via `npx`:

```bash
npx skills add heygen-com/hyperframes
```

When the interactive picker opens (nothing pre-selected by default), select the **Core Skills** group — that installs the `/hyperframes` router and rendering instructions.

---

## 3. Launch Local Preview Studio (`localhost:3002`)

HyperFrames renders standard HTML, CSS, JavaScript, and GSAP compositions locally. To open the interactive web studio (with **Compositions**, **Assets**, **Code**, **Catalog**, **Lint**, **Record a gesture**, and **Edit with Framey**):

```bash
cd ~/.hyperframes-studio/<your-project-folder>
npx hyperframes preview
```

This starts the local preview server (default `http://localhost:3002`).

---

## 4. Connect HyperFrames Studio Desktop App ↔ Claude Code

1. Open **HyperFrames Studio** and create or open a project.
2. Click the project folder badge at the bottom of the left agent pane → **Copy folder path** (stored locally at `~/.hyperframes-studio/`).
3. Open your terminal, `cd` into that folder, and run `claude`.
4. Prompt Claude to edit `index.html`, `boards/`, `STORYBOARD.md`, or GSAP animations. Changes sync live with the Studio preview.

---

## 5. Optional: Install Remotion + fal.ai Combined Stack (For Comparison)

If you want to run the composable React + TypeScript + fal.ai stack alongside HyperFrames:

```bash
# Scaffold a new Remotion project
npx create-video@latest

# Install fal.ai client and AWS Lambda renderer
npm install @fal-ai/client @remotion/lambda

# Set your fal.ai API key
export FAL_KEY="your_fal_api_key"

# Preview locally in Remotion Studio
npm run dev
```

---

## 6. Local Preview & Deployment of This Documentation Site

Serve this repository locally on port **30080** and open it in Google Chrome:

```bash
python3 -m http.server 30080
open -a "Google Chrome" http://localhost:30080
```

Push to `main` to trigger automated GitHub Pages deployment (`.github/workflows/static.yml`):

```bash
git add .
git commit -m "Update HyperFrames Pro site"
git push origin main
```

**Live Site:** https://rifaterdemsahin.github.io/hyperframes-pro/
