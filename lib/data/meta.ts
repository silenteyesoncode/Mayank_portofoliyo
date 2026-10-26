export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frontend & Mobile",
    items: ["React Native", "React.js", "Redux", "Expo CLI", "HTML/CSS"],
  },
  {
    category: "Backend & APIs",
    items: [
      "Spring Boot",
      "REST APIs",
      "Hibernate/JPA",
      "Node.js",
      "Firebase Cloud Functions",
    ],
  },
  {
    category: "AI & APIs",
    items: [
      "OpenAI API",
      "MeaningCloud NLP",
      "100ms SDK (Real-time Video)",
      "PayU Payment Gateway",
      "Google APIs",
      "PubNub",
    ],
  },
  {
    category: "Infrastructure & DevOps",
    items: [
      "Firebase",
      "Firestore",
      "AWS (EC2, S3)",
      "GCP",
      "Docker",
      "Nginx / AWS ALB",
      "Git",
      "CI/CD basics",
      "Linux",
    ],
  },
  {
    category: "Algorithms & Systems",
    items: [
      "Geospatial algorithms (Haversine)",
      "Real-time systems",
      "State machines",
      "Payment state reconciliation",
    ],
  },
];

export const meta = {
  name: "Mayank Kumar",
  title: "Software Engineer — AI Applications & Full-Stack",
  email: "7silenteyes07@gmail.com",
  phone: "8512035213",
  github: "https://github.com/silenteyesoncode",
  linkedin: "https://linkedin.com/in/imonk",
  website: "https://silenteyesoncode.com",
  location: "Delhi, India",
  education: {
    institution: "JSS Academy of Technical Education",
    degree: "Bachelor of Technology — Information Technology",
    period: "Aug 2018 – Jun 2022",
    location: "Noida, India",
  },
  honors: [
    "Featured in Evergreens Times for Konect, recognizing contributions and impact in AI",
    "HackerRank Gold in Java and SQL",
    "Completed 10 Days of JavaScript — HackerRank",
  ],
  bio: `I'm a software engineer with professional experience building production applications — mobile e-commerce, real-time video, geospatial systems, and payment flows — across healthtech and ride-sharing startups.

My engineering foundation is full-stack: React Native mobile apps, Spring Boot APIs, Firebase backends, and the debugging and reliability work that keeps production systems stable. I've shipped to the App Store and Play Store, handled race conditions in payment flows, and built algorithms that reduced rider wait times by 18%.

I'm now applying that foundation to AI-powered products. I've built conversational mobile apps using the OpenAI API, a news classifier using NLP APIs, and I'm actively developing deeper AI application skills. My goal is to build products where AI meaningfully improves the user experience — not just as a feature, but as the core engine.`,
};
