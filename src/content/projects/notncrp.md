---
name: "NotNCRP"
description: "An urgency-first alternative to India's official cybercrime reporting portal, built for Varun Mayya's Build What Moves India hackathon."
category: "Hackathon"
techStack: ["Next.js", "React", "PostgreSQL", "Tesseract.js", "Tailwind CSS"]
githubUrl: "https://github.com/bhajamaach/bwmi-NotNCRP"
liveUrl: "https://bwmi.bhajamaach.dev"
---

The actual cybercrime.gov.in portal sorts complaints by government taxonomy — categories that make sense for record-keeping but not for someone whose bank account just got frozen. NotNCRP flips that: the first question isn't "what type of crime is this" but "is this still happening right now."

Three paths branch from there — active fraud, a completed incident, or "I'm not sure" with adaptive follow-up questions to figure out which bucket applies. Evidence gets fingerprinted with SHA-256 computed client-side before anything touches the server, and OCR (via Tesseract.js) pulls text out of screenshots so victims aren't stuck retyping transaction IDs by hand.

It's a prototype, not a production system — the backend simulates the banking/government integrations rather than hitting real ones, and there's no per-account API scoping yet. But the triage-first flow and SLA escalation visibility are the parts worth stealing if this ever becomes real.
