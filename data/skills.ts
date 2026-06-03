export type SkillCategory = {
  category: string;
  icon: "brain" | "cloud" | "code" | "data" | "database";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "AI & Agentic Systems",
    icon: "brain",
    skills: [
      "Agentic AI",
      "Autonomous Workflows",
      "Large Language Models",
      "RAG",
      "Prompt Engineering",
      "Prompt Optimization",
      "OpenAI API / LLM Integration",
      "AI System Design",
      "AI Orchestration",
      "LLM-Assisted Parsing"
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS VPC",
      "AWS Lambda",
      "IAM",
      "CloudTrail",
      "Redshift",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Render",
      "Vercel"
    ]
  },
  {
    category: "Programming & Development",
    icon: "code",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "React",
      "Express.js",
      "Shell Scripting",
      "REST APIs",
      "Microservices",
      "OOP",
      "System Design"
    ]
  },
  {
    category: "Data Engineering & Systems",
    icon: "data",
    skills: [
      "Apache Spark",
      "Hadoop",
      "Distributed Systems",
      "ETL Pipelines",
      "High-Throughput Data Pipelines",
      "Stream Processing",
      "Data Modeling",
      "Real-Time Data Pipelines",
      "Feature Engineering"
    ]
  },
  {
    category: "Databases & Tools",
    icon: "database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "MongoDB Atlas",
      "Neo4j",
      "Redis",
      "Tableau",
      "Power BI",
      "Pandas",
      "NumPy",
      "Jupyter Notebook",
      "Scikit-learn",
      "BioPython"
    ]
  }
];
