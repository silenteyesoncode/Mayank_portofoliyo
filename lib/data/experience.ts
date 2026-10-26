export interface Experience {
  id: string;
  company: string;
  companyTag?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  impact?: string[];
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "clinikally",
    company: "Clinikally Digital Health Pvt Ltd",
    companyTag: "Y Combinator",
    role: "Software Development Engineer",
    period: "Feb 2025 – Sep 2025",
    location: "Delhi, India",
    summary:
      "Built the patient-facing mobile application for a YC-backed digital health startup — a React Native e-commerce and telehealth platform covering product browsing, prescription checkout, real-time video consultations, and appointment scheduling.",
    highlights: [
      "Engineered a scalable e-commerce mobile application in React Native for digital healthcare, implementing product browsing, cart state management, and secure checkout flows.",
      "Integrated 100ms real-time communication SDKs to enable low-latency doctor-patient video consultations, managing session lifecycle, reconnection handling, and call state for reliability under poor network conditions.",
      "Integrated PayU payment gateway, engineering client-side handling for success, failure, cancellation, and ambiguous-callback states, plus a retry flow for failed transactions that relied on server-confirmed payment status — not SDK callbacks alone — to prevent duplicate orders and false-positive confirmations.",
      "Architected the end-to-end appointment booking flow — doctor/slot selection, real-time availability, and optimistic UI updates — with client-side state management for pending → confirmed → failed transitions that handled race conditions and slot-conflict errors from the backend.",
      "Partnered with backend engineers to define API contracts for the scheduling/booking service, standardizing state transitions, error codes, and payload schemas across 5+ booking APIs, reducing integration issues and improving release reliability.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "100ms SDK",
      "PayU",
      "REST APIs",
      "Redux",
      "Firebase",
    ],
    impact: [
      "Delivered end-to-end telehealth e-commerce experience from product discovery to video consultation",
      "Standardized API contracts across 5+ booking endpoints, reducing integration friction",
      "Built resilient payment flows preventing duplicate orders on ambiguous payment states",
    ],
  },
  {
    id: "meradoc",
    company: "Meradoc Healthtech Pvt Ltd",
    role: "SDE Lead – App Developer",
    period: "May 2024 – Feb 2025",
    location: "Delhi, India",
    summary:
      "Led mobile application development at a healthtech startup, focused on reliability engineering, custom mapping solutions, and production stability for a doctor-patient connectivity platform.",
    highlights: [
      "Developed custom mapping solutions, improving navigation accuracy by 25%.",
      "Integrated Firebase Crashlytics, achieving 100% crash-free sessions and improving user experience.",
      "Identified a slow API response during development, traced it to an inefficient database query, and collaborated with the backend team to add an appropriate index, validating the fix and improving query performance.",
      "Collaborated with the backend/infra team on request routing and health checks through the load balancer (Nginx/AWS ALB), helping verify traffic distribution and debug connectivity issues during deployments.",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Firebase Crashlytics",
      "Custom Maps",
      "Nginx",
      "AWS ALB",
      "REST APIs",
    ],
    impact: [
      "25% improvement in navigation accuracy via custom mapping solutions",
      "100% crash-free sessions achieved with Firebase Crashlytics integration",
      "Improved query performance by collaborating on database index optimization",
    ],
  },
  {
    id: "asteride",
    company: "Asteride Technologies",
    role: "Software Development Engineer",
    period: "May 2023 – Mar 2024",
    location: "Delhi, India",
    summary:
      "Built and maintained production mobile applications and backend services for a ride-sharing platform serving 2,000+ daily active users — including a geospatial ride-matching engine and real-time location services.",
    highlights: [
      "Resolved 120+ bugs in live production applications and deployed React Native builds to the App Store and Play Store, improving stability for an app serving 2,000+ daily active users.",
      "Tackled the challenge of inefficient city-wide ride queries by designing a geospatial ride-matching engine in Spring Boot that scoped searches to a dynamic radius (e.g., Delhi → NCR), surfacing an average of 20 relevant ride listings per query instead of unfiltered city-wide results.",
      "Solved inconsistent ride ordering by implementing a Haversine-based nearest-ride sorting algorithm, improving match relevance for 2,000+ daily active users and reducing average rider wait time by 18% (~2.5 minutes).",
      "Built RESTful APIs for nearest-group lookup, supporting real-time matching across 2,000+ DAU with average API latency under 150ms.",
    ],
    technologies: [
      "React Native",
      "Spring Boot",
      "Java",
      "REST APIs",
      "Google APIs",
      "PubNub",
      "Firebase Crashlytics",
      "Haversine Algorithm",
    ],
    impact: [
      "120+ production bugs resolved, improving stability for 2,000+ DAU",
      "18% reduction in average rider wait time (~2.5 minutes) via Haversine-based sorting",
      "API latency under 150ms for real-time nearest-ride lookups",
    ],
  },
  {
    id: "aeris",
    company: "Aeris Communication",
    role: "React Developer",
    period: "May 2022 – Jul 2022",
    location: "Noida, India",
    summary:
      "Internship — built a React.js web application for IoT SIM management serving 1,000+ clients.",
    highlights: [
      "Developed a React.js web application serving 1,000+ clients, integrating microservices for IoT SIM management and account handling.",
      "Designed and implemented a dashboard using React.js, Docker, Redis, and TypeScript, enabling efficient analysis of data stored on Google Cloud Platform.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Docker",
      "Redis",
      "Google Cloud Platform",
      "Microservices",
    ],
    impact: [
      "Dashboard serving 1,000+ clients for IoT SIM management",
    ],
  },
  {
    id: "wildwolf",
    company: "WildWolf.io",
    role: "Software Development Engineer",
    period: "Sep 2020 – Aug 2021",
    location: "Squamish, BC, Canada (Remote)",
    summary:
      "Built a cross-platform educational application with React Native and Expo, and a scalable backend using Firebase Cloud Functions.",
    highlights: [
      "Built a cross-platform educational application using React Native and Expo CLI, reducing BaaS costs by 33%.",
      "Developed a scalable backend using JavaScript and Firebase Cloud Functions, reducing infrastructure costs by 42%.",
    ],
    technologies: [
      "React Native",
      "Expo CLI",
      "Firebase",
      "Firebase Cloud Functions",
      "JavaScript",
    ],
    impact: [
      "33% reduction in BaaS costs",
      "42% reduction in infrastructure costs",
    ],
  },
];

export const featuredExperiences = experiences.slice(0, 3);
