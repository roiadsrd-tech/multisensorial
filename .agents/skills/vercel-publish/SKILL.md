---
name: vercel-publish
description: Automated publishing to GitHub and deployment to Vercel production. Triggered by /v, /vercel, or when the user requests publishing/deploying to Vercel.
---

# Vercel Publish Skill (/v)

When user sends `/v` or requests publishing/deploying to Vercel:

1. **Verify build**:
   Run `npm run build` synchronously to verify there are no compilation or bundling errors. If it fails, stop and report errors.

2. **Git Commit & Push**:
   - Check status with `git status`.
   - If there are changes (tracked or untracked relevant files):
     - Stage changes: `git add .` (or specific changed files, respecting `.gitignore`).
     - Commit with concise, descriptive message: `git commit -m "deploy: update project"`.
     - Push to remote branch: `git push origin main`.

3. **Deploy to Vercel**:
   - Run `npx vercel --prod --yes`.
   - Wait for completion or track async task until done.

4. **Output Report**:
   - Return clean Caveman summary with:
     - Commit hash / message.
     - Production URL (`https://www.centromultisensorial.com` o URL de Vercel).
