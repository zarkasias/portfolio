export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I aim to deliver a product that meets your vision",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
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
    title: "Currently working on a ThreeJS interactive portfolio",
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
      "Write Typescript components for Nextjs App",
      "Ensured responsiveness, and added comonents specifically for mobile version",
    ],
    className: "md:col-span-2", // change to md:col-span-2
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
    className: "md:col-span-2", // change to md:col-span-2
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
