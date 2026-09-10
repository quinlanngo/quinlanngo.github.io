const projects = [
  {
    title: "Secure Bank Software",
    subtitle: "Network Security Project",
    description: "Co-developed a C-based banking application on Linux with custom hybrid encryption to defend against MITM and Replay attacks.",
    bullets: [
      "100% defense against attackers during the live attacking phase",
      "Deployed via Docker containers within a Linux VM for isolated, replicable testing",
    ],
    tags: ["C", "Linux", "Docker", "Network Security"],
    link: "", // GitHub link here
  },
  {
    title: "3D Shader",
    subtitle: "Computer Graphics Project",
    description: "A recursive Whitted-style ray tracer in C++11 simulating physically accurate light transport.",
    bullets: [
      "Reflection, refraction (Snell's Law), and Fresnel effects",
      "High-performance intersection algorithms for spheres, OBBs, cylinders, and triangle meshes",
    ],
    tags: ["C++", "Computer Graphics", "Ray Tracing"],
    link: "",
  },
  {
    title: "ConductVR",
    subtitle: "XR Project",
    description: "A real-time audio system for the Quest Pro that syncs orchestral playback to conducting gestures.",
    bullets: [
      "Time-stretching algorithms adjust tempo without altering pitch",
      "Immersive 3D soundscape in Unity with spatialized audio and environmental reverb",
    ],
    tags: ["Unity", "C#", "XR", "Audio"],
    link: "",
  },
  {
    title: "Emotion Detection System",
    subtitle: "Deep Learning Project",
    description: "A high-performance emotion classification pipeline using RoBERTa, built with a team of five.",
    bullets: [
      "Pairwise Binary Cross-Encoder strategy to capture deep semantic relationships",
      "Peak F1 score of 0.835 — 18% above the BRIGHTER dataset baseline",
    ],
    tags: ["Python", "Deep Learning", "NLP"],
    link: "",
  },
  {
    title: "Higher or Lower",
    subtitle: "Android App",
    description: "A full-stack Android game built in Kotlin with a dynamic search-volume-based gameplay loop.",
    bullets: [
      "Firebase Cloud Storage powers a real-time global leaderboard",
      "High availability with seamless data sync",
    ],
    tags: ["Kotlin", "Android", "Firebase"],
    link: "",
  },
  {
    title: "Elements Unleashed",
    subtitle: "Unity 3D Game",
    description: "A physics-based elemental system enabling dynamic interactions between elements and environmental objects.",
    bullets: [
      "3 distinct elements with unique interaction rules",
      "Built with a team of 4 using GitHub for version control",
    ],
    tags: ["Unity", "C#", "Game Dev"],
    link: "",
  },
  {
    title: "Debt and Taxes",
    subtitle: "JS Game Jam",
    description: "A 2D GUI-based game built in one week with a small team.",
    bullets: [
      "Virtual desktop with working simulated apps",
      "Balances money generation against hacking threats via multiple interacting scripts",
    ],
    tags: ["JavaScript", "Game Jam"],
    link: "",
  },
];

export default projects;