const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 02, 2026",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://medium.com/@vaibhavsuman00/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it-144870ec576a",
  },
  {
    id: 2,
    date: "Jan 04, 2026",
    title:
      "Prompt Engineering is Dead! (Or Is It? What Developers REALLY Need to Know Now)",
    image: "/images/blog2.png",
    link: "https://medium.com/@vaibhavsuman00/prompt-engineering-is-dead-or-is-it-what-developers-really-need-to-know-now-1859f6e8a9fd",
  },
  {
    id: 3,
    date: "Jan 07, 2026",
    title: "Fine-Tuning vs RAG vs Long-Context Models: A Developer’s Guide",
    image: "/images/blog3.png",
    link: "https://medium.com/@vaibhavsuman00/fine-tuning-vs-rag-vs-long-context-models-a-developers-guide-5f3b37ac2b2f",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Angular"],
  },
  {
    category: "ML/AI",
    items: ["TensorFlow", "Gen AI", "OpenCV", "NLP", "LLM", "RAG"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "CSS3", "HTML5"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Django", "Python"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker", "AWS", "Kubernetes"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/vsuman00",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/vaibhav-suman/",
  },
  {
    id: 3,
    text: "Google Scholar",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://scholar.google.com/citations?user=CJbdLegAAAAJ&hl=en",
  },
  {
    id: 4,
    text: "Medium",
    icon: "/icons/medium.svg",
    bg: "#ff866b",
    link: "https://medium.com/@vaibhavsuman00",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/certificates/ibm.png",
  },
  {
    id: 2,
    img: "/certificates/AWS.png",
  },
  {
    id: 3,
    img: "/certificates/Red_hat.png",
  },
  {
    id: 4,
    img: "/certificates/cisco.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "SummarIQ (Meeting Summarizer)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "SummarIQ.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "SummarIQ is a cutting-edge web application designed to transform lengthy meeting transcripts into intelligent, actionable summaries.",
            "Instead of manual note-taking, it leverages Google's Gemini AI to analyze documents, offering rich text editing, custom prompts, and seamless email sharing capabilities.",
            "Think of it as your personal AI meeting assistant—instantly organizing raw text into polished reports that are ready to send.",
            "It's built with Next.js 15, TypeScript, and Tailwind CSS, ensuring a fast, responsive interface with secure data handling via MongoDB.",
          ],
        },
        {
          id: 2,
          name: "summariq.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://summar-iq.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "SummarIQ.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Resumide (AI Resume Analyzer)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "Resumide.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://resumide.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 left-5",
        // },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Airbnb",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Airbnb.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This Airbnb is a sleek and modern travel platform designed for seamless property discovery and booking.",
            "Instead of static listings, it delivers a dynamic experience with advanced search capabilities, rich photo galleries, and automated data scraping for real-world insights.",
            "Think of it like having the power of a global travel marketplace—complete with smart filtering and secure user accounts—right at your fingertips.",
            "It's built with Next.js 15, Tailwind CSS, and a robust Django backend, ensuring lightning-fast performance, responsive design, and a scalable full-stack architecture.",
          ],
        },
        {
          id: 2,
          name: "airbnb.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/vsuman00/Airbnb",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "airbnb.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        // {
        //   id: 5,
        //   name: "Design.fig",
        //   icon: "/images/plain.png",
        //   kind: "file",
        //   fileType: "fig",
        //   href: "https://google.com",
        //   position: "top-60 right-20",
        // },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/vaibhav.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/vaibhav-3.JPG",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/vaibhav-1.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/vaibhav.png",
      description: [
        "Hey! I'm Vaibhav 👋, a Full Stack Engineer who loves building scalable, intelligent systems that blend cutting-edge AI with rock-solid engineering.",
        "I specialize in Python, JavaScript, React, and AWS—with a sweet spot for machine learning, cloud architecture, and crafting seamless user experiences.",
        "I'm passionate about solving real problems: from detecting fake news with 98% accuracy (published in Springer!) to building production-grade ML pipelines and winning national hackathons.",
        "When I'm not deploying containerized apps or training deep learning models, you'll find me mentoring peers, exploring the latest in AI/LLMs, or debugging at 2AM with way too much coffee ☕😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
