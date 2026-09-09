export type BlogArticle = {
  title: string;
  category: string;
  summary: string;
  externalUrl: string;
  externalLabel: string;
};

export const articles: BlogArticle[] = [
  {
    title: "SAP BTP, Generative AI, and Digital Transformation",
    category: "SAP BTP + Generative AI",
    summary:
      "How SAP BTP and Generative AI can support enterprise innovation, automation, and digital transformation.",
    externalUrl:
      "https://www.linkedin.com/posts/sai-sreeram-nanapu-100aaa284_sapbtp-generativeai-digitaltransformation-activity-7393397402604326912-I_FP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEU3phAB-rSHYg9e4sffLI1I13fEU_RWVhU",
    externalLabel: "Read on LinkedIn"
  },
  {
    title: "From Prompting to Agentic AI Workflows with Claude",
    category: "Claude + Agentic AI",
    summary:
      "A visual knowledge map tracing the path from prompts and context through planning, tools, execution, verification, and iteration.",
    externalUrl: "https://lnkd.in/p/erq_DNpf",
    externalLabel: "Read on LinkedIn"
  },
  {
    title: "SAP BTP and SAPUI5 for Enterprise Applications",
    category: "SAP BTP + SAPUI5",
    summary:
      "A concise view of how SAPUI5 shapes the experience layer while SAP BTP powers development, integration, data, security, automation, and AI.",
    externalUrl: "https://lnkd.in/p/es2He9em",
    externalLabel: "Read on LinkedIn"
  }
];
