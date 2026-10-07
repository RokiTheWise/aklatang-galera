# 🚢 Aklatang Galera

> _Kaalaman para sa bawat Galeran._ — Knowledge for every Galeran.

**Aklatang Galera** is a localized digital portal designed to bridge the gap between knowledge, opportunity, and public services for the people of Puerto Galera. It serves as a unified dashboard that simplifies access to educational resources, livelihood programs, and government services — ensuring that what every Galeran needs is just a click away.

**🌐 Live at: [aklatang-galera.djenriquez.dev](https://aklatang-galera.djenriquez.dev)**

---

## 💡 The Motive

The project was born out of a desire to modernize civic participation and educational access in my hometown. In many localities, digital resources are scattered across government websites and social media pages, making them difficult for the average citizen to navigate.

Aklatang Galera centralizes these resources to:

- **Empower the Youth** — Direct paths to free research databases and scholarships.
- **Support Livelihood** — Connecting locals with skills training (TESDA), job boards, and entrepreneurship resources (DTI).
- **Enhance Civic Access** — Making government forms and digital services easy to find and understand.

---

## ✨ Features

### 1. Clear Navigation & Dual-Language Support (Filipino / English)

A persistent language toggle remembers Filipino or English across pages and visits. Shared desktop navigation and a four-tab mobile bar keep the library, livelihood, and public services easy to reach. The homepage keeps the original three choices: Digital Library, Livelihood, and Public Services. It uses the original navy, blue, emerald, cyan, and Geist typography with concise labels.

### 2. E-Aklatan — Digital Library

- **Research Search** — A separate, clearly labeled search opens results on Semantic Scholar. The library starts with research search, with a second view for browsing books and resources.
- **Curated Databases** — 44 research and e-book resources, with bilingual keyword search.
- **Categorized Discovery** — Toggle between **Research** (arXiv, DOAJ, Google Scholar) and **E-Books** (Project Gutenberg, Open Library, National Academies Press).
- **Philippine Resources** — Quick filter for Philippine-specific repositories like **Archīum Ateneo**, **Aklatang Bayan**, **Tuklas**, and **Filipinas Heritage Library**.

### 3. Hanapbuhay — Livelihood

- **Job Portals** — Quick access to PhilJobNet (DOLE), JobStreet, OnlineJobs.ph, and Civil Service Commission opportunities.
- **Skills Development** — Training from **TESDA Online**, **UPOU MODeL**, **freeCodeCamp**, and **Google Digital Garage**.
- **Entrepreneurship Hub** — Resources for small businesses, including **DTI Negosyo Center**, **SEC**, **BIR**, and **Go Negosyo**.
- **Local Careers** — Direct links to government careers in **Oriental Mindoro**.

### 4. Serbisyong Pampubliko — Public Services

- **Featured eLGU Portal** — One-click access to Puerto Galera's local government services (Business Permits, Civil Registry, Cedula).
- **Scholarship Hub** — Centralized directory for **DOST-SEI**, **CHED UniFAST**, **OWWA**, and major university scholarships (UP, Ateneo, DLSU, UST, SM Foundation).
- **Transparency & News** — Direct feeds to the **PIO Puerto Galera**, **Sangguniang Bayan**, **Official Gazette**, and **PhilGEPS**.

### 5. Mobile-First & Accessible Design

Responsive layouts support phones, tablets, and desktops, with readable descriptions, large search inputs, keyboard focus indicators, skip navigation, reduced-motion support, and clear new-tab labels. Category, keyword, and local filters stay in the URL so filtered views can be bookmarked or shared. Resource descriptions and destinations are maintained in `lib/data/`; reusable navigation, directory, and card components live in `components/`.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO & Metadata:** Automated Sitemap and Robots.txt generation for optimized discovery.

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/RokiTheWise/aklatang-galera.git

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the result.

---

Built with 💙 by [Dexter Jethro Enriquez](https://djenriquez.dev) · In partnership with the Puerto Galera Public Library
