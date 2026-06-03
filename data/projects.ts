export type ProjectAction =
  | {
      label: "View Details";
      type: "detail";
    }
  | {
      label: string;
      type: "external";
      href: string;
    };

export type Project = {
  title: string;
  description: string;
  details: string;
  highlights: string[];
  tech: string[];
  icon: "bio" | "workflow" | "prediction";
  metric: string;
  actions: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: "Blood Cancer Protein Sequence AI Agent",
    description:
      "An AI-powered bioinformatics application that predicts whether blood data is cancerous or non-cancerous by analyzing protein sequence patterns.",
    details:
      "This project turns protein sequence patterns into a practical classification workflow. It combines BioPython preprocessing, K-mer feature extraction, and multiple ML models to compare performance before deploying the strongest Logistic Regression result as a live AI web application.",
    highlights: [
      "Protein sequence analysis",
      "BioPython-based preprocessing",
      "K-mer analysis",
      "Logistic Regression, SVM, Naive Bayes, and K-Means",
      "Achieved 75% accuracy with Logistic Regression",
      "Deployed live as an AI web application"
    ],
    tech: ["Python", "Machine Learning", "BioPython", "Scikit-learn", "Render", "AI Agent"],
    icon: "bio",
    metric: "75% accuracy",
    actions: [
      {
        label: "Live Demo",
        type: "external",
        href: "https://blood-cancer-protein-agent.onrender.com/"
      },
      {
        label: "GitHub",
        type: "external",
        href: "https://github.com/sai-sreeram-nanapu"
      },
      {
        label: "View Details",
        type: "detail"
      }
    ]
  },
  {
    title: "AI-Powered Job Application Tracker",
    description:
      "An agentic workflow system that integrates Gmail API to automatically extract and manage job application data.",
    details:
      "This application is designed as an agentic career-operations system. It connects Gmail API signals, Google OAuth 2.0, LLM-assisted parsing, and a MongoDB Atlas backend so users can automatically organize roles, companies, statuses, and application history from real email workflows.",
    highlights: [
      "Gmail API integration",
      "Google OAuth 2.0 authentication",
      "LLM-assisted parsing",
      "MongoDB Atlas backend",
      "Real-time job application tracking",
      "React and TypeScript frontend",
      "Automated extraction of role, company, and application status"
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Gmail API", "OAuth", "LLM Parsing"],
    icon: "workflow",
    metric: "Agentic workflow",
    actions: [
      {
        label: "View Details",
        type: "detail"
      },
      {
        label: "GitHub",
        type: "external",
        href: "https://github.com/sai-sreeram-nanapu"
      }
    ]
  },
  {
    title: "Machine Learning Burnout Risk Prediction Platform",
    description:
      "An end-to-end ML platform that predicts employee burnout risk using behavioral, communication, and survey data.",
    details:
      "This platform combines predictive modeling and production web architecture. It uses classical ML and deep learning approaches, secure authentication, RBAC, Redis caching, and API performance goals to support a scalable burnout-risk prediction workflow.",
    highlights: [
      "Random Forest, Logistic Regression, BERT, and LSTM models",
      "87.3% accuracy",
      "0.84 F1-score",
      "JWT authentication",
      "RBAC authorization",
      "Redis caching",
      "Supports 1000+ concurrent users",
      "API response times under 200 ms",
      "80%+ test coverage"
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Redis", "JWT", "BERT", "LSTM", "Machine Learning"],
    icon: "prediction",
    metric: "1000+ users",
    actions: [
      {
        label: "GitHub",
        type: "external",
        href: "https://github.com/sai-sreeram-nanapu"
      },
      {
        label: "View Details",
        type: "detail"
      }
    ]
  }
];
