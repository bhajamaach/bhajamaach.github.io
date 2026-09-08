---
title: "Building NotNCRP for Build What Moves India"
publishDate: 2026-09-09
tags: ["hackathon", "nextjs", "product"]
summary: "Notes from rebuilding India's cybercrime reporting flow around urgency instead of government taxonomy, for Varun Mayya's hackathon."
---

cybercrime.gov.in sorts complaints by category first — financial fraud, social media crime, and so on. That's fine for filing statistics, useless if your bank account got frozen ten minutes ago and you need to know what to do *right now*. NotNCRP was my entry for Varun Mayya's Build What Moves India hackathon, and the whole pitch was: ask "is this still happening" before you ask "what kind of crime is this."

## Triage first, taxonomy later

The flow branches into three paths up front — active fraud, a completed incident, or "not sure," which kicks off adaptive follow-up questions instead of dumping a form. Everything downstream (which SLA applies, whether account-unfreezing help is even relevant) falls out of that first answer instead of a dropdown.

## Evidence without trusting the client, mostly

Screenshots are the main evidence people have, and typing out transaction IDs from a screenshot by hand is exactly the kind of friction that makes people give up on reporting fraud at all. Tesseract.js runs OCR in-browser to pull that text out automatically. Evidence also gets SHA-256 fingerprinted client-side before upload, so there's a hash trail independent of whatever happens to the file after.

## What's actually fake here

Being honest about it: the banking/government integrations are simulated, not live, and the API isn't scoped per-account the way a real backend would be. It's a hackathon prototype — the point was proving the triage-first UX holds up, not shipping something cybercrime.gov.in should swap in tomorrow.

## What's next

If this goes anywhere past the hackathon, real auth and real integrations come before anything else — a good UX in front of a fake backend isn't a product yet.
