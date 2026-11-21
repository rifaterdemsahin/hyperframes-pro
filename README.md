# hyperframes-pro

# HyperFrames Pro 

## Overview
HyperFrames is an advanced rendering and editing orchestration engine that treats video as code. Instead of manually dragging clips in a traditional timeline editor, HyperFrames allows you to use AI coding agents (like Claude) to programmatically generate, sequence, and render final MP4 videos using HTML, CSS, and JavaScript. 

The **HyperFrames Pro Plan** provides a consolidated workspace for automated video production, combining premium media generation models with offloaded cloud rendering to maximize parallel workflows and preserve local hardware resources.

## Core Features
The Pro Plan (£19/$25 per month) includes the following capabilities:

* **Monthly Quota:** 25,000 monthly credits for media generation.
* **Built-in Agent:** Native HyperFrames agent running directly on your credits.
* **Premium Models:** Direct access to top-tier video, image, voice, and music models (e.g., Seedance 2.5, MiniMax, HeyGen Video 1, ElevenLabs).
* **Unlimited Cloud Exports:** Zero hard caps on the number of finalized MP4 videos you can render in the cloud.
* **Reverse Any Video:** Rebuild an existing video into an editable HyperFrames project.
* **Video Match:** Generate a video matching the style of one you love.
* **Inspiration Library:** Full access to 1,000+ templates and items.
* **Media Processing:** Unlimited background removal and comprehensive image/footage search.
* **Collaboration:** Team review capabilities and up to 20 active cloud projects.

## Production Capacity Estimates
While exports are unlimited, AI generation consumes credits. Based on a benchmark of ~468 credits per 90-second video:
* **10-Minute Video Cost:** ~3,120 credits.
* **Monthly Output:** Roughly 8 finished, heavily AI-generated 10-minute videos per month. *(Note: Frequent clip regenerations or premium model selections will increase credit burn per video).*

## Integration with Claude Code
HyperFrames is designed to work seamlessly with **Claude Code** to create programmatic video workflows (motion graphics, animated overlays, synced subtitles). 

**Requirements:**
1. HyperFrames API Key (included in the Pro dashboard).
2. Claude Code access (via Anthropic API or Claude.ai Pro).

**Getting Started:**
Install the HyperFrames skill directly inside Claude Code using the `/hyperframes` slash command. 

## Architectural Workflows: Pro Plan vs. Open-Source + fal.ai
HyperFrames replaces the manual timeline editing process, but how you generate your assets depends on your stack:

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
| **Pro Plan** | Cloud Servers | Varies | Background Processing | **Zero local impact** |

With the Pro plan, you can queue a render in the cloud for one client, immediately pivot to writing code for a second client, and review the first video asynchronously.

## Generative Capabilities vs. Google Flow
While tools like Google Flow use a visual "Scene Builder" to manually stitch proprietary generated clips (Veo 3.1) together, HyperFrames Pro offers a programmatic alternative. It provides access to comparable premium models (Seedance 2.5, MiniMax) but uses code (HTML/CSS) to sequence them. This makes HyperFrames the ideal choice for developers automating edits, data overlays, and perfect audio-syncing rather than manually dragging clips onto a timeline.
