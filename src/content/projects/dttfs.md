---
name: "DirectToTheFingScreen"
description: "A low-level 3D software renderer that writes directly to the Linux framebuffer with no external graphics libraries."
category: "Systems"
techStack: ["C++", "Linux Framebuffer"]
githubUrl: "https://github.com/bhajamaach/dttfs"
---

No OpenGL, no Vulkan, no SDL — this writes pixels straight to `/dev/fb0`. The whole transformation pipeline (model space through to screen space) is hand-rolled, which meant relearning matrix math the hard way instead of trusting a library to do it right.

Runs on any Debian-based distro with the desktop environment disabled, which is a good way to find out how much a compositor was doing for you.
