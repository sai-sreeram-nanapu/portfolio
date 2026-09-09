export type Project = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  icon: "sap" | "workflow" | "bio" | "prediction";
  metric: string;
  actions: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    title: "SAPUI5 Northwind Business Explorer",
    description:
      "A responsive, metadata-driven SAPUI5 application providing read-only access to all 26 datasets in the Northwind OData V2 service.",
    highlights: [
      "Reusable launchpad, list, and detail pages",
      "Search, filtering, sorting, pagination, and favourites",
      "Composite-key routing and relationship-based navigation",
      "SAP Horizon-inspired responsive interface and error states"
    ],
    tech: ["SAPUI5", "JavaScript", "XML Views", "OData V2", "UI5 Tooling"],
    icon: "sap",
    metric: "26 datasets",
    actions: [
      {
        label: "View repository",
        href: "https://github.com/sai-sreeram-nanapu/sapui5-northwind-explorer"
      }
    ]
  },
  {
    title: "AI-Powered Workflow & Job Application Tracker",
    description:
      "A full-stack application that securely processes job-related emails and converts them into structured application timelines.",
    highlights: [
      "Gmail API integration with OAuth 2.0",
      "LLM-assisted extraction of company, role, status, and timeline data",
      "React and TypeScript interface backed by Node.js and MongoDB Atlas"
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB Atlas", "Gmail API", "LLMs"],
    icon: "workflow",
    metric: "Workflow automation",
    actions: [
      {
        label: "View GitHub",
        href: "https://github.com/sai-sreeram-nanapu"
      }
    ]
  },
  {
    title: "Blood Cancer Classification via Protein Sequences",
    description:
      "A protein-sequence classification workflow using K-mer feature extraction and multiple machine-learning models.",
    highlights: [
      "BioPython preprocessing with NCBI sequence data",
      "Logistic regression, SVM, Naive Bayes, and K-means comparison",
      "Deployed as an accessible web application on Render"
    ],
    tech: ["Python", "BioPython", "scikit-learn", "NCBI Data", "Machine Learning"],
    icon: "bio",
    metric: "Bioinformatics ML",
    actions: [
      {
        label: "Live application",
        href: "https://blood-cancer-protein-agent.onrender.com/"
      },
      {
        label: "View GitHub",
        href: "https://github.com/sai-sreeram-nanapu"
      }
    ]
  },
  {
    title: "Machine Learning Burnout Risk Platform",
    description:
      "A full-stack prediction and analytics platform combining secure application architecture with ML and NLP workflows.",
    highlights: [
      "REST APIs with JWT authentication and role-based access control",
      "MongoDB persistence and Redis caching",
      "Random Forest, logistic regression, BERT, and LSTM workflows"
    ],
    tech: ["React", "Node.js", "Python", "MongoDB", "Redis", "JWT", "BERT", "LSTM"],
    icon: "prediction",
    metric: "Full-stack ML",
    actions: [
      {
        label: "View GitHub",
        href: "https://github.com/sai-sreeram-nanapu"
      }
    ]
  }
];
