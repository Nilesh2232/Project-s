export const profile = {
  name: 'Nilesh Gupta',
  title: 'Python Backend Engineer',
  summary:
    'I build scalable REST APIs, secure backend systems, and relational databases.',
  about:
    'Python Backend Engineer with hands-on experience building production-grade healthcare applications using FastAPI, SQLAlchemy, PostgreSQL, JWT authentication, and RBAC. Focused on scalable REST APIs, database design, and maintainable backend services.',
  location: 'Wadala, Mumbai',
  phone: '8097836069',
  email: 'nileshgupta2232@gmail.com',
  github: 'https://github.com/Nilesh2232',
  linkedin: 'https://www.linkedin.com/in/ng8097836069',
  photo: '/images/nilesh-gupta-dark.png',
}

export const skills = {
  Languages: ['Python', 'SQL', 'JavaScript'],
  Backend: ['FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic', 'Uvicorn'],
  Database: ['PostgreSQL', 'SQLite', 'Oracle SQL'],
  Authentication: ['JWT', 'OAuth2', 'RBAC'],
  Tools: ['Git', 'GitHub', 'Alembic', 'Postman'],
  Concepts: [
    'OOP',
    'CRUD',
    'API Design',
    'Database Design',
    'Exception Handling',
    'Logging',
  ],
}

export const experience = {
  role: 'Python Software Engineer',
  type: 'Internship',
  company: 'Saffo Solution Technology',
  location: 'Ghansoli, Navi Mumbai',
  period: '01/2026 — 06/2026',
  metrics: [
    { value: '40+', label: 'REST APIs' },
    { value: '50+', label: 'RBAC Permissions' },
    { value: '20+', label: 'Database Tables' },
    { value: '15+', label: 'Alembic Migrations' },
  ],
  tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT', 'RBAC'],
  highlights: [
    'Delivered and maintained 40+ production-ready RESTful APIs for healthcare workflows.',
    'Implemented RBAC with 50+ permissions and JWT-based authentication.',
    'Configured and optimized 20+ relational database tables and business workflows.',
    'Managed 15+ Alembic schema migrations with Git-based version control.',
  ],
}

export const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Guru Nanak College of Arts, Science and Commerce',
    location: 'GTB Nagar, Mumbai',
    period: '01/2022 — 01/2025',
    detail: 'CGPA: 9.43/10',
  },
  {
    degree: 'HSC — Uttar Pradesh Board',
    institution: 'Subhash Rashtriya Inter College',
    location: 'Uttar Pradesh',
    period: '01/2020 — 01/2022',
    detail: '75.04%',
  },
  {
    degree: 'SSC — Uttar Pradesh Board',
    institution: 'Tirthraj Inter College',
    location: 'Uttar Pradesh',
    period: '01/2018 — 01/2020',
    detail: '79%',
  },
]

export const awards = [
  '2nd Place — Aura Hackathon (college)',
  'Silver Medal — Intercollegiate Volleyball Tournament',
]

export const certificates = [
  {
    id: 'pyspiders-fullstack',
    title: 'Python Full-Stack with Data Analysis',
    issuer: 'PySpiders Python Training Institute',
    certificateNo: 'PY-26-47',
    date: '12 Sep 2026',
    duration: 'Aug 2025 — Apr 2026',
    image: '/images/certificate-pyspiders.jpg',
    summary:
      'Completed a professional full-stack Python program covering backend development, frontend fundamentals, databases, and data analysis tools used in real projects.',
    topics: [
      {
        group: 'Core & Backend',
        items: ['Python', 'Django'],
      },
      {
        group: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        group: 'Python Libraries',
        items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      },
      {
        group: 'SQL',
        items: ['Oracle SQL'],
      },
      {
        group: 'Data Analysis',
        items: ['Excel & Advance Excel', 'Power BI'],
      },
    ],
  },
]

export const projects = [
  {
    id: 'hospital-management-system',
    order: '01',
    featured: true,
    title: 'Hospital Management System',
    subtitle: 'Production-grade healthcare backend',
    shortDescription:
      'Scalable hospital backend supporting Doctor, Nurse, Receptionist, and Laboratory workflows.',
    stackLine: 'FastAPI + PostgreSQL + SQLAlchemy',
    technologies: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Alembic',
      'JWT',
      'RBAC',
      'REST API',
    ],
    metrics: [
      { value: '40+', label: 'REST APIs' },
      { value: '20+', label: 'DB Tables' },
      { value: '50+', label: 'Permissions' },
      { value: '15+', label: 'Migrations' },
    ],
    cover: '/images/project-hms.png',
    github: null,
    tabs: [
      'Overview',
      'Architecture',
      'API Design',
      'Database',
      'Authentication',
      'RBAC',
      'Challenges',
      'Results',
    ],
    overview: {
      summary:
        'Architected a modular FastAPI backend for a Hospital Management System covering appointments, prescriptions, laboratory management, patient queues, authentication, and nursing workflows.',
      points: [
        'Role-separated modules for Doctor, Nurse, Receptionist, and Laboratory staff.',
        'JWT authentication with fine-grained Role-Based Access Control.',
        'Normalized PostgreSQL schema with Alembic-managed migrations.',
        'Designed for production healthcare workflows, not just CRUD demos.',
      ],
    },
    architecture: {
      layers: [
        'Frontend clients call REST endpoints',
        'FastAPI API layer handles routing, validation, and responses',
        'Auth/RBAC, Services, and Domain Modules collaborate behind the API',
        'SQLAlchemy ORM maps domain models to PostgreSQL',
      ],
      diagram: [
        'Frontend',
        'FastAPI API',
        'Auth/RBAC · Services · Modules',
        'SQLAlchemy',
        'PostgreSQL',
      ],
    },
    apiDesign: [
      { method: 'GET', path: '/patients', note: 'List / search patients' },
      { method: 'POST', path: '/patients', note: 'Register patient' },
      { method: 'GET', path: '/appointments', note: 'Fetch appointments' },
      { method: 'POST', path: '/appointments', note: 'Book appointment' },
      { method: 'GET', path: '/lab-tests', note: 'List lab tests' },
      { method: 'POST', path: '/lab-tests', note: 'Create lab order' },
      { method: 'GET', path: '/prescriptions', note: 'Doctor prescriptions' },
      { method: 'POST', path: '/auth/login', note: 'Issue JWT access token' },
    ],
    database: {
      entities: [
        {
          name: 'Users',
          children: ['Doctors', 'Nurses', 'Receptionists', 'Lab Technicians'],
        },
        {
          name: 'Patients',
          children: [
            'Appointments',
            'Prescriptions',
            'Lab Tests',
            'Nurse Workflows',
          ],
        },
      ],
      notes: [
        '20+ relational tables normalized for healthcare workflows.',
        'Schema versioned with Alembic migrations.',
        'Supports pagination and search across key collections.',
      ],
    },
    authentication: [
      'Login with credentials',
      'JWT Access Token issued',
      'Request authenticated via Bearer token',
      'Role resolved from token claims',
      'Permission checked against RBAC matrix',
      'API handler executes if authorized',
    ],
    rbac: {
      summary:
        'Permission-based authorization with 50+ granular permissions across Doctor, Nurse, Receptionist, and Laboratory modules.',
      roles: ['Doctor', 'Nurse', 'Receptionist', 'Laboratory'],
      examples: [
        'Doctors manage prescriptions and clinical notes',
        'Nurses handle patient queues and nursing workflows',
        'Receptionists manage appointments and patient intake',
        'Laboratory staff manage lab tests and results',
      ],
    },
    challenges: [
      'Modeling multi-role healthcare workflows without leaking permissions across modules.',
      'Keeping 20+ tables consistent through iterative schema changes with Alembic.',
      'Designing APIs that stay maintainable as appointment, lab, and nursing flows grow.',
      'Balancing security (JWT + RBAC) with practical day-to-day hospital operations.',
    ],
    results: [
      '40+ REST APIs covering core hospital operations',
      '50+ RBAC permissions for secure module access',
      '20+ PostgreSQL tables with migration history',
      '15+ Alembic migrations under Git version control',
      'JWT authentication and role-based authorization end-to-end',
    ],
  },
  {
    id: 'face-recognition-attendance',
    order: '02',
    featured: false,
    title: 'Face Recognition Attendance System',
    subtitle: 'Computer vision attendance automation',
    shortDescription:
      'Attendance system with 95%+ face recognition accuracy and automated CSV reporting.',
    stackLine: 'Python + OpenCV + SQLite',
    technologies: ['Python', 'OpenCV', 'SQLite'],
    metrics: [
      { value: '95%+', label: 'Accuracy' },
      { value: '500+', label: 'Records' },
      { value: '80%', label: 'Less Manual Work' },
    ],
    cover: '/images/project-face.png',
    github: null,
    tabs: ['Overview', 'Architecture', 'Results'],
    overview: {
      summary:
        'Built an attendance management system using Python and OpenCV that recognizes faces, stores attendance in SQLite, and exports CSV reports.',
      points: [
        'Achieved 95%+ face recognition accuracy.',
        'Managed 500+ attendance records in SQLite.',
        'Automated CSV report generation, cutting manual processing time by ~80%.',
      ],
    },
    architecture: {
      layers: [
        'Camera / image capture',
        'OpenCV face detection & recognition',
        'Attendance recording service',
        'SQLite persistence + CSV export',
      ],
      diagram: [
        'Camera Input',
        'OpenCV Recognition',
        'Attendance Service',
        'SQLite',
        'CSV Reports',
      ],
    },
    results: [
      '95%+ recognition accuracy',
      '500+ attendance records managed',
      '80% reduction in manual attendance processing time',
    ],
  },
  {
    id: 'loan-eligibility-system',
    order: '03',
    featured: false,
    title: 'Loan Eligibility & Approval System',
    subtitle: 'Flask web application with eligibility validation',
    shortDescription:
      'Loan approval workflow with automated eligibility checks and application tracking.',
    stackLine: 'Flask + SQLite + HTML/CSS',
    technologies: ['Flask', 'SQLite', 'HTML', 'CSS'],
    metrics: [
      { value: 'Auto', label: 'Eligibility Checks' },
      { value: 'Track', label: 'Applications' },
      { value: 'UI', label: 'Flask Templates' },
    ],
    cover: '/images/project-loan.png',
    github: null,
    tabs: ['Overview', 'Architecture', 'Results'],
    overview: {
      summary:
        'Devised a Loan Approval System using Flask and SQLite with automated eligibility validation, application tracking, and a responsive HTML/CSS interface.',
      points: [
        'Automated eligibility validation before approval decisions.',
        'Application tracking for loan workflow visibility.',
        'Server-rendered UI with Flask templates.',
      ],
    },
    architecture: {
      layers: [
        'Browser UI (HTML/CSS templates)',
        'Flask routes & form handling',
        'Eligibility validation logic',
        'SQLite application store',
      ],
      diagram: [
        'Browser',
        'Flask App',
        'Eligibility Rules',
        'SQLite',
      ],
    },
    results: [
      'End-to-end loan application intake and tracking',
      'Rule-based eligibility validation',
      'Lightweight Flask + SQLite deployment model',
    ],
  },
]
