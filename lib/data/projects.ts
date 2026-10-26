export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  aiComponents?: string[];
  architecture?: string;
  status: "complete" | "working" | "prototype" | "experimental";
  statusLabel: string;
  githubUrl: string;
  demoUrl?: string;
  category: "ai" | "fullstack" | "mobile" | "backend" | "frontend" | "game";
  featured: boolean;
  highlights: string[];
}

export const aiProjects: Project[] = [
  {
    id: "openmind",
    name: "OpenMind AI",
    description:
      "A conversational mobile application powered by the OpenAI API, enabling users to interact with an AI chat assistant and journal their conversations — built under The Unleashed Club organization.",
    problem:
      "Building a mobile-first AI chat experience that feels natural, persists conversation history, and works reliably across iOS and Android.",
    solution:
      "Integrated the OpenAI API into a React Native / Expo application with Firebase as the real-time backend. Users can have multi-turn conversations with the AI assistant, and conversations are stored in Firestore for history and journaling.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "OpenAI API",
      "Firebase",
      "Firestore",
      "RapidAPI",
    ],
    aiComponents: [
      "OpenAI API — LLM-powered conversational responses",
      "Multi-turn conversation context management",
      "Conversation history persistence via Firestore",
    ],
    architecture:
      "React Native Expo frontend → OpenAI API (chat completions) → Firebase Firestore for conversation storage and history",
    status: "working",
    statusLabel: "Working Implementation",
    githubUrl: "https://github.com/The-Unleashed-Club/openMind",
    category: "ai",
    featured: true,
    highlights: [
      "OpenAI API integration for natural language conversation",
      "Multi-turn chat with conversation history journaling",
      "Real-time Firebase Firestore backend",
      "Cross-platform: iOS and Android via Expo",
    ],
  },
  {
    id: "news-classifier",
    name: "AI-Powered News Article Classifier",
    description:
      "A web application that accepts a news article URL, scrapes its content, predicts a category using MeaningCloud's NLP API, and stores predictions and history for review.",
    problem:
      "Manually categorizing news articles is time-consuming. This tool automates topic classification — technology, politics, sports, business, etc. — and keeps a searchable history of past predictions.",
    solution:
      "Built a Node.js + React.js full-stack application. The backend scrapes article content from a given URL, sends it to the MeaningCloud Text Classification API, receives a predicted category, and stores the request and result in Firebase Firestore for history display.",
    technologies: [
      "Node.js",
      "React.js",
      "Firebase",
      "Firestore",
      "MeaningCloud API",
      "JavaScript",
    ],
    aiComponents: [
      "MeaningCloud Text Classification API — NLP-based topic categorization",
      "Article content scraping and pre-processing",
      "Persistent prediction history via Firestore",
    ],
    architecture:
      "React.js frontend → Node.js backend → URL scraper → MeaningCloud NLP API → category prediction → Firestore (history storage)",
    status: "prototype",
    statusLabel: "Functional Prototype",
    githubUrl:
      "https://github.com/silenteyesoncode/AI-Powered-News-Article-Classifier-with-History",
    category: "ai",
    featured: true,
    highlights: [
      "MeaningCloud NLP API for article topic classification",
      "URL-based article scraping and content extraction",
      "Firebase Firestore for prediction history persistence",
      "Full-stack Node.js + React.js architecture",
    ],
  },
  {
    id: "picphrase",
    name: "PicPhrase",
    description:
      "A React Native mobile application for AI-powered conversations, leveraging the OpenAI API. An earlier experimental iteration in the OpenAI-powered mobile chat direction.",
    problem:
      "Exploring OpenAI API integration patterns in a React Native mobile context.",
    solution:
      "A React Native / Expo application integrating the OpenAI API for conversational AI on mobile — an earlier prototype that informed the more complete OpenMind implementation.",
    technologies: ["React Native", "Expo", "OpenAI API", "JavaScript"],
    aiComponents: [
      "OpenAI API — conversational AI responses",
    ],
    status: "prototype",
    statusLabel: "Experimental Prototype",
    githubUrl: "https://github.com/silenteyesoncode/PicPhrase",
    category: "ai",
    featured: false,
    highlights: [
      "OpenAI API integration on mobile",
      "React Native / Expo cross-platform",
      "Early exploration of LLM-powered mobile UX",
    ],
  },
];

export const otherProjects: Project[] = [
  {
    id: "contango",
    name: "Contango Board Game",
    description:
      "A cross-platform multiplayer educational board game built to teach financial concepts — players manage assets, make investments, and track portfolio performance in real time. Published on the App Store and Play Store.",
    problem:
      "Making financial literacy engaging through interactive gameplay — players learn to manage assets and transactions in a competitive multiplayer environment.",
    solution:
      "Built a React Native / Expo multiplayer game with Firebase Realtime Database for live game-state synchronization across all players, and Firebase Cloud Functions for game logic and analytics.",
    technologies: [
      "React Native",
      "Expo CLI",
      "Firebase",
      "Firestore",
      "Firebase Realtime Database",
      "Firebase Cloud Functions",
    ],
    status: "complete",
    statusLabel: "Published — App Store & Play Store",
    githubUrl: "https://github.com/ContangoBoard",
    category: "game",
    featured: true,
    highlights: [
      "Published on App Store and Google Play Store",
      "Real-time multiplayer via Firebase Realtime Database",
      "Game analytics and progress tracking",
      "Educational financial simulation mechanics",
    ],
  },
  {
    id: "speech-text-reader",
    name: "Speech Text Reader",
    description:
      "An accessibility-first web application built for non-verbal individuals — features pre-made phrase buttons and custom text-to-speech using the browser Web Speech API.",
    problem:
      "Non-verbal individuals need a fast, simple way to communicate using synthesized speech from a mobile browser or desktop.",
    solution:
      "A lightweight static web app using the browser's native SpeechSynthesis API. Users can tap pre-loaded phrase buttons or type custom text for immediate voice output — no server required.",
    technologies: ["JavaScript", "HTML", "CSS", "Web Speech API"],
    status: "complete",
    statusLabel: "Complete",
    githubUrl: "https://github.com/silenteyesoncode/speech-text-reader",
    category: "frontend",
    featured: false,
    highlights: [
      "Accessibility-first design for non-verbal users",
      "Web Speech API (SpeechSynthesis) — no backend required",
      "Pre-made phrase library + custom text input",
      "Works in-browser, no installation",
    ],
  },
  {
    id: "github-user-finder",
    name: "GitHub User Finder",
    description:
      "A web utility to look up any GitHub user and display their profile card — repos, followers, following, and bio — using the GitHub REST API.",
    problem: "Quickly surfacing public GitHub profile data without navigating GitHub's interface.",
    solution: "A JavaScript frontend app that calls the GitHub REST API and renders a profile card with key statistics.",
    technologies: ["JavaScript", "HTML", "CSS", "GitHub REST API"],
    status: "complete",
    statusLabel: "Complete",
    githubUrl: "https://github.com/silenteyesoncode/Github_User_finder",
    category: "frontend",
    featured: false,
    highlights: [
      "GitHub REST API integration",
      "User profile card with repos, followers, bio",
      "Lightweight frontend, no build step required",
    ],
  },
  {
    id: "native-chat",
    name: "Native Chat",
    description:
      "A real-time chat application built with React Native — an exploration of real-time messaging patterns on mobile.",
    problem: "Exploring real-time mobile messaging architecture with React Native.",
    solution: "A React Native chat app exploring real-time message delivery and cross-platform mobile UX patterns.",
    technologies: ["React Native", "JavaScript", "Firebase"],
    status: "prototype",
    statusLabel: "Prototype",
    githubUrl: "https://github.com/silenteyesoncode/Native-chat",
    category: "mobile",
    featured: false,
    highlights: [
      "React Native real-time chat",
      "Cross-platform mobile messaging",
    ],
  },
];

export const featuredAiProjects = aiProjects.filter((p) => p.featured);
export const featuredOtherProjects = otherProjects.filter((p) => p.featured);
