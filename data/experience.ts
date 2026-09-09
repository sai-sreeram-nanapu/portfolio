export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  current?: boolean;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "VIZ Digital Marketing",
    role: "Associate Data Scientist",
    duration: "06/2026 - Present",
    location: "Remote, United States",
    current: true,
    highlights: [
      "Develop data-driven applications and technical solutions using Python, SQL, APIs, structured and unstructured data, and AI/ML workflows.",
      "Translate business requirements into implementable solutions and support testing, debugging, data validation, model evaluation, and iterative improvement."
    ]
  },
  {
    company: "InternPe",
    role: "Web Development Intern",
    duration: "08/2023 - 09/2023",
    location: "Remote, India",
    highlights: [
      "Developed a responsive e-commerce application with product browsing, reusable frontend components, navigation workflows, and cross-device compatibility."
    ]
  }
];
