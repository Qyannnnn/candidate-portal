# Northwind Group - Candidate Portal

An interactive, transparent web application that keeps job candidates fully informed about their application status across multiple roles at a single company, eliminating silence, candidate anxiety, and the need for repetitive back-and-forth emails.

**Live demo:** https://qyannnnn.github.io/candidate-portal/

---

## 🖤 Design Direction: Minimalist Monochrome Luxury

Restyled in a clean, high-fashion e-commerce aesthetic (inspired by modern minimal design systems like SSENSE, COS, and Apple):
- **Strict Color Palette:**
  - **Black `#0A0A0A`:** Primary buttons, active states, main typography.
  - **White `#FFFFFF`:** Clean surface and card backgrounds.
  - **Greys:** `#F5F5F5` (subtle panel fills, hover highlights), `#E5E5E5` (thin borders and dividers), `#8A8A8A` (secondary labels and meta text).
  - **Red `#D92D20`:** Used **exclusively** for overdue dates and the "taking longer than we said" honesty alert.
  - **Zero extraneous colors:** All greens, blues, purples, and oranges have been completely removed.
- **Typography:**
  - **Headings & Names:** Bold grotesk sans-serif (**Archivo** via Google Fonts), tight letter spacing, uppercase.
  - **Labels, Chips, Counts, & Dates:** Monospace (**JetBrains Mono** via Google Fonts), small uppercase, slight letter spacing (e.g. `STAGE: INTERVIEW`, `DUE 18 NOV`, `REF NW-2041`, `SIGN OUT`).
  - **Body text:** 15px with comfortable 1.55 line height.
- **Status Representation via Fill & Line Structure:**
  - **Action Needed / Your Turn:** Solid black pill with white text (`ACTION NEEDED`).
  - **Waiting for Employer:** White pill with a 1px black outline (`WAITING FOR EMPLOYER`).
  - **Closed:** Light grey pill with grey text (`CLOSED`).
  - **Overdue:** Red text only (`#D92D20`), no colored background blocks.
  - **Stage Tags:** Small outlined grey pill tags with mono uppercase text.
- **Structure & Layout:**
  - **Top Announcement Strip:** Thin black bar with white monospace text for the dismissible "What's new" notification.
  - **Top Bar:** "CANDIDATE PORTAL" brand label, Northwind Group monochrome badge, candidate profile, and outlined "SIGN OUT" pill button with thin grey divider underneath.
  - **Role Bar:** Prominent centered uppercase role title, grey monospace metadata, position indicator dots (active black pill + grey dots), and circular outlined navigation buttons (`<` and `>`) that invert to solid black on hover.
  - **Timeline:** 1px grey connector line; solid black circle for done, black ring for current, grey outline for upcoming, and grey X for closed.
  - **To-Do List:** Clean rows separated by thin dashed grey dividers (`1px dashed #E5E5E5`), circular outlined checkboxes that fill solid black when checked, and grey strikethrough for completed tasks.
  - **Details Panel:** Generously padded white card featuring a two-column key-value order summary (grey label on the left, black monospace value on the right, separated by dashed dividers).
  - **Honesty Alert:** Light grey `#F5F5F5` panel with red text and a thin 3px red left border (no red background blocks).

---

## 🚀 How to Run

### Option 1: Direct in Browser (Zero Installation Required)
Open `index.html` directly in any modern web browser.

### Option 2: Python Local Server
```bash
cd candidate-portal
python server.py
```
Open `http://localhost:8080` in your browser.

### Option 3: Node / npm
```bash
npm start
```

---

## 🔑 Demo Account Credentials

- **Email:** `alex@example.com`
- **Password:** `demo1234`
- Click the **"USE DEMO ACCOUNT"** button on the login screen to autofill credentials instantly.

---

## 🧩 Complete Feature Checklist

1. **Authentication:**
   - Login page with demo credentials button, validation error display, and sign out that returns to login.
   - Automatically opens the first job needing action (`UI/UX Design Intern`).
2. **Applications Navigation:**
   - Circular `<` and `>` buttons + keyboard `ArrowLeft` / `ArrowRight`.
   - "ALL MY APPLICATIONS" modal summary table with instant "JUMP TO JOB" actions.
   - Position indicator dots showing current role progress.
3. **Application Timeline:**
   - Interactive horizontal stepper with status indicators and legend modal ("WHAT DO THESE STAGES MEAN?").
4. **To-Do List:**
   - Filter toggle: `ALL JOBS (04)` vs `THIS JOB ONLY`.
   - Groupings: `TODAY`, `THIS WEEK`, `LATER`, `COMPLETED`.
   - Interactive checkboxes and empty state message.
5. **Details & Action Center:**
   - Two-column order summary table for interview & assessment specs.
   - **Interactive actions:**
     - Select interview slot (4 interactive time cards) & confirm booking.
     - Confirm internship dates & attendance.
     - Drag-and-drop / file picker uploader (PDF/PNG/JPG up to 5 MB) with file verification.
     - Assessment simulator launch & test completion confirmation.
     - Request feedback form for closed applications.
     - Reopen completed tasks.
   - Dynamic update of status chips, banner, and advice callouts upon task completion.
6. **Support Contacts Footer:**
   - 3 monochrome contact cards (Recruiter per job, Interview Coordinator, Help Desk) with quick note popup modal.
7. **Accessibility & Polish:**
   - Visible keyboard focus rings (`2px solid #0A0A0A` with 2px offset).
   - Zero em/en dashes (plain hyphens `-` only).
   - Smooth 150-200ms transitions.
   - Fully responsive design that stacks cleanly on mobile viewports.
