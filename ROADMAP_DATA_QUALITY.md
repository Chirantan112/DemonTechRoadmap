# Roadmap Data Quality Guidelines

This guide explains how to write high-quality roadmap topics and learning resources for the Demon Tech Roadmap. By following these guidelines, you help us maintain a consistent, beginner-friendly, and highly useful learning experience.

---

## What makes a good roadmap topic?

A high-quality roadmap topic should clearly explain *what* the topic is, *why* it matters, and *how* it fits into the broader roadmap.

**Do:**
- Use clear and concise names for topics (e.g., "Promises" instead of "Understanding JavaScript Promises in Depth").
- Explain the real-world use case. Why should a learner care?
- Keep descriptions beginner-friendly. Avoid unnecessary jargon or overly complex technical deep-dives unless it's an advanced topic.
- Use formatting (bolding, lists) to make the text scannable.

**Don't:**
- Write an entire textbook chapter. Summarize the concept and let the resources do the heavy teaching.
- Assume prior knowledge unless it was covered in an earlier roadmap node.

**Example of a Good Topic Description:**
> **Topic:** CSS Grid
> CSS Grid is a powerful two-dimensional layout system for the web. It lets you organize content into rows and columns, making it easy to build complex layouts like dashboards or photo galleries. You should learn Grid after mastering CSS Flexbox.

---

## What makes a good resource entry?

Resources are the links where users actually learn the topic.

**Do:**
- Choose high-quality, reputable sources (e.g., MDN, official documentation, well-known creators).
- Prioritize free resources over paid ones when possible.
- Clearly label what type of resource it is (e.g., Article, Video, Interactive Course).
- Include an estimated time to complete if applicable.

**Don't:**
- Include link rot. Verify that the URL is accessible and not behind a hard paywall.
- Overwhelm the user. Stick to 2-4 excellent resources rather than 10 mediocre ones.

---

## Rules for Avoiding Duplicate or Low-Quality Links

1. **Search First:** Before adding a new resource, check if the roadmap already links to it.
2. **Quality over Quantity:** If an existing resource covers the topic perfectly, don't add another just for the sake of it.
3. **Replace, Don't Pile On:** If you find a resource that is significantly better than an existing one, suggest replacing the old one rather than adding yours alongside it.
4. **No Spam or Self-Promotion:** Do not add links to low-effort blogs, incomplete tutorials, or purely promotional content.

---

## Review Process
When you submit a Pull Request adding or modifying roadmap data, maintainers will review your changes against these guidelines. If your PR needs adjustments, we will leave constructive feedback to help you refine it.

---

# 🛠️ Maintainer Review Guide (Internal Standards)

While the guidelines above help contributors write great content, this section provides core maintainers with a standard evaluation framework to review incoming Pull Requests manually.

---

## 🤖 Automated Checks vs. 🧠 Human Review

Maintainers should split their evaluation into two distinct phases:

### 1. Automated Checks (The Pipeline)
Before manually auditing the content, ensure the GitHub Actions build passes. Automated checks handle:
- **Syntax Validation:** Ensuring Markdown or JSON structures parse perfectly.
- **Basic Link Checking:** Flagging hard 404 or dead domain endpoints.

### 2. Human Review (The Quality Filter)
Once the automated builds pass, maintainers must manually review the PR for depth, educational sequencing, tone, and logical clarity using the review questions below.

---

## 🔍 Quality Review Framework

### 🛣️ Review Questions for Roadmap Changes
When a contributor changes a roadmap's path, core topics, or progression steps, ask yourself:
- **Is the sequence logical?** Does the progression move naturally from foundational principles to complex concepts without massive skill gaps?
- **Is it overwhelming?** Does a single roadmap node contain too many sub-concepts that should ideally be broken down into separate steps?
- **Is the difficulty accurate?** Are advanced tools or architectures accidentally categorized under introductory segments?
- **Are definitions precise?** Are explanations objective, clear, and focused on core concepts rather than opinionated tools?

### 🔗 Review Questions for Resource Changes
When a contributor adds or swaps an external learning link (articles, documentation, videos), ask yourself:
- **Is it genuinely free?** Does the link bypass mandatory paywalls, requiring no subscriptions or sign-ups to access the central value?
- **Is it beginner-friendly?** Does the content match the user's current roadmap level without relying on unexplained industry jargon?
- **Is it up to date?** Does the material teach current, production-ready standards (e.g., avoiding highly deprecated syntax or dead frameworks)?
- **Is it duplicate content?** Is this exact URL already linked across other sections of the repository? Can a single, definitive guide serve this topic better?

---

## 💬 Communicating Changes Kindly

When a PR doesn't meet these quality standards, maintainers should request revisions constructively. Use a supportive, encouraging tone to help contributors learn.

### Guidelines for Feedback:
- **Validate their effort:** Acknowledge the time they took to contribute before asking for edits.
- **Be specific:** Pinpoint exactly which link or topic needs adjustment and explain *why* based on this guide.
- **Offer clear paths forward:** Suggest an alternative link structure or path sequencing if possible.

### Example Review Templates:

**For an outdated/paid link:**
> "Thank you for putting this PR together! The topic choice is fantastic. However, it looks like this resource requires a premium account to access the full tutorial. To keep our roadmap fully accessible, could we swap this out for a high-quality, free alternative? Let us know if you'd like a hand finding one!"

**For an overwhelming roadmap step:**
> "Awesome work mapping this out! This section covers a lot of ground quickly. To prevent beginners from facing choice paralysis or information overload, do you think we could break 'Advanced State Management' into two separate sub-topics? Thanks for helping make this roadmap easier to follow!"