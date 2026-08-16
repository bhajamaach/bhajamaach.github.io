---
name: "AuraAlloc"
description: "A malloc replacement built on raw mmap, supporting allocation, deallocation, defragmentation, and block coalescing."
category: "Systems"
techStack: ["C", "mmap", "Linux syscalls"]
githubUrl: "https://github.com/bhajamaach/AuraAlloc"
---

Most allocator write-ups stop at `sbrk`. I wanted to skip straight to `mmap` and build allocation, deallocation, defragmentation, and coalescing on top of it myself.

`mmap` lets you request independent memory regions instead of growing one contiguous heap, which makes it easier to actually give memory back to the OS instead of just marking it free and hoping.

Block coalescing was the part that bit me — merging adjacent free blocks by walking a linked list works until two blocks from different `mmap` regions end up next to each other in the list without being next to each other in memory. Fixed it by tracking each block's region boundaries and checking physical adjacency before merging.

Custom heap sizing per allocation pattern is in. Fragmentation instrumentation is next.
