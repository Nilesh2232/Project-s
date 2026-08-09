# Nilesh Gupta Portfolio

Public portfolio site for **Nilesh Gupta** — Python Backend Engineer.

Live site (after deploy): add your Vercel URL here  
Example: `https://nilesh-portfolio.vercel.app`

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Lucide React

## Local run

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
cd frontend
npm run build
npm run preview
```

## Deploy to Vercel (public URL for resume)

### 1) Push this project to GitHub

```bash
# from repo root (Protfolio)
git init
git add .
git commit -m "Initial portfolio site"
gh repo create nilesh-portfolio --public --source=. --remote=origin --push
```

Or create the empty repo on GitHub, then:

```bash
git remote add origin https://github.com/Nilesh2232/nilesh-portfolio.git
git branch -M main
git push -u origin main
```

### 2) Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. **Add New Project** → import `nilesh-portfolio`
3. Settings:
   - **Root Directory:** `frontend`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**

You will get a URL like:

`https://nilesh-portfolio.vercel.app`

### 3) Add the URL to your resume

```text
Nilesh Gupta
Python Backend Engineer
Wadala, Mumbai · 8097836069 · nileshgupta2232@gmail.com
Portfolio: https://YOUR-VERCEL-URL.vercel.app
LinkedIn: https://www.linkedin.com/in/ng8097836069
GitHub: https://github.com/Nilesh2232
```

Also add the same URL in:
- LinkedIn → Contact info → Website
- GitHub profile → Website

## Project structure

```text
Protfolio/
  frontend/              # Deploy this to Vercel
    vercel.json          # SPA routing for React Router
    public/images/
    src/
  hms-portfolio-demo/    # Optional separate case-study repo
  README.md
```

## Links

- GitHub: https://github.com/Nilesh2232
- LinkedIn: https://www.linkedin.com/in/ng8097836069
