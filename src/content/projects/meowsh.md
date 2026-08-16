---
name: "Meowsh"
description: "A Unix-style shell supporting argument parsing, forking/exec, cd, and custom commands."
category: "Systems"
techStack: ["C"]
githubUrl: "https://github.com/bhajamaach/meowsh"
---

A shell is a good forcing function for actually understanding `fork`/`exec`, process groups, and why `cd` has to be a builtin instead of a subprocess. Meowsh handles argument parsing, forking and exec'ing external commands, and a handful of custom builtins.
