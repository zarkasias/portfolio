export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Deliver great software products that meets your vision",
    description:
      "With 27 years of experience, I've been instrumental in the development of numerous successful websites and applications.  Throughout my career, I've embraced new technologies to stay relevant and ensure my skills remain valuable. This passion for continuous learning fuels my desire to contribute to innovative and impactful projects.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-40",
    titleClassName: "justify-end",
    img: "/forest.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm able to accomodate your time schedule",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technology stack",
    description: "I'm always learning",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Stay tuned for informative and opinionated blog posts",
    description: "Whats New",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const improvedExperience = [
  {
    id: 1,
    title: "Consulting",
    role: "Senior Frontend Developer",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    clients: [
      {
        name: "Orchestro.ai",
        desc: [
          "Develop Sections and Components for React project",
          "Helping to transition application to NextJs with a monorepo and introduction of Storybook for existing and future components",
          "Removal of ChakraUI and introduced TailwindCSS",
        ],
      },
      {
        name: "Aurite.ai",
        desc: [
          "Built UI Components for a NextJs project using TypeScript",
          "Created new sections for the application directly from Figma",
          "Ensured entire application was responsive and added menus and footers for mobile version",
        ],
      },
      {
        name: "LEGACY",
        desc: [
          "Develop UI Components in React application",
          "Migrating Components from Javascript to TypeScript",
          "Added Storybook in order to maintain Component library",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "SAP",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    roles: [
      {
        name: "Product Owner",
        desc: [
          "Responsible for defining development tasks and clarifying business requirements for Development team",
          "Primary point of contact with DevOps for migration from Jenkins pipelines to Azure/Piper pipelines",
          "Ensured successful configuration, deployment and maintenance of approximately 20 applications.",
        ],
      },
      {
        name: "Development Expert",
        desc: [
          "Developed the UI using SAP UI5 for multiple versions of Rules, Actions and Alerts which were part of a suite of IoT applications",
          "Development of UI for additional IoT applications for Geofencing and Smart Sensing",
          "Worked cross team as a UI Expert to support in development of applications",
          "Worked on the UI for Connected Goods and Smart Vending applications.  Worked directly with UX to enhance and improve sections of the applications",
          "Built 10+ Application Demos for Customer Co-Innovation Projects",
        ],
      },
      {
        name: "Senior Developer",
        desc: [
          "Member of Development team for SAP Control Tower",
          "Development of Charts and Dashboards, and creation of a navigation framework",
          "Part of a team that developed an Ad-hoc designer, so that users could create and edit charts directly in the UI.  This concept was patented in May of 2013",
          "Developed the UI in Flex for SAP Carbon Impact.  This was a rebuild of thee application Clear Standards that I worked as part of a startup company that SAP purchased",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Clear Standards",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    desc: [
      "Developed a solution to enable organizations to measure, mitigate and monetize greenhouse gas",
      "Responsible for the development of the Corporate Website and Application UI in Ruby on Rails",
      "Functioned as Release Manager/Scrum Master of development team",
    ],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    desc: [
      "Develop UI Components",
      "Migrating Components from Javascript to TypeScript",
      "Maintain Component library in StoryBook",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Frontend Developer",
    desc: [
      "Write Typescript components for Nextjs Application",
      "Ensured UI responsiveness",
      "Addition of components specifically for mobile version",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Development Expert",
    desc: [
      "Frontend Developer for new and existing applications, developed using React, SAP UI5 and CSS",
      "Mentorship role for Frontend Development Interns",
      "Development of reusable components that were used across a suite of applications",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Product Owner",
    desc: [
      "Responsible for defining development tasks and clarifying business requirements for Development team",
      "Primary point of contact with DevOps for migration from Jenkins pipelines to Azure/Piper pipelines",
      "Ensured successful configuration, deployment and maintenance of approximately 20 applications.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  // {
  //   id: 1,
  //   img: "/git.svg",
  // },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    link: "https://linkedin.com/in/davidmachambers",
    img: "/link.svg",
  },
];
