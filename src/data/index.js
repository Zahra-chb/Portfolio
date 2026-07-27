export const personalInfo = {
  name: "Chibah Zahra",
  title: "Computer Science Master's Student",
  subtitle: "AI & Software Engineering Enthusiast",
  email: "zahra.chibah@email.com",
  github: "https://github.com/Zahra-chb",
  linkedin: "https://www.linkedin.com/in/zahra-chibah-2a4052383/",
};

export const skills = {
  languages: [
    { name: "Java", icon: "SiJava" },
    { name: "Python", icon: "SiPython" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "SQL", icon: "SiMysql" },
    { name: "C", icon: "SiC" },
    { name: "C++", icon: "SiCplusplus" },
    { name: "PHP", icon: "SiPhp" },
  ],
  frontend: [
    { name: "HTML", icon: "SiHtml5" },
    { name: "CSS", icon: "SiCss3" },
    { name: "React", icon: "SiReact" },
    { name: "Tailwind", icon: "SiTailwindcss" },
    { name: "React Router", icon: "SiReactrouter" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "Sequelize", icon: "SiSequelize" },
    { name: "Socket.IO", icon: "SiSocketdotio" },
    { name: "JWT", icon: "SiJsonwebtokens" },
  ],
  ai: [
    { name: "Flask", icon: "SiFlask" },
    { name: "Sentence Transformers", icon: "SiPython" },
    { name: "FAISS", icon: "SiPython" },
    { name: "RAG", icon: "SiPython" },
  ],
  devops: [
    { name: "Docker", icon: "SiDocker" },
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "SiVisualstudiocode" },
    { name: "Linux", icon: "SiLinux" },
  ],
  concepts: [
    "REST APIs",
    "OOP",
    "MERISE",
    "Database Design",
    "Real-time Systems",
    "CI/CD",
    "Microservices",
  ],
};

export const experience = [
  {
    company: "AGB Bank (Algerian Gulf Bank)",
    position: "Software Engineering Intern",
    period: "2026",
    description: "Developed a full-stack queue management system from scratch using React, Node.js, Socket.IO, and MySQL. Designed a real-time platform that digitizes the entire customer journey, reducing wait times by 40%. Built an AI-powered chatbot with Python, Sentence Transformers, and FAISS to automate customer support, achieving 85% of inquiries handled autonomously. Developed admin dashboards for monitoring counters, managing VIP appointments, and tracking real-time analytics. Set up Docker and Docker Compose for containerized deployment. Strengthened skills in full-stack development, real-time systems, database design, and AI integration while working in a professional banking environment with 62 agencies across Algeria.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MySQL",
      "Sequelize",
      "Python",
      "Flask",
      "Sentence Transformers",
      "FAISS",
      "RAG",
      "Docker",
      "JWT"
    ],
  },
  {
    company: "AI Instructor (Volunteer)",
    position: "AI Instructor",
    period: "Summer 2023",
    description: "Prepared and delivered engaging AI lessons for children and teenagers during a summer camp. Introduced fundamental AI concepts through interactive activities while promoting responsible and safe AI use.",
    technologies: ["Python", "Machine Learning", "Scratch"],
  },
];

export const projects = [
  {
    id: 1,
    title: "QONNEXA",
    description: "Smart Queue Management Platform for AGB Bank",
    features: [
      "Appointment booking",
      "Virtual queue",
      "Real-time tracking",
      "AI-powered Chatbot",
      "Customer ratings",
      "Admin dashboard",
      "VIP management",
      "Real-time analytics",
    ],
    tech: ["React", "Node.js", "Socket.IO", "MySQL", "Python", "Flask", "FAISS", "Docker"],
    github: "https://github.com/Zahra-chb/QONNEXEA-PFE",
    live: "#",
    image: "https://via.placeholder.com/600x400/6C63FF/FFFFFF?text=QONNEXA",
  },
  {
    id: 2,
    title: "ToyLand",
    description: "Toy management desktop application",
    features: [
      "Product catalog with search and filter",
      "Dynamic shopping cart (add/remove items)",
      "Order management and history",
      "Data persistence with file storage",
      "User-friendly GUI with Java Swing",
      "Object-oriented design (MVC pattern)",
    ],
    tech: ["Java", "Swing", "OOP", "File I/O"],
    github: "https://github.com/Zahra-chb/ToyLand.git",
    live: "#",
    image: "https://via.placeholder.com/600x400/FF6584/FFFFFF?text=ToyLand",
  },
  {
    id: 3,
    title: "Budget Allocation App",
    description: "React-based budget management web application",
    features: [
      "Real-time expense tracking",
      "Budget editing and allocation",
      "Interactive charts",
      "Data persistence with React Context API",
      "State management with useReducer",
    ],
    tech: ["React", "Context API", "useReducer", "JavaScript", "CSS"],
    github: "https://github.com/Zahra-chb/ejtos-react_budget_app.git",
    live: "#",
    image: "https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=Budget+App",
  },
  {
    id: 4,
    title: "Student Attendance System",
    description: "Academic attendance management system",
    features: [
      "Role-based access (Admin, Professor, Student)",
      "Attendance tracking",
      "Course management",
      "Reporting and analytics",
      "Secure authentication",
      "CSV import/export",
    ],
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Zahra-chb/student-attendance-system",
    live: "#",
    image: "https://via.placeholder.com/600x400/FF9800/FFFFFF?text=Attendance+System",
  },
];

export const education = [
  {
    institution: "University of Algiers 1",
    degree: "Master's in Intelligent Computer Systems Engineering",
    period: "2023 - Present",
    description: "Specializing in AI, Machine Learning, and Intelligent Systems. Working on cutting-edge research in computer vision and natural language processing.",
  },
  {
    institution: "University of Algiers 1",
    degree: "Bachelor's Degree in Computer Science",
    period: "2019 - 2023",
    description: "Comprehensive study of computer science fundamentals including algorithms, data structures, databases, and software engineering principles.",
  },
];

export const certifications = [
  {
    name: "GDG Algiers Integration Program (GIP) 2025",
    issuer: "GDG Algiers (Google Developer Group)",
    year: "2025",
    link: "#",
  },
  {
    name: "GitHub Workshop",
    issuer: "Octobit Club",
    year: "2026",
    link: "#",
  },
];
