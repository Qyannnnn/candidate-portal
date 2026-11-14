/**
 * Candidate Portal - Northwind Group
 * Interactive Application Logic & State Management
 * Minimal Monochrome Luxury Aesthetic
 */

// Initial Mock Data (Zero em/en dashes, plain hyphens only)
const INITIAL_JOBS_DATA = [
  {
    id: "job-1",
    title: "UI/UX Design Intern",
    department: "Product & Design",
    location: "Singapore / Hybrid",
    jobType: "Full-time Internship (6 months)",
    refNumber: "NW-2026-UX402",
    dateApplied: "28 Oct 2026",
    currentStageIndex: 4, // Interview
    whoseTurn: "action", // 'action' | 'waiting' | 'closed'
    waitOrApplyMessage: "Action needed: Please book your interview slot and confirm your dates below. We aim to complete all candidate interviews by 26 Nov 2026. You are welcome to keep applying elsewhere in the meantime.",
    stages: [
      {
        id: "step-1-1",
        title: "Submitted",
        desc: "You sent your application",
        status: "done",
        date: "28 Oct 2026",
        explanation: "We received your application materials through our career portal. Our applicant database recorded your submission.",
        filesSent: ["Alex_Tan_Resume_2026.pdf", "AlexTan_UIUX_Portfolio_2026.pdf"],
        expectedUpdate: "Completed"
      },
      {
        id: "step-1-2",
        title: "Received",
        desc: "We have your application",
        status: "done",
        date: "29 Oct 2026",
        explanation: "Our recruitment operations team verified your information and confirmed you meet the basic eligibility criteria for the internship.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-1-3",
        title: "Screening",
        desc: "Recruiter is reviewing it",
        status: "done",
        date: "3 Nov 2026",
        explanation: "Sarah Jenkins, our Senior Design Recruiter, reviewed your portfolio case studies and past design projects.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-1-4",
        title: "Assessment",
        desc: "Portfolio review & initial chat",
        status: "done",
        date: "8 Nov 2026",
        explanation: "The Product Design leadership team completed a deep-dive evaluation of your user research and mobile interaction design samples.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-1-5",
        title: "Interview",
        desc: "Meet the team",
        status: "current",
        date: "In progress - your turn",
        explanation: "We are excited to meet you! During this 45-minute video interview, you will meet our Principal UX Designer to discuss your design methodology, prototyping process, and team collaboration.",
        interviewDetails: {
          format: "Google Meet Video Call",
          duration: "45 minutes",
          interviewers: "Sarah Jenkins (Lead Recruiter) & Daniel Cho (Principal UX Designer)",
          bookedSlot: null,
          meetingLink: null
        },
        preparationTips: [
          "Choose one in-depth case study to present for 15 minutes, highlighting user research, design iterations, and tradeoffs.",
          "Be prepared to share how you handle constructive critique and collaborate with product managers.",
          "Prepare 2-3 questions for Daniel about our Northwind Design System and product vision.",
          "Check your camera and microphone 10 minutes prior to the scheduled call."
        ],
        filesSent: ["AlexTan_UIUX_Portfolio_2026.pdf"],
        expectedUpdate: "26 Nov 2026"
      },
      {
        id: "step-1-6",
        title: "Awaiting decision",
        desc: "We are deciding",
        status: "upcoming",
        date: "Coming up",
        explanation: "Following your interview, our team will debrief and consolidate feedback scorecards. We aim to reach a final decision within 3 business days of the interview.",
        expectedDuration: "Typically 3 to 5 business days",
        expectedUpdate: "Early Dec 2026"
      },
      {
        id: "step-1-7",
        title: "Offer",
        desc: "Your answer needed",
        status: "upcoming",
        date: "Coming up",
        explanation: "If selected, we will extend a formal internship offer letter outlining compensation, project allocation, and mentor pairing.",
        expectedDuration: "5 calendar days to review and accept"
      }
    ],
    recruiter: {
      name: "Sarah Jenkins",
      role: "Senior Design Recruiter",
      email: "sarah.jenkins@northwind.example.com",
      initials: "SJ",
      whenToContact: "Questions about your interview schedule or role scope."
    }
  },
  {
    id: "job-2",
    title: "Data Analyst Intern",
    department: "Analytics & Business Intelligence",
    location: "Remote (APAC)",
    jobType: "Internship (Full-time)",
    refNumber: "NW-2026-DA118",
    dateApplied: "2 Nov 2026",
    currentStageIndex: 3, // Assessment
    whoseTurn: "action",
    waitOrApplyMessage: "Action needed: Please complete your SQL assessment and upload your transcript by 17 Nov 2026. Once submitted, our analytics team will review your submission within 3 business days.",
    stages: [
      {
        id: "step-2-1",
        title: "Submitted",
        desc: "You sent your application",
        status: "done",
        date: "2 Nov 2026",
        explanation: "Your application was registered along with your resume and educational background.",
        filesSent: ["Alex_Tan_Resume_2026.pdf"],
        expectedUpdate: "Completed"
      },
      {
        id: "step-2-2",
        title: "Received",
        desc: "We have your application",
        status: "done",
        date: "2 Nov 2026",
        explanation: "Application acknowledged and matched with the APAC Business Intelligence cohort.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-2-3",
        title: "Screening",
        desc: "Recruiter is reviewing it",
        status: "done",
        date: "9 Nov 2026",
        explanation: "David Chen evaluated your academic coursework in statistics, relational databases, and data visualization.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-2-4",
        title: "Assessment",
        desc: "Online test to complete",
        status: "current",
        date: "In progress - your turn",
        explanation: "Please take our 60-minute technical assessment covering SQL queries (joins, window functions, aggregations) and foundational business analytics interpretation.",
        assessmentDetails: {
          platform: "Northwind Online Assessment Suite (via CodeSignal)",
          duration: "60 minutes",
          topics: "SQL Querying, Cohort Analysis, Business Metrics",
          completed: false
        },
        preparationTips: [
          "Ensure you are familiar with multi-table JOINs, GROUP BY, and HAVING clauses.",
          "Review common metrics such as monthly recurring revenue (MRR) and customer churn rate.",
          "You will need a stable internet connection; the timer starts when you launch the simulator."
        ],
        filesSent: [],
        expectedUpdate: "20 Nov 2026"
      },
      {
        id: "step-2-5",
        title: "Interview",
        desc: "Meet the team",
        status: "upcoming",
        date: "Coming up",
        explanation: "A technical interview with a Senior Data Analyst exploring data warehousing concepts and a brief case study on metric debugging.",
        expectedDuration: "45 minutes video call"
      },
      {
        id: "step-2-6",
        title: "Awaiting decision",
        desc: "We are deciding",
        status: "upcoming",
        date: "Coming up",
        explanation: "Hiring managers compare technical test results and interview assessments.",
        expectedDuration: "3 business days"
      },
      {
        id: "step-2-7",
        title: "Offer",
        desc: "Your answer needed",
        status: "upcoming",
        date: "Coming up",
        explanation: "Official offer package issued."
      }
    ],
    recruiter: {
      name: "David Chen",
      role: "Talent Lead - Data & Analytics",
      email: "david.chen@northwind.example.com",
      initials: "DC",
      whenToContact: "Questions about your assessment link or technical specifications."
    }
  },
  {
    id: "job-3",
    title: "Frontend Developer Intern",
    department: "Web Engineering",
    location: "Singapore / Hybrid",
    jobType: "Internship (Full-time)",
    refNumber: "NW-2026-FE883",
    dateApplied: "25 Oct 2026",
    currentStageIndex: 2, // Screening
    whoseTurn: "waiting", // Waiting for employer reply
    waitOrApplyMessage: "Wait - our screening is running behind schedule. We expect to give you an update by 16 Nov 2026. You are welcome to keep applying elsewhere in the meantime.",
    honestyNotice: {
      isDelayed: true,
      promisedDate: "12 Nov 2026",
      message: "This is taking longer than we said. We expected to update you by 12 Nov 2026. Sorry about that. Your application is still active and prioritized in our review queue."
    },
    stages: [
      {
        id: "step-3-1",
        title: "Submitted",
        desc: "You sent your application",
        status: "done",
        date: "25 Oct 2026",
        explanation: "Application received with GitHub repositories and technical projects.",
        filesSent: ["Alex_Tan_Resume_2026.pdf", "GitHub_Portfolio_alextan.pdf"],
        expectedUpdate: "Completed"
      },
      {
        id: "step-3-2",
        title: "Received",
        desc: "We have your application",
        status: "done",
        date: "26 Oct 2026",
        explanation: "Routed to Marcus Vance and the Web Platform engineering leads.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-3-3",
        title: "Screening",
        desc: "Recruiter is reviewing it",
        status: "current",
        date: "In progress - waiting for employer",
        explanation: "We are currently reviewing applications for this role. Due to a record volume of engineering applications this cycle, our initial screening review is running two days behind our original commitment.",
        filesSent: [],
        expectedUpdate: "16 Nov 2026"
      },
      {
        id: "step-3-4",
        title: "Assessment",
        desc: "Online coding challenge",
        status: "upcoming",
        date: "Coming up",
        explanation: "Interactive coding challenge building a responsive component with JavaScript and CSS."
      },
      {
        id: "step-3-5",
        title: "Interview",
        desc: "Meet the team",
        status: "upcoming",
        date: "Coming up",
        explanation: "Pair programming session and team culture chat with our staff engineers."
      },
      {
        id: "step-3-6",
        title: "Awaiting decision",
        desc: "We are deciding",
        status: "upcoming",
        date: "Coming up",
        explanation: "Engineering leadership final evaluation."
      },
      {
        id: "step-3-7",
        title: "Offer",
        desc: "Your answer needed",
        status: "upcoming",
        date: "Coming up",
        explanation: "Offer delivery."
      }
    ],
    recruiter: {
      name: "Marcus Vance",
      role: "Engineering Talent Partner",
      email: "marcus.vance@northwind.example.com",
      initials: "MV",
      whenToContact: "Questions about engineering screening or timeline."
    }
  },
  {
    id: "job-4",
    title: "Marketing Intern",
    department: "Brand & Growth Marketing",
    location: "Remote",
    jobType: "Internship (Full-time)",
    refNumber: "NW-2026-MKT049",
    dateApplied: "15 Oct 2026",
    currentStageIndex: 4, // Closed
    isClosed: true,
    whoseTurn: "closed",
    waitOrApplyMessage: "This application is closed - feel free to apply for other roles at Northwind or elsewhere. This decision does not affect your other applications.",
    stages: [
      {
        id: "step-4-1",
        title: "Submitted",
        desc: "You sent your application",
        status: "done",
        date: "15 Oct 2026",
        explanation: "Application received with writing samples and campaign deck.",
        filesSent: ["Alex_Tan_Resume_2026.pdf"],
        expectedUpdate: "Completed"
      },
      {
        id: "step-4-2",
        title: "Received",
        desc: "We have your application",
        status: "done",
        date: "16 Oct 2026",
        explanation: "Logged in Northwind ATS.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-4-3",
        title: "Screening",
        desc: "Recruiter is reviewing it",
        status: "done",
        date: "20 Oct 2026",
        explanation: "Candidate screened and shortlisted for team interview.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-4-4",
        title: "Interview",
        desc: "Meet the team",
        status: "done",
        date: "28 Oct 2026",
        explanation: "Completed 45-minute video interview with Maya Patel and Senior Growth Manager.",
        filesSent: [],
        expectedUpdate: "Completed"
      },
      {
        id: "step-4-5",
        title: "Closed",
        desc: "Not selected",
        status: "closed",
        date: "5 Nov 2026",
        explanation: "Thank you for taking the time to interview with our team. We had many outstanding candidates and have decided to proceed with someone whose background more closely matches our immediate campaign needs. Please note that every application at Northwind is evaluated independently - this does not impact your applications for UI/UX Design Intern, Data Analyst Intern, or Frontend Developer Intern.",
        filesSent: [],
        expectedUpdate: "Completed"
      }
    ],
    recruiter: {
      name: "Maya Patel",
      role: "People Operations & Marketing Talent",
      email: "maya.patel@northwind.example.com",
      initials: "MP",
      whenToContact: "Questions regarding marketing team feedback or future openings."
    }
  }
];

// Initial To-dos Data
const INITIAL_TODOS = [
  {
    id: "todo-1-1",
    jobId: "job-1",
    stepIndex: 4,
    title: "Book your interview slot",
    group: "This week",
    dueDate: "16 Nov 2026",
    dueTag: "in 2 days",
    isOverdue: false,
    isOptional: false,
    completed: false,
    completedDate: null,
    actionType: "book-interview",
    description: "Select your preferred 45-minute video interview slot with Daniel Cho (Principal UX Designer) and Sarah Jenkins."
  },
  {
    id: "todo-1-2",
    jobId: "job-1",
    stepIndex: 4,
    title: "Confirm your internship dates",
    group: "This week",
    dueDate: "18 Nov 2026",
    dueTag: "in 4 days",
    isOverdue: false,
    isOptional: false,
    completed: false,
    completedDate: null,
    actionType: "confirm-dates",
    description: "Confirm whether your university schedule allows you to join Northwind for the full 6-month term (1 Jun 2027 - 31 Dec 2027)."
  },
  {
    id: "todo-1-3",
    jobId: "job-1",
    stepIndex: 0,
    title: "Upload your portfolio",
    group: "Completed",
    dueDate: "28 Oct 2026",
    dueTag: "Done",
    isOverdue: false,
    isOptional: false,
    completed: true,
    completedDate: "28 Oct 2026",
    fileUploaded: "AlexTan_UIUX_Portfolio_2026.pdf",
    actionType: "upload-portfolio",
    description: "Submit your latest case studies in PDF or link format."
  },
  {
    id: "todo-2-1",
    jobId: "job-2",
    stepIndex: 3,
    title: "Upload academic transcript",
    group: "Today",
    dueDate: "14 Nov 2026",
    dueTag: "Due today",
    isOverdue: false,
    isOptional: false,
    completed: false,
    completedDate: null,
    actionType: "upload-transcript",
    description: "Upload an official or unofficial transcript showing your coursework in mathematics, statistics, and programming."
  },
  {
    id: "todo-2-2",
    jobId: "job-2",
    stepIndex: 3,
    title: "Complete online assessment",
    group: "This week",
    dueDate: "17 Nov 2026",
    dueTag: "in 3 days",
    isOverdue: false,
    isOptional: false,
    completed: false,
    completedDate: null,
    actionType: "complete-assessment",
    description: "Complete the 60-minute SQL and business data reasoning challenge on CodeSignal."
  },
  {
    id: "todo-4-1",
    jobId: "job-4",
    stepIndex: 4,
    title: "Ask for interview feedback",
    group: "Later",
    dueDate: "Optional (Anytime)",
    dueTag: "Optional",
    isOverdue: false,
    isOptional: true,
    completed: false,
    completedDate: null,
    actionType: "request-feedback",
    description: "Request constructive feedback on your marketing interview presentation from Maya Patel and the hiring committee."
  }
];

// Global Support Contacts
const GLOBAL_CONTACTS = {
  coordinator: {
    name: "Elena Rossi",
    role: "Interview Coordinator & Talent Ops",
    email: "elena.rossi@northwind.example.com",
    initials: "ER",
    whenToContact: "Booking, moving or cancelling an interview."
  },
  helpDesk: {
    name: "Portal Help Desk",
    role: "Candidate Experience & Support",
    email: "candidate-support@northwind.example.com",
    initials: "TS",
    whenToContact: "Can't log in, upload a file or see your status."
  }
};

// Application State
const state = {
  isLoggedIn: false,
  currentUser: {
    name: "Alex Tan",
    email: "alex@example.com"
  },
  jobs: JSON.parse(JSON.stringify(INITIAL_JOBS_DATA)),
  todos: JSON.parse(JSON.stringify(INITIAL_TODOS)),
  currentJobIndex: 0,
  selectedStepIndex: 4,
  selectedTodoId: null,
  todoFilter: "all",
  bannerDismissed: false,
  bannerMessage: "2 updates since your last visit: Data Analyst Intern moved to Assessment. Your interview for UI/UX Design Intern is ready to book.",
  selectedInterviewSlot: null
};

// DOM References
const elements = {
  loginView: document.getElementById("loginView"),
  portalView: document.getElementById("portalView"),
  loginForm: document.getElementById("loginForm"),
  emailInput: document.getElementById("emailInput"),
  passwordInput: document.getElementById("passwordInput"),
  btnPrefillDemo: document.getElementById("btnPrefillDemo"),
  loginError: document.getElementById("loginError"),
  btnSignOut: document.getElementById("btnSignOut"),
  
  // Banner
  whatsNewBanner: document.getElementById("whatsNewBanner"),
  bannerText: document.getElementById("bannerText"),
  btnDismissBanner: document.getElementById("btnDismissBanner"),

  // Role bar
  btnPrevJob: document.getElementById("btnPrevJob"),
  btnNextJob: document.getElementById("btnNextJob"),
  jobCounterText: document.getElementById("jobCounterText"),
  roleTitle: document.getElementById("roleTitle"),
  roleMetadata: document.getElementById("roleMetadata"),
  roleStatusRow: document.getElementById("roleStatusRow"),
  waitOrApplyAdvice: document.getElementById("waitOrApplyAdvice"),
  btnAllApps: document.getElementById("btnAllApps"),

  // Timeline
  stepperTrack: document.getElementById("stepperTrack"),
  btnWhatMeans: document.getElementById("btnWhatMeans"),

  // To-do list
  todoListContainer: document.getElementById("todoListContainer"),
  todoCountBadge: document.getElementById("todoCountBadge"),
  filterAllJobs: document.getElementById("filterAllJobs"),
  filterThisJob: document.getElementById("filterThisJob"),

  // Details Panel
  detailsPanel: document.getElementById("detailsPanel"),

  // Footer Contacts
  footerContacts: document.getElementById("footerContacts"),

  // Modals & Toasts
  allAppsModal: document.getElementById("allAppsModal"),
  allAppsList: document.getElementById("allAppsList"),
  legendModal: document.getElementById("legendModal"),
  quickMessageModal: document.getElementById("quickMessageModal"),
  messageRecipient: document.getElementById("messageRecipient"),
  quickMessageForm: document.getElementById("quickMessageForm"),
  toastContainer: document.getElementById("toastContainer")
};

// --- INITIALIZATION & EVENT LISTENERS ---
function init() {
  setupEventListeners();
  renderAuth();
}

function setupEventListeners() {
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.btnPrefillDemo.addEventListener("click", () => {
    elements.emailInput.value = "alex@example.com";
    elements.passwordInput.value = "demo1234";
    elements.loginError.classList.add("hidden");
  });

  elements.btnSignOut.addEventListener("click", handleSignOut);

  elements.btnDismissBanner.addEventListener("click", () => {
    state.bannerDismissed = true;
    elements.whatsNewBanner.classList.add("hidden");
  });

  elements.btnPrevJob.addEventListener("click", () => switchJob(state.currentJobIndex - 1));
  elements.btnNextJob.addEventListener("click", () => switchJob(state.currentJobIndex + 1));

  window.addEventListener("keydown", (e) => {
    if (!state.isLoggedIn) return;
    const isModalOpen = document.querySelector(".modal-overlay:not(.hidden)");
    const isInputFocused = ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName);
    if (isModalOpen || isInputFocused) return;

    if (e.key === "ArrowLeft") {
      if (state.currentJobIndex > 0) switchJob(state.currentJobIndex - 1);
    } else if (e.key === "ArrowRight") {
      if (state.currentJobIndex < state.jobs.length - 1) switchJob(state.currentJobIndex + 1);
    } else if (e.key === "Escape") {
      closeAllModals();
    }
  });

  elements.filterAllJobs.addEventListener("click", () => {
    state.todoFilter = "all";
    elements.filterAllJobs.classList.add("active");
    elements.filterThisJob.classList.remove("active");
    renderTodoList();
  });

  elements.filterThisJob.addEventListener("click", () => {
    state.todoFilter = "job";
    elements.filterThisJob.classList.add("active");
    elements.filterAllJobs.classList.remove("active");
    renderTodoList();
  });

  elements.btnAllApps.addEventListener("click", openAllAppsModal);
  elements.btnWhatMeans.addEventListener("click", () => {
    elements.legendModal.classList.remove("hidden");
  });

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => closeAllModals());
  });

  elements.quickMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const recipient = document.getElementById("messageRecipient").textContent;
    showToast(`MESSAGE SENT TO ${recipient.toUpperCase()}`);
    document.getElementById("messageBody").value = "";
    closeAllModals();
  });
}

// --- AUTHENTICATION ---
function handleLogin(e) {
  e.preventDefault();
  const email = elements.emailInput.value.trim().toLowerCase();
  const password = elements.passwordInput.value.trim();

  if (email === "alex@example.com" && password === "demo1234") {
    state.isLoggedIn = true;
    elements.loginError.classList.add("hidden");
    
    const actionJobIndex = state.jobs.findIndex(j => j.whoseTurn === "action");
    state.currentJobIndex = actionJobIndex >= 0 ? actionJobIndex : 0;
    state.selectedStepIndex = state.jobs[state.currentJobIndex].currentStageIndex;
    state.selectedTodoId = null;

    renderAuth();
    renderAll();
    showToast(`WELCOME BACK, ${state.currentUser.name.toUpperCase()}`);
  } else {
    elements.loginError.classList.remove("hidden");
  }
}

function handleSignOut() {
  state.isLoggedIn = false;
  elements.emailInput.value = "";
  elements.passwordInput.value = "";
  renderAuth();
  showToast("YOU HAVE BEEN SIGNED OUT");
}

function renderAuth() {
  if (state.isLoggedIn) {
    elements.loginView.classList.add("hidden");
    elements.portalView.classList.remove("hidden");
  } else {
    elements.loginView.classList.remove("hidden");
    elements.portalView.classList.add("hidden");
  }
}

// --- NAVIGATION & JOB SWITCHING ---
function switchJob(index) {
  if (index < 0 || index >= state.jobs.length) return;
  state.currentJobIndex = index;
  const job = state.jobs[index];
  state.selectedStepIndex = job.currentStageIndex;
  state.selectedTodoId = null;
  state.selectedInterviewSlot = null;

  renderAll();
}

function closeAllModals() {
  elements.allAppsModal.classList.add("hidden");
  elements.legendModal.classList.add("hidden");
  elements.quickMessageModal.classList.add("hidden");
}

// --- FULL RENDER ---
function renderAll() {
  renderBanner();
  renderRoleBar();
  renderTimeline();
  renderTodoList();
  renderDetailsPanel();
  renderFooterContacts();
}

// 1. BANNER
function renderBanner() {
  if (state.bannerDismissed) {
    elements.whatsNewBanner.classList.add("hidden");
  } else {
    elements.whatsNewBanner.classList.remove("hidden");
    elements.bannerText.textContent = state.bannerMessage.toUpperCase();
  }
}

// 2. ROLE BAR
function renderRoleBar() {
  const currentJob = state.jobs[state.currentJobIndex];
  const totalJobs = state.jobs.length;

  elements.btnPrevJob.disabled = state.currentJobIndex === 0;
  elements.btnNextJob.disabled = state.currentJobIndex === totalJobs - 1;

  elements.jobCounterText.textContent = `JOB 0${state.currentJobIndex + 1} / 0${totalJobs} APPLIED`;
  elements.roleTitle.textContent = currentJob.title.toUpperCase();

  // Position dots
  const positionDotsContainer = document.getElementById("positionDotsContainer");
  if (positionDotsContainer) {
    positionDotsContainer.innerHTML = `
      <div class="position-dots">
        ${state.jobs.map((_, i) => `<span class="position-dot ${i === state.currentJobIndex ? "active" : ""}"></span>`).join("")}
      </div>
    `;
  }

  // Metadata
  elements.roleMetadata.innerHTML = `
    <span class="meta-chip">${currentJob.department.toUpperCase()}</span>
    <span class="meta-chip">/</span>
    <span class="meta-chip">${currentJob.location.toUpperCase()}</span>
    <span class="meta-chip">/</span>
    <span class="meta-chip">${currentJob.jobType.toUpperCase()}</span>
    <span class="meta-chip">/</span>
    <span class="meta-chip">REF: ${currentJob.refNumber.toUpperCase()}</span>
    <span class="meta-chip">/</span>
    <span class="meta-chip">APPLIED: ${currentJob.dateApplied.toUpperCase()}</span>
  `;

  // Status Chips (No colour - fill and line distinction)
  let turnChipHtml = "";
  if (currentJob.whoseTurn === "action") {
    turnChipHtml = `<span class="chip chip-action">ACTION NEEDED</span>`;
  } else if (currentJob.whoseTurn === "waiting") {
    turnChipHtml = `<span class="chip chip-waiting">WAITING FOR EMPLOYER</span>`;
  } else {
    turnChipHtml = `<span class="chip chip-closed">CLOSED: ${currentJob.outcome?.toUpperCase() || "NOT SELECTED"}</span>`;
  }

  const currentStageName = currentJob.stages[currentJob.currentStageIndex]?.title || "Closed";
  elements.roleStatusRow.innerHTML = `
    <span class="chip chip-stage">STAGE: ${currentStageName.toUpperCase()}</span>
    ${turnChipHtml}
  `;

  // Wait or Apply advice
  elements.waitOrApplyAdvice.innerHTML = `
    <div>
      <strong>SHOULD I WAIT OR KEEP APPLYING?</strong>
      <span>${currentJob.waitOrApplyMessage}</span>
    </div>
  `;
}

// 3. TIMELINE (HORIZONTAL STEPPER)
function renderTimeline() {
  const currentJob = state.jobs[state.currentJobIndex];
  elements.stepperTrack.innerHTML = "";

  currentJob.stages.forEach((stage, index) => {
    const isDone = stage.status === "done";
    const isCurrent = index === currentJob.currentStageIndex;
    const isClosed = stage.status === "closed";
    const isSelected = state.selectedStepIndex === index;

    let nodeClass = "step-node";
    if (isDone) nodeClass += " done-step";
    if (isCurrent) nodeClass += " current-step";
    if (isClosed) nodeClass += " closed-step";
    if (isSelected) nodeClass += " active-step";

    let circleContent = "";
    if (isDone) {
      circleContent = `<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>`;
    } else if (isClosed) {
      circleContent = `<svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>`;
    } else {
      circleContent = `<span>0${index + 1}</span>`;
    }

    let statusTagHtml = "";
    if (isDone) {
      statusTagHtml = `<span class="step-status-tag tag-done">${stage.date.toUpperCase()}</span>`;
    } else if (isCurrent) {
      if (currentJob.whoseTurn === "action") {
        statusTagHtml = `<span class="step-status-tag tag-your-turn">ACTION NEEDED</span>`;
      } else {
        statusTagHtml = `<span class="step-status-tag tag-in-progress">IN PROGRESS</span>`;
      }
    } else if (isClosed) {
      statusTagHtml = `<span class="step-status-tag tag-closed-status">CLOSED</span>`;
    } else {
      statusTagHtml = `<span class="step-status-tag tag-coming-up">COMING UP</span>`;
    }

    const nodeEl = document.createElement("div");
    nodeEl.className = nodeClass;
    nodeEl.setAttribute("role", "button");
    nodeEl.setAttribute("tabindex", "0");
    nodeEl.setAttribute("aria-current", isSelected ? "step" : "false");
    nodeEl.innerHTML = `
      <div class="step-circle">${circleContent}</div>
      <div class="step-info-col">
        <span class="step-title">${stage.title.toUpperCase()}</span>
        <span class="step-desc">${stage.desc}</span>
        ${statusTagHtml}
      </div>
    `;

    nodeEl.addEventListener("click", () => {
      state.selectedStepIndex = index;
      state.selectedTodoId = null;
      renderTimeline();
      renderDetailsPanel();
    });

    nodeEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        nodeEl.click();
      }
    });

    elements.stepperTrack.appendChild(nodeEl);
  });
}

// 4. TO-DO LIST (LEFT COLUMN)
function renderTodoList() {
  const currentJob = state.jobs[state.currentJobIndex];
  
  let filteredTodos = state.todos;
  if (state.todoFilter === "job") {
    filteredTodos = state.todos.filter(t => t.jobId === currentJob.id);
  }

  const pendingCount = filteredTodos.filter(t => !t.completed).length;
  elements.todoCountBadge.textContent = String(pendingCount).padStart(2, "0");

  if (filteredTodos.length === 0) {
    elements.todoListContainer.innerHTML = `
      <div class="todo-empty-state">
        <p>YOU ARE ALL SET</p>
        <span>Nothing needed from you right now. We will update this page when something changes.</span>
      </div>
    `;
    return;
  }

  const groups = {
    "Today": filteredTodos.filter(t => !t.completed && t.group === "Today"),
    "This week": filteredTodos.filter(t => !t.completed && t.group === "This week"),
    "Later": filteredTodos.filter(t => !t.completed && t.group === "Later"),
    "Completed": filteredTodos.filter(t => t.completed)
  };

  elements.todoListContainer.innerHTML = "";

  Object.entries(groups).forEach(([groupName, items]) => {
    if (items.length === 0) return;

    const groupSec = document.createElement("div");
    groupSec.className = "todo-group-section";
    groupSec.innerHTML = `<div class="group-heading">${groupName.toUpperCase()} ${String(items.length).padStart(2, "0")}</div>`;

    items.forEach(todo => {
      const associatedJob = state.jobs.find(j => j.id === todo.jobId);
      const isSelected = state.selectedTodoId === todo.id;
      
      const itemCard = document.createElement("div");
      itemCard.className = `todo-item-card ${todo.completed ? "is-completed" : ""} ${isSelected ? "selected-todo" : ""}`;
      
      let dueTagClass = "todo-due-tag";
      if (todo.isOverdue) dueTagClass += " overdue";

      itemCard.innerHTML = `
        <button class="todo-checkbox-btn" aria-label="Toggle todo completed" data-todo-id="${todo.id}">
          <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>
        </button>
        <div class="todo-content-col">
          <div class="todo-title">${todo.title}</div>
          <div class="todo-meta-row">
            <span class="todo-job-tag">${associatedJob?.title?.toUpperCase() || "JOB"}</span>
            ${todo.completed 
              ? `<span class="todo-done-date">DONE ${todo.completedDate?.toUpperCase() || ""}</span>` 
              : `<span class="${dueTagClass}">${todo.dueTag.toUpperCase()}</span>`
            }
            ${todo.isOptional ? `<span class="todo-optional-tag">OPTIONAL</span>` : ""}
          </div>
        </div>
      `;

      const checkboxBtn = itemCard.querySelector(".todo-checkbox-btn");
      checkboxBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleTodoCompletion(todo.id);
      });

      itemCard.addEventListener("click", (e) => {
        if (e.target.closest(".todo-checkbox-btn")) return;

        if (state.currentJobIndex !== state.jobs.findIndex(j => j.id === todo.jobId)) {
          const targetJobIdx = state.jobs.findIndex(j => j.id === todo.jobId);
          state.currentJobIndex = targetJobIdx;
        }
        state.selectedStepIndex = todo.stepIndex;
        state.selectedTodoId = todo.id;

        renderAll();
      });

      groupSec.appendChild(itemCard);
    });

    elements.todoListContainer.appendChild(groupSec);
  });
}

// 5. DETAILS PANEL (RIGHT COLUMN)
function renderDetailsPanel() {
  const currentJob = state.jobs[state.currentJobIndex];

  // If a specific To-Do is selected
  if (state.selectedTodoId) {
    const selectedTodo = state.todos.find(t => t.id === state.selectedTodoId);
    if (!selectedTodo) {
      state.selectedTodoId = null;
      renderDetailsPanel();
      return;
    }

    const stepAssociated = currentJob.stages[selectedTodo.stepIndex];
    elements.detailsPanel.innerHTML = `
      <div class="details-header">
        <div class="details-title-wrap">
          <button class="details-breadcrumb" id="btnBackToStep">
            &larr; BACK TO STEP: ${stepAssociated?.title?.toUpperCase() || "TIMELINE"}
          </button>
          <div class="details-title" style="margin-top:6px;">${selectedTodo.title.toUpperCase()}</div>
          <div style="display:flex; align-items:center; gap:8px; margin-top:6px;">
            <span class="meta-chip">${currentJob.title.toUpperCase()}</span>
            <span class="chip ${selectedTodo.completed ? "chip-stage" : "chip-action"}">
              ${selectedTodo.completed ? "COMPLETED" : selectedTodo.dueTag.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div class="explanation-block">
        <h3>WHAT TO DO &amp; WHY</h3>
        <p>${selectedTodo.description}</p>
      </div>

      ${renderInteractiveTodoAction(selectedTodo, currentJob)}
    `;

    document.getElementById("btnBackToStep")?.addEventListener("click", () => {
      state.selectedTodoId = null;
      renderAll();
    });

    attachTodoActionHandlers(selectedTodo);
    return;
  }

  // Otherwise, Timeline Step is selected
  const stage = currentJob.stages[state.selectedStepIndex];
  if (!stage) return;

  const stepNumber = state.selectedStepIndex + 1;
  const totalSteps = currentJob.stages.length;

  let stepChipClass = "chip-stage";
  let stepChipLabel = `COMPLETED ${stage.date.toUpperCase()}`;
  if (state.selectedStepIndex === currentJob.currentStageIndex) {
    if (currentJob.whoseTurn === "action") {
      stepChipClass = "chip-action";
      stepChipLabel = "ACTION NEEDED";
    } else {
      stepChipClass = "chip-waiting";
      stepChipLabel = "WAITING FOR EMPLOYER";
    }
  } else if (state.selectedStepIndex > currentJob.currentStageIndex) {
    stepChipClass = "chip-closed";
    stepChipLabel = "UPCOMING";
  } else if (stage.status === "closed") {
    stepChipClass = "chip-closed";
    stepChipLabel = "CLOSED";
  }

  const stepTodos = state.todos.filter(t => t.jobId === currentJob.id && t.stepIndex === state.selectedStepIndex);

  // Honesty Notice: Red text only + thin red left border, no red background block
  let honestyHtml = "";
  if (currentJob.honestyNotice && currentJob.honestyNotice.isDelayed && state.selectedStepIndex === currentJob.currentStageIndex) {
    honestyHtml = `
      <div class="honesty-notice-card">
        <div class="honesty-notice-content">
          <h4>HONEST STATUS UPDATE: DELAYED PAST ${currentJob.honestyNotice.promisedDate.toUpperCase()}</h4>
          <p>${currentJob.honestyNotice.message}</p>
          <button class="btn-contact-recruiter-direct" id="btnHonestyContact">
            CONTACT ${currentJob.recruiter.name.toUpperCase()}
          </button>
        </div>
      </div>
    `;
  }

  // Two-column order summary list for interview specifics
  let interviewHtml = "";
  if (stage.interviewDetails) {
    const isBooked = !!stage.interviewDetails.bookedSlot;
    interviewHtml = `
      <div class="detail-subcard">
        <div class="subcard-title">INTERVIEW SPECIFICATIONS</div>
        <div class="summary-table">
          <div class="summary-row">
            <span class="summary-label">FORMAT</span>
            <span class="summary-value">${stage.interviewDetails.format.toUpperCase()} (${stage.interviewDetails.duration.toUpperCase()})</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">INTERVIEWERS</span>
            <span class="summary-value">${stage.interviewDetails.interviewers.toUpperCase()}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">STATUS</span>
            <span class="summary-value">${isBooked ? "CONFIRMED: " + stage.interviewDetails.bookedSlot.toUpperCase() : "SLOT NOT BOOKED"}</span>
          </div>
          ${isBooked ? `
          <div class="summary-row">
            <span class="summary-label">MEETING LINK</span>
            <span class="summary-value"><a href="#" onclick="alert('Demo Google Meet room: https://meet.google.com/nwg-dxpt-kzm'); return false;" class="text-link">MEET.GOOGLE.COM/NWG-DXPT-KZM</a></span>
          </div>` : ""}
        </div>
      </div>
    `;
  }

  // Two-column order summary for assessment details
  let assessmentHtml = "";
  if (stage.assessmentDetails) {
    assessmentHtml = `
      <div class="detail-subcard">
        <div class="subcard-title">ASSESSMENT SPECIFICATIONS</div>
        <div class="summary-table">
          <div class="summary-row">
            <span class="summary-label">PLATFORM</span>
            <span class="summary-value">${stage.assessmentDetails.platform.toUpperCase()}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">DURATION</span>
            <span class="summary-value">${stage.assessmentDetails.duration.toUpperCase()}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">TOPICS</span>
            <span class="summary-value">${stage.assessmentDetails.topics.toUpperCase()}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">STATUS</span>
            <span class="summary-value">${stage.assessmentDetails.completed ? "COMPLETED" : "PENDING SUBMISSION"}</span>
          </div>
        </div>
      </div>
    `;
  }

  // Preparation tips
  let prepHtml = "";
  if (stage.preparationTips && stage.preparationTips.length > 0) {
    prepHtml = `
      <div class="detail-subcard">
        <div class="subcard-title">HOW TO PREPARE</div>
        <ul class="subcard-list">
          ${stage.preparationTips.map(tip => `<li>${tip}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  // Files sent
  let filesHtml = "";
  if (stage.filesSent && stage.filesSent.length > 0) {
    filesHtml = `
      <div class="detail-subcard">
        <div class="subcard-title">WHAT YOU SENT</div>
        <div style="display:flex; flex-wrap:wrap; gap:8px;">
          ${stage.filesSent.map(file => `
            <div class="attachment-pill">
              <span>${file}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // To-dos for this step
  let stepTodosHtml = "";
  if (stepTodos.length > 0) {
    stepTodosHtml = `
      <div class="detail-subcard">
        <div class="subcard-title">TO-DOS FOR THIS STEP</div>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${stepTodos.map(todo => `
            <div style="display:flex; align-items:center; justify-content:space-between; padding:10px 14px; background:var(--c-grey-bg); border-radius:6px;">
              <span style="font-size:13.5px; font-weight:600; color:${todo.completed ? "var(--c-grey-text); text-decoration:line-through;" : "var(--c-black);"}">
                ${todo.title}
              </span>
              <button class="btn-action-secondary" style="padding:4px 12px; font-size:10px;" onclick="window.selectTodoDirect('${todo.id}')">
                ${todo.completed ? "REVIEW" : "TAKE ACTION"}
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  } else {
    stepTodosHtml = `
      <div class="detail-subcard" style="background:var(--c-grey-bg);">
        <span style="font-family:var(--font-mono); font-size:11.5px; color:var(--c-grey-text); text-transform:uppercase;">
          Nothing for you to do at this step. We will contact you if anything is needed.
        </span>
      </div>
    `;
  }

  elements.detailsPanel.innerHTML = `
    <div class="details-header">
      <div class="details-title-wrap">
        <div class="details-step-counter">STEP 0${stepNumber} / 0${totalSteps}</div>
        <div class="details-title">${stage.title.toUpperCase()}</div>
      </div>
      <span class="chip ${stepChipClass}">${stepChipLabel}</span>
    </div>

    ${honestyHtml}

    <div class="explanation-block">
      <h3>FROM THE HIRING TEAM</h3>
      <p>${stage.explanation}</p>
    </div>

    ${interviewHtml}
    ${assessmentHtml}
    ${prepHtml}
    ${filesHtml}
    ${stepTodosHtml}

    <div style="font-family:var(--font-mono); font-size:11px; color:var(--c-grey-text); margin-top:auto; padding-top:16px; border-top:1px dashed var(--c-grey-border); display:flex; justify-content:space-between; text-transform:uppercase;">
      <span>EXPECTED UPDATE: ${stage.expectedUpdate || "WITHIN 3-5 BUSINESS DAYS"}</span>
      <span>STEP REF: ${stage.id.toUpperCase()}</span>
    </div>
  `;

  document.getElementById("btnHonestyContact")?.addEventListener("click", () => {
    openQuickMessageModal(currentJob.recruiter);
  });
}

window.selectTodoDirect = function(todoId) {
  state.selectedTodoId = todoId;
  renderAll();
};

// --- INTERACTIVE ACTION MODULES IN DETAILS PANEL ---
function renderInteractiveTodoAction(todo, job) {
  if (todo.completed) {
    return `
      <div class="action-box">
        <h3>TASK COMPLETED</h3>
        <p style="font-size:13.5px; color:var(--c-black);">
          Completed on ${todo.completedDate || "earlier"}. 
          ${todo.fileUploaded ? `Uploaded document: <strong>${todo.fileUploaded}</strong>.` : ""}
        </p>
        <div>
          <button class="btn-action-secondary" id="btnUndoTodo">REOPEN TASK</button>
        </div>
      </div>
    `;
  }

  // 1. Book interview action
  if (todo.actionType === "book-interview") {
    const slots = [
      { id: "slot-1", date: "Mon, 17 Nov 2026", time: "10:00 AM - 10:45 AM (SGT)" },
      { id: "slot-2", date: "Mon, 17 Nov 2026", time: "2:30 PM - 3:15 PM (SGT)" },
      { id: "slot-3", date: "Tue, 18 Nov 2026", time: "11:00 AM - 11:45 AM (SGT)" },
      { id: "slot-4", date: "Wed, 19 Nov 2026", time: "4:00 PM - 4:45 PM (SGT)" }
    ];

    return `
      <div class="action-box">
        <h3>SELECT AN INTERVIEW TIME SLOT</h3>
        <p style="font-size:13px; color:var(--c-grey-text);">
          All slots are 45 minutes on Google Meet with Sarah Jenkins &amp; Daniel Cho.
        </p>

        <div class="slots-grid">
          ${slots.map(s => `
            <button class="slot-btn ${state.selectedInterviewSlot === s.id ? "selected" : ""}" data-slot-id="${s.id}" data-slot-label="${s.date} at ${s.time}">
              <span class="slot-date">${s.date.toUpperCase()}</span>
              <span class="slot-time">${s.time.toUpperCase()}</span>
            </button>
          `).join("")}
        </div>

        <div class="button-group-row" style="margin-top:8px;">
          <button class="btn-action-primary" id="btnConfirmBooking" ${!state.selectedInterviewSlot ? "disabled" : ""}>
            CONFIRM SELECTED SLOT
          </button>
          <button class="btn-action-secondary" id="btnRequestDifferentTime">
            NONE OF THESE WORK FOR ME
          </button>
        </div>
      </div>
    `;
  }

  // 2. Confirm dates or attendance action
  if (todo.actionType === "confirm-dates") {
    return `
      <div class="action-box">
        <h3>CONFIRM AVAILABILITY FOR INTERNSHIP DATES</h3>
        <p style="font-size:13.5px; color:var(--c-black);">
          Northwind internship dates: <strong>1 June 2027 - 31 December 2027</strong> (Full-time, 40 hrs/week).
        </p>

        <div style="display:flex; flex-direction:column; gap:10px; margin:8px 0;">
          <label style="display:flex; align-items:center; gap:10px; font-size:14px; cursor:pointer;">
            <input type="radio" name="datesConfirmRadio" value="available" checked>
            <span><strong>YES, I CONFIRM</strong> I am fully available for this period.</span>
          </label>
          <label style="display:flex; align-items:center; gap:10px; font-size:14px; cursor:pointer;">
            <input type="radio" name="datesConfirmRadio" value="adjust">
            <span>I have academic commitments and need to request minor date adjustments.</span>
          </label>
        </div>

        <div class="button-group-row">
          <button class="btn-action-primary" id="btnSubmitDates">CONFIRM AVAILABILITY</button>
        </div>
      </div>
    `;
  }

  // 3. Upload document action
  if (todo.actionType.startsWith("upload")) {
    return `
      <div class="action-box">
        <h3>UPLOAD DOCUMENT</h3>
        <p style="font-family:var(--font-mono); font-size:11px; color:var(--c-grey-text); text-transform:uppercase;">
          Accepted formats: PDF, PNG, JPG (maximum size: 5 MB).
        </p>

        <input type="file" id="filePickerInput" accept=".pdf,.png,.jpg,.jpeg" style="display:none;" />
        
        <div class="dropzone-container" id="dropzoneArea">
          <svg class="dropzone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
          <div class="dropzone-text">CLICK TO CHOOSE A FILE OR DRAG &amp; DROP HERE</div>
          <div class="dropzone-subtext">PDF, PNG, JPG UP TO 5 MB</div>
        </div>

        <div id="uploadStatusArea"></div>
      </div>
    `;
  }

  // 4. Complete assessment action
  if (todo.actionType === "complete-assessment") {
    return `
      <div class="action-box">
        <h3>SQL &amp; DATA ANALYTICS ONLINE ASSESSMENT</h3>
        <p style="font-size:13.5px; color:var(--c-black);">
          Platform: Northwind CodeSignal Assessment Suite (60 minutes).
        </p>

        <div style="background:var(--c-white); border:1px solid var(--c-grey-border); border-radius:6px; padding:12px; font-size:13px; color:var(--c-grey-text);">
          Can't find your invitation link? Check your spam folder for an email from <code>evaluations@northwind.example.com</code> or launch the test simulator directly below.
        </div>

        <div class="button-group-row">
          <button class="btn-action-primary" id="btnLaunchSimulator">
            LAUNCH TEST SIMULATOR
          </button>
          <button class="btn-action-secondary" id="btnMarkTestCompleted">
            I HAVE COMPLETED THE TEST
          </button>
        </div>
      </div>
    `;
  }

  // 5. Request Feedback action
  if (todo.actionType === "request-feedback") {
    return `
      <div class="action-box">
        <h3>REQUEST INTERVIEW FEEDBACK</h3>
        <p style="font-size:13.5px; color:var(--c-black);">
          We are committed to helping candidates develop. Maya Patel and the marketing panel can share summary notes from your interview.
        </p>

        <div style="display:flex; flex-direction:column; gap:6px;">
          <label style="font-family:var(--font-mono); font-size:11px; text-transform:uppercase; color:var(--c-grey-text);">
            Any specific questions for the panel? (Optional)
          </label>
          <textarea id="feedbackRequestNotes" rows="3" style="width:100%; padding:10px 14px; border:1px solid var(--c-grey-border); border-radius:6px; font-size:13px; background:var(--c-white);" placeholder="e.g. Any advice on my campaign strategy presentation or data metrics?"></textarea>
        </div>

        <div class="button-group-row">
          <button class="btn-action-primary" id="btnSubmitFeedbackRequest">SEND FEEDBACK REQUEST</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="action-box">
      <button class="btn-action-primary" id="btnDefaultComplete">MARK AS DONE</button>
    </div>
  `;
}

// Handlers for To-Do Actions
function attachTodoActionHandlers(todo) {
  const currentJob = state.jobs[state.currentJobIndex];

  document.getElementById("btnUndoTodo")?.addEventListener("click", () => {
    todo.completed = false;
    todo.completedDate = null;
    checkJobStatusAndUpdate(currentJob);
    renderAll();
    showToast("TASK MARKED AS INCOMPLETE");
  });

  document.querySelectorAll(".slot-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const slotId = btn.getAttribute("data-slot-id");
      state.selectedInterviewSlot = slotId;
      document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      const confirmBtn = document.getElementById("btnConfirmBooking");
      if (confirmBtn) confirmBtn.disabled = false;
    });
  });

  document.getElementById("btnConfirmBooking")?.addEventListener("click", () => {
    const selectedBtn = document.querySelector(`.slot-btn[data-slot-id="${state.selectedInterviewSlot}"]`);
    const slotLabel = selectedBtn ? selectedBtn.getAttribute("data-slot-label") : "Selected Slot";

    todo.completed = true;
    todo.completedDate = "Today";

    const interviewStep = currentJob.stages[4];
    if (interviewStep && interviewStep.interviewDetails) {
      interviewStep.interviewDetails.bookedSlot = slotLabel;
      interviewStep.interviewDetails.meetingLink = "https://meet.google.com/nwg-dxpt-kzm";
    }

    state.bannerMessage = `Interview confirmed for ${currentJob.title} on ${slotLabel}! Check your email for calendar invite.`;
    state.bannerDismissed = false;

    checkJobStatusAndUpdate(currentJob);
    renderAll();
    showToast(`INTERVIEW BOOKED FOR ${slotLabel.toUpperCase()}`);
  });

  document.getElementById("btnRequestDifferentTime")?.addEventListener("click", () => {
    openQuickMessageModal(GLOBAL_CONTACTS.coordinator, "Request for alternative interview timeslot");
  });

  document.getElementById("btnSubmitDates")?.addEventListener("click", () => {
    const selectedVal = document.querySelector('input[name="datesConfirmRadio"]:checked')?.value;
    if (selectedVal === "available") {
      todo.completed = true;
      todo.completedDate = "Today";
      checkJobStatusAndUpdate(currentJob);
      renderAll();
      showToast("AVAILABILITY CONFIRMED");
    } else {
      openQuickMessageModal(currentJob.recruiter, "Request for internship date adjustments");
    }
  });

  const dropzoneArea = document.getElementById("dropzoneArea");
  const filePickerInput = document.getElementById("filePickerInput");

  if (dropzoneArea && filePickerInput) {
    dropzoneArea.addEventListener("click", () => filePickerInput.click());

    dropzoneArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzoneArea.classList.add("drag-active");
    });

    dropzoneArea.addEventListener("dragleave", () => {
      dropzoneArea.classList.remove("drag-active");
    });

    dropzoneArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzoneArea.classList.remove("drag-active");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processUploadedFile(e.dataTransfer.files[0], todo, currentJob);
      }
    });

    filePickerInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        processUploadedFile(e.target.files[0], todo, currentJob);
      }
    });
  }

  document.getElementById("btnLaunchSimulator")?.addEventListener("click", () => {
    alert("Launching CodeSignal Test Environment: SQL & Analytics Assessment (60 minutes).");
  });

  document.getElementById("btnMarkTestCompleted")?.addEventListener("click", () => {
    todo.completed = true;
    todo.completedDate = "Today";
    
    const assessStep = currentJob.stages[3];
    if (assessStep && assessStep.assessmentDetails) {
      assessStep.assessmentDetails.completed = true;
    }

    state.bannerMessage = `Assessment completed for ${currentJob.title}! Recruiter David Chen has been notified.`;
    state.bannerDismissed = false;

    checkJobStatusAndUpdate(currentJob);
    renderAll();
    showToast("ASSESSMENT MARKED AS COMPLETED");
  });

  document.getElementById("btnSubmitFeedbackRequest")?.addEventListener("click", () => {
    todo.completed = true;
    todo.completedDate = "Today";
    checkJobStatusAndUpdate(currentJob);
    renderAll();
    showToast(`FEEDBACK REQUEST SENT TO MAYA PATEL`);
  });

  document.getElementById("btnDefaultComplete")?.addEventListener("click", () => {
    todo.completed = true;
    todo.completedDate = "Today";
    checkJobStatusAndUpdate(currentJob);
    renderAll();
    showToast("TASK COMPLETED");
  });
}

function processUploadedFile(file, todo, job) {
  if (file.size > 5 * 1024 * 1024) {
    alert("File exceeds maximum size limit of 5 MB. Please select a smaller file.");
    return;
  }

  const validExts = [".pdf", ".png", ".jpg", ".jpeg"];
  const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
  if (!validExts.includes(fileExt)) {
    alert("Invalid file format. Please upload a PDF, PNG, or JPG file.");
    return;
  }

  todo.completed = true;
  todo.completedDate = "Today";
  todo.fileUploaded = file.name;

  const step = job.stages[todo.stepIndex];
  if (step) {
    if (!step.filesSent) step.filesSent = [];
    if (!step.filesSent.includes(file.name)) {
      step.filesSent.push(file.name);
    }
  }

  state.bannerMessage = `Document "${file.name}" uploaded successfully for ${job.title}.`;
  state.bannerDismissed = false;

  checkJobStatusAndUpdate(job);
  renderAll();
  showToast(`FILE UPLOADED: ${file.name.toUpperCase()}`);
}

function checkJobStatusAndUpdate(job) {
  if (job.isClosed) return;

  const remainingActionTodos = state.todos.filter(t => t.jobId === job.id && !t.completed && !t.isOptional);

  if (remainingActionTodos.length === 0) {
    job.whoseTurn = "waiting";
    job.waitOrApplyMessage = `Wait - you are all set! We are processing your submission. We will update this page as soon as there is news.`;
  } else {
    job.whoseTurn = "action";
  }
}

function toggleTodoCompletion(todoId) {
  const todo = state.todos.find(t => t.id === todoId);
  if (!todo) return;

  todo.completed = !todo.completed;
  todo.completedDate = todo.completed ? "Today" : null;

  const job = state.jobs.find(j => j.id === todo.jobId);
  if (job) checkJobStatusAndUpdate(job);

  renderAll();
  showToast(todo.completed ? `TASK COMPLETED: ${todo.title.toUpperCase()}` : `TASK REOPENED: ${todo.title.toUpperCase()}`);
}

// 6. FOOTER CONTACTS
function renderFooterContacts() {
  const currentJob = state.jobs[state.currentJobIndex];
  const recruiter = currentJob.recruiter;

  elements.footerContacts.innerHTML = `
    <!-- Contact 1: Recruiter for this specific job -->
    <div class="contact-card">
      <div class="contact-top-row">
        <div class="contact-avatar">${recruiter.initials}</div>
        <div class="contact-name-col">
          <div class="contact-name">${recruiter.name.toUpperCase()}</div>
          <div class="contact-role">${recruiter.role.toUpperCase()}</div>
        </div>
      </div>
      <div class="contact-when-box">
        ${recruiter.whenToContact}
      </div>
      <div class="contact-actions-row">
        <a href="mailto:${recruiter.email}" class="btn-contact-email">EMAIL</a>
        <button class="btn-quick-message" onclick="window.openMessageModalRecruiter()">QUICK NOTE</button>
      </div>
    </div>

    <!-- Contact 2: Interview Coordinator -->
    <div class="contact-card">
      <div class="contact-top-row">
        <div class="contact-avatar">${GLOBAL_CONTACTS.coordinator.initials}</div>
        <div class="contact-name-col">
          <div class="contact-name">${GLOBAL_CONTACTS.coordinator.name.toUpperCase()}</div>
          <div class="contact-role">${GLOBAL_CONTACTS.coordinator.role.toUpperCase()}</div>
        </div>
      </div>
      <div class="contact-when-box">
        ${GLOBAL_CONTACTS.coordinator.whenToContact}
      </div>
      <div class="contact-actions-row">
        <a href="mailto:${GLOBAL_CONTACTS.coordinator.email}" class="btn-contact-email">EMAIL</a>
        <button class="btn-quick-message" onclick="window.openMessageModalCoordinator()">QUICK NOTE</button>
      </div>
    </div>

    <!-- Contact 3: Portal Help Desk -->
    <div class="contact-card">
      <div class="contact-top-row">
        <div class="contact-avatar">${GLOBAL_CONTACTS.helpDesk.initials}</div>
        <div class="contact-name-col">
          <div class="contact-name">${GLOBAL_CONTACTS.helpDesk.name.toUpperCase()}</div>
          <div class="contact-role">${GLOBAL_CONTACTS.helpDesk.role.toUpperCase()}</div>
        </div>
      </div>
      <div class="contact-when-box">
        ${GLOBAL_CONTACTS.helpDesk.whenToContact}
      </div>
      <div class="contact-actions-row">
        <a href="mailto:${GLOBAL_CONTACTS.helpDesk.email}" class="btn-contact-email">EMAIL</a>
        <button class="btn-quick-message" onclick="window.openMessageModalHelpDesk()">SUPPORT</button>
      </div>
    </div>
  `;
}

window.openMessageModalRecruiter = function() {
  const currentJob = state.jobs[state.currentJobIndex];
  openQuickMessageModal(currentJob.recruiter);
};

window.openMessageModalCoordinator = function() {
  openQuickMessageModal(GLOBAL_CONTACTS.coordinator);
};

window.openMessageModalHelpDesk = function() {
  openQuickMessageModal(GLOBAL_CONTACTS.helpDesk);
};

function openQuickMessageModal(contact, defaultSubject = "") {
  elements.messageRecipient.textContent = `${contact.name.toUpperCase()} (${contact.role.toUpperCase()})`;
  if (defaultSubject) {
    document.getElementById("messageSubject").value = defaultSubject;
  }
  elements.quickMessageModal.classList.remove("hidden");
}

// --- ALL APPLICATIONS MODAL ---
function openAllAppsModal() {
  elements.allAppsList.innerHTML = "";

  state.jobs.forEach((job, index) => {
    const isCurrent = index === state.currentJobIndex;
    const card = document.createElement("div");
    card.className = `all-app-card ${isCurrent ? "current" : ""}`;

    let turnBadge = "";
    if (job.whoseTurn === "action") {
      turnBadge = `<span class="chip chip-action" style="font-size:10px;">ACTION NEEDED</span>`;
    } else if (job.whoseTurn === "waiting") {
      turnBadge = `<span class="chip chip-waiting" style="font-size:10px;">WAITING FOR EMPLOYER</span>`;
    } else {
      turnBadge = `<span class="chip chip-closed" style="font-size:10px;">CLOSED</span>`;
    }

    card.innerHTML = `
      <div class="all-app-info">
        <div class="all-app-title">${job.title.toUpperCase()}</div>
        <div class="all-app-meta">
          <span>${job.department.toUpperCase()}</span> / <span>APPLIED ${job.dateApplied.toUpperCase()}</span> / <span>STAGE: ${job.stages[job.currentStageIndex]?.title?.toUpperCase() || "CLOSED"}</span>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        ${turnBadge}
        <button class="btn-action-primary" style="padding:6px 14px; font-size:10px;">
          ${isCurrent ? "VIEWING" : "JUMP TO JOB"}
        </button>
      </div>
    `;

    card.addEventListener("click", () => {
      switchJob(index);
      closeAllModals();
    });

    elements.allAppsList.appendChild(card);
  });

  elements.allAppsModal.classList.remove("hidden");
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${message}</span>`;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    toast.style.transition = "all 0.18s ease-out";
    setTimeout(() => toast.remove(), 200);
  }, 3200);
}

// Start application
document.addEventListener("DOMContentLoaded", init);
