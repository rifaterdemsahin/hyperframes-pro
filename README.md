# HyperFrames Pro — Video-as-Code Showcase & Deployment Guide

> **Live Showcase (GitHub Pages):** https://rifaterdemsahin.github.io/hyperframes-pro/

## Overview
HyperFrames is an advanced rendering and editing orchestration engine that treats **video as code**. Instead of manually dragging clips in a traditional timeline editor, HyperFrames allows you to use AI coding agents (like Framey and Claude Code) to programmatically generate, sequence, and render final MP4 videos using HTML, CSS, JavaScript, and GSAP animations.

The **HyperFrames Pro Plan** provides a consolidated workspace for automated video production, combining premium media generation models with offloaded cloud rendering to maximize parallel workflows and preserve local hardware resources.

---

## Visual Walkthrough & Architectural Diagrams (`index.html`)

This repository ships with a static web showcase ([`index.html`](index.html)) that documents a full 17.5-minute video production (*"Junior Developers Become Delivery Pilots"*) using:

### Architectural Support Diagrams (`assets/`)
| Diagram | File | What It Explains |
| :--- | :--- | :--- |
| **Video-as-Code Pipeline** | `assets/arch-video-as-code.jpg` | End-to-end flow from Prompt & Storyboard → Framey Agent (Claude Sonnet 5.5, HeyGen/ElevenLabs, Audio Beds) → HTML/CSS/JS + GSAP Engine → Cloud Render Farm. |
| **Studio ↔ Claude Handoff** | `assets/arch-claude-handoff.jpg` | Bidirectional live sync between HyperFrames Studio and Claude Code CLI over the shared `~/.hyperframes-studio/` project folder. |
| **Cloud vs. Local ROI** | `assets/arch-cloud-render-roi.jpg` | Split comparison contrasting 100% local CPU/GPU lockup (3.5–4.5 hrs blocked across 20 passes) vs. zero-load Pro cloud rendering. |

### Annotated Studio Captures (12 Screenshots)
1. `hyperframe-ui.jpeg` — Prompt-driven "Your first video" workspace (Hook → Proof → Turn → Call to action).
2. `training-inside.jpeg` — Built-in Pit Crew Academy interactive motion-design lesson.
3. `where Is the hyperframes located.jpeg` — Local macOS storage path (`~/.hyperframes-studio`) & source verification checklist.
4. `hyperframes-uses-html.jpeg` — Framey compiling posed HTML directly into `index.html`.
5. `integrated-editor.jpeg` — Three-pane IDE with live J-Curve preview and full web file tree (`AGENTS.md`, `CLAUDE.md`, `STORYBOARD.md`, `hyperframes.json`, `index.html`).
6. `click-and-change-layers-ready.jpeg` — Direct canvas click-and-change prompt popover + 11-layer DOM inspector.
7. `running-python-html.jpeg` — Active `Pro (Sonnet 5.5)` execution with transactional timeline lock.
8. `timeline-ready.jpeg` — Full 17:30 multi-track timeline (`S01`–`S20`) + automated 11-step QA pass.
9. `multi-level-sound-generate.jpeg` — Per-scene iterative AI voiceover synthesis (`Used Hf generate voiceover`).
10. `sorting-sound-out.jpeg` — Automated audio bed alignment (`Bed1`–`Bed5`) ducked cleanly to `22%` volume.
11. `credit-ends.jpeg` — Real-world credit consumption telemetry (`4,827 credits` across 40+ HeyGen voice files) & BYO API key fallback.
12. `cloud_render_time_9mimutes.jpeg` — Offloaded Cloud 1080p MP4 export queue (`~9 min left`, zero local CPU impact).

---

## Core Features
The Pro Plan (£19/$25 per month) includes the following capabilities:

* **Monthly Quota:** 25,000 monthly credits for media generation.
* **Built-in Agent:** Native HyperFrames agent (Framey) running directly on your credits.
* **Premium Models:** Direct access to top-tier video, image, voice, and music models (e.g., Seedance 2.5, MiniMax, HeyGen Video 1, ElevenLabs).
* **Unlimited Cloud Exports:** Zero hard caps on the number of finalized MP4/WebM/MOV videos you can render in the cloud.
* **Reverse Any Video:** Rebuild an existing video into an editable HyperFrames project.
* **Video Match:** Generate a video matching the style of one you love.
* **Inspiration Library:** Full access to 1,000+ templates and items.
* **Media Processing:** Unlimited background removal and comprehensive image/footage search.
* **Collaboration:** Team review capabilities and up to 20 active cloud projects.

## Production Capacity Estimates
While exports are unlimited, AI generation consumes credits. Based on a benchmark of ~468 credits per 90-second video:
* **10-Minute Video Cost:** ~3,120 credits.
* **17.5-Minute Full Voiceover Production (Observed):** ~4,827 credits.
* **Monthly Output:** Roughly 8 finished, heavily AI-generated 10-minute videos per month. *(Note: Frequent clip regenerations or premium model selections will increase credit burn per video).*

## Integration with Claude Code
HyperFrames is designed to work seamlessly with **Claude Code** to create programmatic video workflows (motion graphics, animated overlays, synced subtitles). See [`handoff-claude.md`](handoff-claude.md) for the complete 5-step handoff checklist.

**Requirements:**
1. HyperFrames API Key (included in the Pro dashboard) or local `~/.hyperframes-studio` project directory.
2. Claude Code access (via Anthropic API or Claude.ai Pro).

**Getting Started:**
1. Open your terminal inside your local HyperFrames project folder.
2. Run `/plugin` → **Marketplaces** → **hyperframes** → **Enable auto-update**.
3. Invoke `/hyperframes:hyperframes` to load the rendering instructions, edit HTML/CSS/GSAP directly, and preview with `npx hyperframes preview`.

## Architectural Workflows: Pro Plan vs. Open-Source + fal.ai
| Feature | Open-Source HyperFrames + fal.ai | HyperFrames Pro + Claude |
| :--- | :--- | :--- |
| **Asset Generation** | Pay-as-you-go via fal.ai API | Built-in via Pro plan credits |
| **Rendering Environment** | Local hardware | Offloaded to cloud servers |
| **Agentic Workflow** | Requires API juggling | Consolidated workspace |
| **Advanced Features** | Basic rendering | Unlocks `/reverse-any-video` |

## Performance & Rendering (Contractor ROI)
For high-volume creators and full-time contractors, the primary bottleneck is rendering time. Offloading this to the cloud preserves your billable hours and local hardware performance.

**Benchmark: 20 iterations of a 10-minute video**

| Workflow | Render Location | Estimated Time per Pass | Total Time (20 Iterations) | Hardware Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Free Open-Source** | Local CPU/GPU | 10–13 minutes | ~3.5 to 4.5 hours | 100% lock-up of local machine |
| **Pro Plan** | Cloud Servers | ~9 min async | Background Processing | **Zero local impact** |

With the Pro plan, you can queue a render in the cloud for one client, immediately pivot to writing code for a second client, and review the first video asynchronously.

## Generative Capabilities vs. Google Flow
While tools like Google Flow use a visual "Scene Builder" to manually stitch proprietary generated clips (Veo 3.1) together, HyperFrames Pro offers a programmatic alternative. It provides access to comparable premium models (Seedance 2.5, MiniMax) but uses code (HTML/CSS) to sequence them. This makes HyperFrames the ideal choice for developers automating edits, data overlays, and perfect audio-syncing rather than manually dragging clips onto a timeline.

---

## Local Preview & Deployment Guide

### 1. Local Development Preview
This site is zero-dependency static HTML/CSS/JS. Serve it locally on port `30080` (above 30,000 to avoid port conflicts) and open in Google Chrome:

```bash
python3 -m http.server 30080
open -a "Google Chrome" http://localhost:30080
```

### 2. Automated GitHub Pages Deployment (CI/CD)
Deployment is automated via GitHub Actions in `.github/workflows/` (`Deploy static content to Pages`):

* **Trigger:** Automatically runs on every `git push` to the `main` branch, or manually via **Actions → Deploy static content to Pages → Run workflow** (`workflow_dispatch`).
* **Pipeline Steps:**
  1. `actions/checkout@v4` — Checks out the repository root (`index.html`, all 12 `.jpeg` screenshots, and `assets/` architectural diagrams).
  2. `actions/configure-pages@v5` — Configures GitHub Pages environment.
  3. `actions/upload-pages-artifact@v3` — Packages `.` as a static artifact.
  4. `actions/deploy-pages@v5` — Publishes to the `github-pages` environment.

### 3. Deploy New Changes
```bash
git status
git add .
git commit -m "Update HyperFrames Pro showcase and documentation"
git push origin main
```

### 4. First-Time Repository Pages Setup (If Needed)
If GitHub Pages is not yet enabled on a fork:
1. Go to **Repository Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or trigger `workflow_dispatch`) and verify the live URL at:
   `https://<your-username>.github.io/hyperframes-pro/`
