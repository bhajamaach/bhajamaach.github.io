---
title: "Writing a malloc replacement with mmap"
publishDate: 2026-08-10
tags: ["systems", "c", "memory"]
summary: "Notes from building AuraAlloc — a custom allocator on raw mmap, and the coalescing bugs that ate a weekend."
---

Most allocator tutorials stop at `sbrk`. I wanted to see what happens if you skip straight to `mmap` and build allocation, deallocation, defragmentation, and coalescing on top of it yourself.

## Why mmap instead of sbrk

`sbrk` grows a single contiguous heap. `mmap` lets you request independent regions, which makes it easier to reason about large allocations and to return memory to the OS instead of just marking it free.

```c
void *region = mmap(NULL, size, PROT_READ | PROT_WRITE,
                     MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
```

## The coalescing bug

The first version of block coalescing merged adjacent free blocks by walking a doubly linked list — but I wasn't validating that "adjacent in the list" also meant "adjacent in memory." Two blocks from different `mmap` regions that happened to sit next to each other in the free list got merged, corrupting the heap on the next allocation.

The fix was boring: store each block's region boundaries and check physical adjacency before merging, not just list order.

## What's next

Custom heap sizing per allocation pattern is in, next up is instrumenting fragmentation over time so I can actually measure whether coalescing is paying for itself.
