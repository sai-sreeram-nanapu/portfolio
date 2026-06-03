export type AISystem = {
  title: string;
  description: string;
  icon: "workflow" | "rag" | "bio" | "cloud" | "automation" | "api" | "prediction" | "fullstack";
};

export const aiSystems: AISystem[] = [
  {
    title: "LLM-powered workflows",
    description: "Prompted systems that transform messy inputs into structured, useful action.",
    icon: "workflow"
  },
  {
    title: "Retrieval-Augmented Generation systems",
    description: "Knowledge-grounded AI experiences designed for reliable, contextual responses.",
    icon: "rag"
  },
  {
    title: "Bioinformatics ML models",
    description: "Sequence-focused pipelines for preprocessing, feature engineering, and prediction.",
    icon: "bio"
  },
  {
    title: "Cloud-native backend services",
    description: "API layers and deployment patterns built for scale, monitoring, and maintainability.",
    icon: "cloud"
  },
  {
    title: "Agentic automation pipelines",
    description: "Multi-step workflows that connect APIs, data, LLM reasoning, and user outcomes.",
    icon: "automation"
  },
  {
    title: "API-driven intelligent applications",
    description: "Product interfaces powered by robust integrations and clean backend contracts.",
    icon: "api"
  },
  {
    title: "Machine learning prediction platforms",
    description: "End-to-end ML applications with model serving, auth, caching, and performance goals.",
    icon: "prediction"
  },
  {
    title: "Full-stack AI web applications",
    description: "Recruiter-ready and user-ready software that combines AI models with polished UX.",
    icon: "fullstack"
  }
];
