export type EducationItem = {
  degree: string;
  university: string;
  location: string;
  duration: string;
  gpa?: string;
  award?: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology",
    university: "Northern Arizona University",
    location: "Flagstaff, AZ",
    duration: "08/2024 - 12/2025",
    gpa: "4.0 / 4.0",
    award: "With Distinction",
    coursework: [
      "Cloud Computing Foundations",
      "Databases",
      "Information Security",
      "Data Warehousing & Business Analytics",
      "Cybersecurity Policy & Ethics",
      "Applied Business Intelligence",
      "Networking & System Administration"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Presidency University",
    location: "Bangalore, India",
    duration: "2020 - 2024"
  }
];

export const sapLearning = [
  "Exploring SAP Business Technology Platform",
  "Getting Started with SAP Cloud Application Programming Model",
  "Developing UIs with SAPUI5",
  "Building Side-by-Side Fiori Applications with SAP BTP",
  "Setting up an ABAP Environment on SAP BTP",
  "ABAP Platform Fundamentals",
  "Basics of ABAP Programming on SAP BTP",
  "Managing Clean Core for SAP S/4HANA Cloud"
];

export const additionalLearning = [
  "Microsoft Azure AI Essentials Professional Certificate",
  "Anthropic Claude 101 / Claude Code",
  "IBM Building Smarter RAG Systems"
];
