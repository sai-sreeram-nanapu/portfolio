export type EducationItem = {
  degree: string;
  university: string;
  location: string;
  duration: string;
  gpa?: string;
  courseworkLabel?: string;
  coursework?: string[];
};

export const education: EducationItem[] = [
  {
    degree: "Master of Science in Information Technology",
    university: "Northern Arizona University",
    location: "Flagstaff, AZ",
    duration: "08/2024 - 12/2025",
    gpa: "4.0 / 4.0",
    courseworkLabel: "Coursework",
    coursework: [
      "Information Security Concepts & Administration",
      "Databases",
      "Web Technology",
      "Applied Business Intelligence",
      "Networking and System Administration",
      "Blockchain",
      "Cybersecurity Policy & Ethics",
      "Data Warehousing & Business Analytics",
      "Cloud Computing Foundations",
      "Design Studio",
      "Contemporary Developments in STEM"
    ]
  },
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    university: "Presidency University",
    location: "Bangalore, India",
    duration: "2020 - 2024",
    courseworkLabel: "Relevant Coursework",
    coursework: [
      "Data Structures",
      "Design and Analysis of Algorithms",
      "Programming in Java",
      "Programming in Python and its Applications",
      "Operating Systems",
      "Database Management System",
      "Cloud Computing",
      "Cryptography and Network Security",
      "Artificial Intelligence and Networks",
      "Machine Learning",
      "Big Data Technologies",
      "Internet of Things",
      "Object Oriented Analysis and Design",
      "Web Technologies",
      "Software Engineering",
      "Computer Organization and Architecture",
      "Data Communications and Computer Networks",
      "Mobile Application Development",
      "Digital Image Processing",
      "Privacy and Security in Online Social Media"
    ]
  }
];
