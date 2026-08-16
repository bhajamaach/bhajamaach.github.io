---
name: "HandSim"
description: "A real-time hand-tracking pipeline streaming coordinates over UDP to a custom 3D renderer client."
category: "Systems"
techStack: ["C++", "Python", "SDL2", "OpenCV"]
githubUrl: "https://github.com/bhajamaach/HandSim"
---

OpenCV handles hand tracking on the Python side, which streams coordinates over UDP to a C++/SDL2 client that drives a custom 3D renderer in real time. Anchor-point tracking with vector-rotation optimization keeps the movement from looking jittery.
