# AuraEd | Enterprise-Grade Institutional ERP 🎓

AuraEd is a high-fidelity, professional EdTech platform designed for state-of-the-art institutional management. Built for scale and responsiveness, it transforms traditional educational workflows into an **Adaptive AI-First Ecosystem**.

---

## 🚀 Key Features

### 🏛️ Institutional Administration (Admin Portal)
*   **Faculty Registration Engine**: Real-time management and registration of faculty members with automated status tracking.
*   **Asset & Inventory Management**: Institutional tracking for smart boards, laboratory equipment, and library health.
*   **Financial Intelligence**: Revenue overview and financial analytics powered by Recharts.
*   **Predictive Analytics**: AI-driven modeling for grade progression and identifying "Students at Risk."

### 🍎 Faculty Excellence (Teacher Portal)
*   **Class & Assignment Scheduler**: High-fidelity tools for scheduling sessions and creating interactive assignments.
*   **Performance Monitoring**: Comprehensive student grade distribution and attendance heatmaps.
*   **Student Intervention**: Direct communication and engagement tracking for classroom management.

### 🎒 Student Success (Student Portal)
*   **Aura AI Knowledge Graph**: A visual dependency map of subject mastery, identifying skill gaps and personalized learning paths.
*   **Gamified Achievements**: XP progression, leveling, and verifiable digital badges to drive engagement.
*   **Collaboration Hub**: Live focus rooms for peer-to-peer study sessions with shared institutional tools.
*   **Scholarship Tracker**: Real-time monitoring of academic compliance and scholarship payout statuses.

---

## 🏗️ Architecture

AuraEd employs a scalable, modular architecture based on feature slicing:

*   **Modular Monolith**: Codebase is split into domain-specific modules (`admin`, `faculty`, `ai`, `finance`, `gamification`, etc.) inside `src/modules/`. This guarantees high cohesion and low coupling.
*   **Global Layout & Routing**: Handled centrally via `react-router-dom` incorporating an immersive `Sidebar` and `Navbar` with contextual intelligence.
*   **State Management (Zustand)**: Uses lightweight, decentralized stores for session data (Auth), asynchronous UI states, and global notifications without boilerplate.
*   **UI Components**: `src/components/` holds atomic, reusable elements like `StatsCard`, layout wrappers, and the `ToastContainer`.

---

## 🎨 Design System

AuraEd utilizes a **Professional Enterprise Theme** prioritizing clarity, engagement, and data legibility:

*   **Primary Palette**: Deep Sea Blue & Cyan for core navigation and interactive states, conveying trust and technological edge.
*   **Functional Colors**: 
    *   🟢 *Emerald*: Financial metrics & successes.
    *   🟡 *Amber*: Asset tracking & warnings.
    *   🟣 *Violet*: AI insights & predictive data.
    *   🔴 *Rose*: Calendars & alerts.
*   **Typography**: Clean sans-serif typesets optimized for data-dense dashboards.
*   **Glassmorphism**: Subtle transluscent surfaces and deep shadows to establish a hierarchy without visual clutter.

---

## ✨ Animations & Micro-Interactions

Every interaction in AuraEd feels alive, powered by **Framer Motion**:

*   **Page Transitions**: Smooth fade-in and slide-up animations as users navigate between modules (e.g., from Dashboard to Analytics).
*   **Staggered Children**: Data grids, lists, and statistical cards cascade onto the screen sequentially for a premium loading experience.
*   **Hover Physics**: Interactive elements (buttons, cards, sidebar items) feature spring-based hover scaling and subtle color shifts.
*   **Layout Animations**: Seamless reflowing of DOM elements when items are added or removed (e.g., dismissing a notification, expanding a panel).
*   **Data Visualizations**: Recharts integration with custom entry animations that make financial and predictive graphs "draw" themselves.

---

## 💻 Technology Stack

*   **Core**: React 19 + Vite
*   **State Management**: Zustand
*   **Styling**: Vanilla CSS (Enterprise Tokens)
*   **Animations**: Framer Motion
*   **Visualization**: Recharts
*   **Iconography**: Lucide React
*   **Routing**: React Router 7

---

## 🛠️ Getting Started

1.  **Clone the Repository**
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

---

## 📅 Roadmap 2026
- [x] Adaptive AI Knowledge Graph
- [x] Institutional Gamification
- [x] Predictive Risk Modeling
- [ ] Blockchain-based Digital Certificates
- [ ] Offline-first LMS Optimization

---

**AuraEd** — *Empowering Institutions with Intelligence.*
