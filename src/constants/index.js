import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  BCA,
  frogs,
  starbucks,
  KMB,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  DEMA,
  PERMI,
  UIN,
  BRIN,
  BUDAK,
  GANA,
  KANAL,
  SEARCH,
  ALPIT,
  KOPMA,
  VIDEO,
  baznas,
  IWMS,
  SAVEFOREST,
  ERC,
  ai,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "LinkedIn",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammadhasani/",
  },
];

const services = [
  {
    title: "Website and IoT Developer",
    icon: web,
  },
  {
    title: "Electrical Engineer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: ai,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Asisten Peneliti Badan Riset dan Inovasi Nasional (BRIN) RI",
    company_name: "BRIN Yogyakarta",
    icon: BRIN,
    iconBg: "#383E56",
    date: "July 2023 - Now",
    points: [
      "Managing MBKM students in making disaster technology prototypes.",
      "Conceptualize the design of disaster technology based on IoT and Artificial Intelligence.",
      "Prepared a Budget Plan for the construction of prototypes..",
      "Respond to comments, messages and feedback from the audience quickly and professionally.",
      "Creating a prediction model based on historical data and environmental variables.",
    ],
  },
  {
    title: "Product Manager and RND Specialist",
    company_name: "BRIN Bogor",
    icon: BRIN,
    iconBg: "#E6DEDD",
    date: "August 2023 - January 2024",
    points: [
      "Effectively led three project areas: Air Quality Monitoring, Water Quality Monitoring, and Early Detection of Landslide And Flood Disasters.",
      "Efficiently planned the conceptual framework for the development of prototypes for three projects to be implemented.",
      "Accomplished coordination with the Executive Manager of BRIN for the commercialization of the project.",
      "Successfully conceptualized the development of a website and application for the prototypes.",
      "Secured patents for the three projects.",
    ],
  },
  {
    title: "RND Manager",
    company_name: "PT Frogs Indonesia",
    icon: frogs,
    iconBg: "#383E56",
    date: "August 2023 - Jan 2024",
    points: [
      "Efficiently led the team in prototype development.",
      "Successfully executed the implementation of the forest and land fire detection drone prototype.",
      "Pioneered the conceptualization of a ground control station in forest and land fire monitoring.",
      "Designed PCB and Executed the Manufacture of Electronics tester system.",
      "Successfully secured a patent for Forest and Land Fire Detection Drone.",
    ],
  },
  {
    title: "Awardee Badan Amil Zakat Nasional Scholarship",
    company_name: "Badan Amil Zakat Nasional (BAZNAS)",
    icon: baznas,
    iconBg: "#E6DEDD",
    date: "September 2021 - October 2023",
    points: [
      "Time Management and Organization Training for Balancing Studies with Program Activities",
      "Leadership and Communication Training through Engagement in Mentoring and Group Discussions",
      "Critical Thinking and Problem-Solving Training through Community Service Projects",
    ],
  },
  {
    title: "Awardee Bakti BCA Development Program and Scholarship",
    company_name: "Bank Central Asia (BCA)",
    icon: BCA,
    iconBg: "#E6DEDD",
    date: "August 2022 - September 2023",
    points: [
      "Team Collaboration Training, fostering a culture of collaboration and building high-performing teams.",
      "Time Management Training, providing individuals with practical strategies for optimal productivity.",
      "Comprehensive Critical Thinking Training, enhancing analytical skills and problem-solving abilities.",
      "Leadership Training with a focus on various leadership styles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Integrated Watershed Monitoring System",
    description:
      "IWMS is a monitoring website featuring three concurrent monitoring systems: Modified Simple Rain Gauge Device (MOdAthus), Mobile Air Pollution Monitoring System and Instrumentation (SiPuber), and Water Quality Monitoring System (WaterQ). Please note that it can only be accessed on a laptop or PC.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: IWMS,
    source_code_link: "https://github.com/gghozzit/SellingAssetsNusantara.git",
  },
  {
    name: "Save Forest",
    description:
      "A website-based news platform built using PHP and MySQL as the database, a display is available for users and an admin dashboard used to manage content on news channels.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: SAVEFOREST,
    source_code_link: "https://github.com/gghozzit/KanalBerita.git",
  },
  {
    name: "Elins Research Club Website",
    description:
      "Elins Research Club is a community of active electronics and instrumentation students that provides a platform for its members to engage in research and technological development.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ERC,
    source_code_link:
      "https://github.com/gghozzit/SearchWithVariousAlgorithms.git",
  },
];

const honors = [
  {
    name: "Integrated Watershed Monitoring System",
    description:
      "IWMS is a monitoring website featuring three concurrent monitoring systems: Modified Simple Rain Gauge Device (MOdAthus), Mobile Air Pollution Monitoring System and Instrumentation (SiPuber), and Water Quality Monitoring System (WaterQ). Please note that it can only be accessed on a laptop or PC.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Next JS",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    image: IWMS,
    source_code_link: "https://github.com/gghozzit/SellingAssetsNusantara.git",
  },
  {
    name: "Save Forest",
    description:
      "A website-based news platform built using PHP and MySQL as the database, a display is available for users and an admin dashboard used to manage content on news channels.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: SAVEFOREST,
    source_code_link: "https://github.com/gghozzit/KanalBerita.git",
  },
  {
    name: "Elins Research Club Website",
    description:
      "Elins Research Club is a community of active electronics and instrumentation students that provides a platform for its members to engage in research and technological development.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: ERC,
    source_code_link:
      "https://github.com/gghozzit/SearchWithVariousAlgorithms.git",
  },
];

export { services, technologies, experiences, testimonials, projects, honors };
