export const navItems = [
  { name: "About", link: "/about" },
  { name: "Services", link: "/services" },
  { name: "Blog", link: "/blogs" },
  { name: "Contact", link: "/contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Senior Frontend Developer with 27+ Years of Experience",
    description:
      "Specializing in modern web development with React, Next.js, and TypeScript. I create exceptional digital experiences that combine technical excellence with beautiful design.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-40",
    titleClassName: "justify-end",
    img: "/images/backgrounds/forest.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available for New Projects",
    description: "Flexible scheduling to accommodate your project needs",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/images/icons/rocket.png",
    spareImg: "",
    link: "/contact"
  },
  {
    id: 3,
    title: "Expert Services",
    description: "Frontend Development • Technical Consulting • UI Implementation • Application Modernization",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/images/icons/coding.png",
    spareImg: "",
    link: "/services"
  },
  {
    id: 4,
    title: "Latest Projects",
    description: "View my recent work and case studies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/images/icons/website.png",
    spareImg: "/b4.svg",
    link: "/projects"
  },
  {
    id: 5,
    title: "Insights & Articles",
    description: "Technical insights and development best practices",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    link: "/blogs",
  },
  {
    id: 6,
    title: "Let's Build Something Amazing Together",
    description: "Get in touch to discuss your project",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "/contact.svg",
    spareImg: "",
    link: "/contact"
  },
];

export const improvedExperience = [
  {
    id: 1,
    title: "Consulting",
    role: "Senior Frontend Developer",
    className: "md:col-span-2",
    thumbnail: "/images/experience/exp1.svg",
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
    thumbnail: "/images/experience/exp2.svg",
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
          "Member of the Development team for SAP Control Tower",
          "Development of Charts and Dashboards, and creation of a navigation framework",
          "Part of a team that developed an Ad-hoc designer, so that users could create and edit charts directly in the UI.  This concept was patented in May of 2013",
          "Developed the UI in Flex for SAP Carbon Impact.  This was a rebuild of the application Clear Standards that I worked on as part of a startup company that SAP purchased",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Clear Standards",
    className: "md:col-span-2",
    thumbnail: "/images/experience/exp4.svg",
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
    thumbnail: "/images/experience/exp1.svg",
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
    thumbnail: "/images/experience/exp4.svg",
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
    thumbnail: "/images/experience/exp3.svg",
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
    thumbnail: "/images/experience/exp2.svg",
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
    img: "/images/icons/link.svg",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development & UI Implementation",
    description: "Get a fast, modern, and user-friendly website that looks great and performs even better. I build responsive, high-performance web applications with seamless UI/UX, ensuring an engaging experience on any device.",
    icon: "/images/icons/programing.png",
    features: [
      "Responsive Design",
      "Component Libraries",
      "Figma to Code",
      "Animation & Interactions",
      "SEO & Performance Optimization",
      "Cross-browser Compatibility",
      "Accessibility (a11y)"
    ]
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description: "Launch and scale your online store with a high-performance, conversion-focused e-commerce platform. I build secure, scalable, and feature-rich stores that provide seamless shopping experiences.",
    icon: "/images/icons/shopping.png",
    features: [
      "Custom Online Store Development",
      "Shopify, WooCommerce, & Custom Solutions",
      "Payment Gateway Integration",
      "Product Management Systems",
      "Cart & Checkout Optimization",
      "Performance & Security Enhancements"
    ]
  },
  {
    id: 3,
    title: "Technical Consulting",
    description: "Need expert guidance on your website or app? I help businesses choose the right technology, optimize performance, and ensure clean, maintainable code—reducing long-term costs and improving scalability.",
    icon: "/images/icons/communication.png",
    features: [
      "Architecture Planning",
      "Code Reviews",
      "Tech Stack Selection",
      "Team Mentoring",
      "Best Practices Implementation",
      "Performance Audits"
    ]
  },
  {
    id: 4,
    title: "Application Modernization",
    description: "Is your website outdated or slow? I transform legacy applications into high-performance, secure, and scalable solutions that align with modern web standards.",
    icon: "/images/icons/technology.png",
    features: [
      "Legacy Code Migration",
      "JavaScript to TypeScript",
      "Performance Optimization",
      "Modern Framework Adoption",
      "Code Refactoring",
      "Technical Debt Resolution"
    ]
  }
];


