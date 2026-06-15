# DemonTech Roadmap - Vercel Deployment Guide

This guide provides step-by-step instructions to deploy the DemonTech Roadmap cleanly and correctly on Vercel so that future merges will not break the deployment.

## 1. Prerequisites

Before deploying, make sure that your application builds successfully locally. We have fixed all the TypeScript and formatting errors, so this should pass flawlessly.
Run the following in your terminal to verify:

```bash
npm run build
```

## 2. Project Setup on Vercel

1. **Log in** to your Vercel Dashboard (https://vercel.com/dashboard).
2. Click the **"Add New..."** button and select **"Project"**.
3. Import your GitHub repository that contains this project.

## 3. Configuration Settings

During the import step, Vercel will ask you to configure the project. Make sure the settings match the following exactly:

- **Framework Preset**: `Next.js` (Vercel should auto-detect this)
- **Root Directory**: `project` (Important! Make sure you select the `project` folder as the root directory because your Next.js app is inside the `project` folder, not the top level of the repository).
- **Build Command**: `npm run build` (or leave default, Vercel knows what to do)
- **Output Directory**: `.next` (or leave default)
- **Install Command**: `npm install` (or leave default)

### ⚠️ Environment Variables

This is critical to prevent deploy issues. You MUST add the Firebase environment variables you are using. Even if they are mock values for now, if Next.js expects them in `src/lib/firebase.ts`, they should exist.

Add the following environment variables in the Vercel UI (under Environment Variables):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

If you do not have Firebase configured yet, you can provide mock string values (e.g., `mock-key`) for now just so the build does not fail if it strictly requires them in the future.

## 4. Node.js Version

By default, Vercel uses Node.js 20.x or 22.x. Our current environment is using Node 26.x which is very bleeding edge. To avoid compatibility issues, it is recommended to let Vercel use Node.js 22.x. This is managed automatically, but if you have a `.nvmrc` file in your repository, ensure it is set to `22` or `20`.

## 5. Deploying

1. Click **"Deploy"**.
2. Vercel will install dependencies, build the application, and assign a production URL.
3. Once successful, any further merges to your `main` branch will automatically trigger a new deployment.

## 6. How to Prevent Future Deploy Issues

- **Always run `npm run build` locally** before pushing to `main`. If it fails locally, it will fail on Vercel.
- **Never push secrets directly to GitHub**. Always use Vercel's Environment Variables panel.
- **Root Directory**: Remember that since your Next.js app is in the `/project` folder, any new environment variables or Vercel specific settings should be configured with `/project` as the root directory in the Vercel dashboard.

Happy Deploying!
