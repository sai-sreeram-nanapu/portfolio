export type BlogArticle = {
  title: string;
  category: string;
  summary: string;
  preview?: string;
  externalUrl?: string;
  externalLabel?: string;
};

export const articles: BlogArticle[] = [
  {
    title: "How Agentic AI Can Automate Job Tracking",
    category: "Agentic AI",
    summary:
      "A practical look at how autonomous workflows, Gmail API signals, and LLM-assisted parsing can turn career operations into an intelligent system.",
    preview:
      "The article would break down how email events become structured data, how an LLM can classify role and company details, and how an agentic workflow can keep a job-search dashboard current without manual spreadsheet maintenance."
  },
  {
    title: "Using Protein Sequences for Blood Cancer Prediction",
    category: "AI + Healthcare",
    summary:
      "How sequence preprocessing, K-mer features, and classical ML models can support early exploration in bioinformatics classification.",
    preview:
      "This piece would explore protein sequence preprocessing, K-mer feature design, model comparison, validation tradeoffs, and how a bioinformatics prototype can become a usable AI web application."
  },
  {
    title: "How Full-Stack AI Applications Are Changing Automation",
    category: "Full-Stack AI",
    summary:
      "Why the next generation of software combines product-grade interfaces, backend APIs, model orchestration, and reliable automation.",
    preview:
      "The preview focuses on why AI automation needs more than a prompt: strong UX, reliable APIs, persistent data, orchestration, authentication, and deployment practices that make intelligent workflows dependable."
  },
  {
    title: "Building Cloud-Native AI Applications",
    category: "Cloud AI",
    summary:
      "Notes on deploying AI systems with scalable backends, managed data layers, CI/CD, and observability-minded architecture.",
    preview:
      "This article would outline practical cloud-native patterns for AI systems, including API boundaries, caching, deployment targets, scaling assumptions, and the operational discipline needed once AI features reach users."
  },
  {
    title: "SAP BTP, Generative AI, and Digital Transformation",
    category: "SAP BTP + Generative AI",
    summary:
      "A professional article discussing how SAP BTP and Generative AI can support enterprise innovation, automation, and digital transformation.",
    externalUrl:
      "https://www.linkedin.com/posts/sai-sreeram-nanapu-100aaa284_sapbtp-generativeai-digitaltransformation-activity-7393397402604326912-I_FP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU3phAB-rSHYg9e4sffLI1I13fEU_RWVhU",
    externalLabel: "Read on LinkedIn"
  }
];
