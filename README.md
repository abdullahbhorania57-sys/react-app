# DevOps 17 — React + Vite Learning App

This project is a beginner-friendly React + Vite app that demonstrates the workflow:
React/Vite → Git → GitHub → production build.

## Run locally
```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite.

## Production build
```bash
npm run build
npm run preview
```

The production output is created in `dist/`.

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial React app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Note: This is an original learning project inspired by the DevOps workflow; it does not reproduce the creator's video content.
