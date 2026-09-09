export type SkillCategory = {
  category: string;
  index: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "SAP Technologies",
    index: "01",
    skills: [
      "SAP BTP",
      "SAPUI5",
      "Fiori",
      "CAP with Node.js",
      "Cloud Foundry",
      "OData V2",
      "XML Views",
      "UI5 Tooling",
      "ABAP Cloud fundamentals",
      "SAP HANA Cloud fundamentals",
      "Clean core",
      "Side-by-side extensibility"
    ]
  },
  {
    category: "Programming & Web",
    index: "02",
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Angular",
      "Python",
      "HTML",
      "CSS",
      "REST APIs",
      "OAuth 2.0"
    ]
  },
  {
    category: "Cloud, DevOps & Data",
    index: "03",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "GitHub",
      "Postman",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis"
    ]
  },
  {
    category: "AI & Machine Learning",
    index: "04",
    skills: [
      "Generative AI",
      "LLMs",
      "RAG",
      "AI agents",
      "Prompt engineering",
      "scikit-learn",
      "BioPython",
      "BERT",
      "LSTM"
    ]
  }
];
