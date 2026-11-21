Yes, you can seamlessly continue working on your video with Claude. Because HyperFrames Studio saves your video as a standard local web project (HTML, CSS, and media assets), you can hand the folder off to Claude Code to adjust animations, update styling, or add new elements using standard code.

Here is how to hand off your UI project to Claude:

1. **Locate your local project directory**
Find the folder on your computer where the HyperFrames Studio app saved your current video project.
*Verification:* You will see standard web files, including an HTML file, inside this directory.
2. **Open the project in Claude Code**
Open your terminal, navigate directly into your HyperFrames project folder, and launch Claude Code.
*Verification:* Your terminal shows you are running Claude Code inside the correct project directory.
3. **Install the HyperFrames plugin**
You need to give Claude the context of how the HyperFrames rendering engine works. Inside Claude Code's terminal UI, run:
`/plugin`
Then select **Marketplaces** > **hyperframes** > **Enable auto-update**.
*Verification:* Type `/hyperframes:hyperframes` in Claude; it should recognize the command and load the rendering instructions.
4. **Prompt Claude for edits**
Ask Claude to make specific changes to the video, such as "Change the GSAP animation easing on the title text" or "Update the background gradient." Claude will directly edit the HTML and CSS files.
*Verification:* Claude outputs a confirmation in the terminal that it has modified the underlying project files.
5. **Preview the updated video**
You can instantly see Claude's work by looking at the live preview back in the HyperFrames Studio UI, or by opening a new terminal tab and running `npx hyperframes preview`.
*Verification:* The visual code changes Claude just made will immediately appear in the video player.
