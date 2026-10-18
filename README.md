# Vashist Salar — React Developer Portfolio

A professional, high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** for **Vashist Salar** (Aspiring AI/ML Engineer & Competitive Programmer).

---

## 📁 Project Structure

```text
vashist-portfolio/
├── package.json               # Dependencies & scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind theme & animations
├── postcss.config.js          # PostCSS configuration
├── index.html                 # HTML entry point with Google Fonts
├── public/                    # Static assets (Resume PDF, icons)
│   └── Vashist_Salar_Resume.pdf
└── src/
    ├── main.jsx               # React DOM entry
    ├── App.jsx                # Layout & component assembly
    ├── index.css              # Tailwind directives & glassmorphic styles
    └── components/
        ├── Navbar.jsx         # Responsive navbar with drawer & action buttons
        ├── Hero.jsx           # Hero banner, stats pill, email copy & CTAs
        ├── Metrics.jsx        # Quantitative milestones (700+ DSA, 3272 CF rank, etc.)
        ├── About.jsx          # Bio, 4-pillar skills, JSON engineer card
        ├── Skills.jsx         # 6 categorized domain cards with tech badges
        ├── Projects.jsx       # Cynbit AI Copilot, Sorting Visualizer, ML/DL Research
        ├── Achievements.jsx   # Codeforces & LeetCode/CodeChef contest milestones
        ├── Certifications.jsx # Azure AI-900, Google Cloud GenAI, Pregrad
        ├── Education.jsx      # Chandigarh University (IBM AI/ML), Schooling
        ├── Contact.jsx        # Direct email, phone, and LinkedIn connections
        └── Footer.jsx         # Quick links, copyright & back-to-top
```

---

## 🚀 How to Run Locally

### 1. Install Dependencies
Open your terminal inside this folder and run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at:
👉 **`http://localhost:3000`**

### 3. Build for Production
To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` directory, ready to deploy.

---

## 📄 Adding Your Resume
Copy your resume PDF into the `public/` folder:
```text
vashist-portfolio/public/Vashist_Salar_Resume.pdf
```
Both the Navbar and Hero "Resume" buttons will automatically download your PDF.

---

## 🌐 1-Click Deployment (Vercel / Netlify / GitHub)

### Deploy with Vercel (Recommended):
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import your repo.
3. Framework preset will automatically detect **Vite**. Click **Deploy**!
