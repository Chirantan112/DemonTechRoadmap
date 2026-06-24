This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 🗺️ Application Route Inventory Mapping

To assist open-source contributors with locating the precise file configurations corresponding to public website URLs, use this reference matrix. It maps user-facing paths directly to their structural file paths inside the Next.js App Router workspace (`project/src/app/`).

### 📋 Public Navigation Inventory

| Public URL Pattern | Target Page Source Folder / File Path | Architectural Context / Scope |
| :--- | :--- | :--- |
| `/` | `project/src/app/page.tsx` | Main Application Landing Homepage |
| `/dashboard` | `project/src/app/dashboard/` | Personal Contributor Performance Profile Matrix |
| `/docs` | `project/src/app/docs/page.tsx` | Central Documentation Platform Portal |
| `/docs/[lang]` | `project/src/app/docs/[lang]/page.tsx` | Dynamic Multi-Language MDX Parser Engine |
| `/docs/all-roadmaps` | `project/src/app/docs/all-roadmaps/page.tsx` | Comprehensive Master Index of Track Guides |
| `/docs/by-category` | `project/src/app/docs/by-category/page.tsx` | Segmented Discipline Lists |
| `/docs/resources` | `project/src/app/docs/resources/page.tsx` | Curated Learning Resource Libraries |
| `/privacy` | `project/src/app/privacy/page.tsx` | Privacy Policy Compliance Ledger |
| `/terms` | `project/src/app/terms/page.tsx` | Terms of Service Agreement Rules |
| `/roadmaps` | `project/src/app/roadmaps/` | Main Interactive Career Roadmap Portal |
| `/roadmaps/[roadmapSlug]` | `project/src/app/roadmaps/[roadmapSlug]/` | Dynamic Fallback Router for New Curriculum Nodes |

> 💡 **Development Guideline Note:** Specific core developer tracks (such as `/roadmaps/frontend-developer`, `/roadmaps/backend-developer`, etc.) contain dedicated layout folder blocks under `project/src/app/roadmaps/` to handle optimization profiles. Check those sub-directories directly when working on custom component trees rather than creating new root pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
