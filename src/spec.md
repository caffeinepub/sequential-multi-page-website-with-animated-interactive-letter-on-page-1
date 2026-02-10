# Specification

## Summary
**Goal:** Update Page 2’s displayed birthday message by changing only the centralized story content text.

**Planned changes:**
- Replace `storyContent.page2.heading` to match the first line of the provided message exactly (including emojis and capitalization).
- Replace `storyContent.page2.paragraphs` to match the remaining provided message text exactly, preserving punctuation, ellipses, spacing (including the double-space in “aur  un dino”), and line breaks.
- Keep all other pages’ content, visuals, routes, and sessionStorage gating behavior unchanged.

**User-visible outcome:** Visiting Page 2 ("/page2") shows the updated birthday heading and message exactly as provided, with line breaks and spacing preserved, while the rest of the story flow remains the same.
