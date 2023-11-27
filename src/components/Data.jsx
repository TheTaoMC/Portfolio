import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const data = {
  name: "Manote Bunyoy",
  title: "Software Developer · between jobs",
  description:
    "From initial requirements to detailed design, and through development to the final product, our integrated approach streamlines the entire process, ensuring a cohesive and efficient journey from concept to completion—all in one place.",
  btntxt: "View Resume",
  link: "",
};

export const datanav = {
  title: "About",
  description:
    "I am a beginner in programming, but I am passionate about technology and eager to learn. I am always looking for opportunities to improve my skills and contribute to the field.",
};

export const dataabout = {
  title: "About",
  description:
    "I am a beginner in programming, but I am passionate about technology and eager to learn. I am always looking for opportunities to improve my skills and contribute to the field.",
};

export const dataEducation = [
  {
    year: "2012 - 2014",
    img: "",
    contenttitle: "High Voc. Cert. (Ratchaburi Technical College)",
    contenttitlelink: "",

    iconlinks: [],
    descriptions: ["Faculty of Business Administration", "Business Computer"],
    tags: [["RTC", "BusCom"]],
  },
  {
    year: "2014 - 2016",
    img: "",
    contenttitle: "B.BA. (Southeast Asia University)",
    contenttitlelink: "",

    iconlinks: [],
    descriptions: ["Faculty of Business Administration", "Business Computer"],
    tags: [["SAU", "BusCom"]],
  },
];

export const dataExperience = [
  {
    year: "2016",
    img: "",
    contenttitle: "THEO Engineering Co, Ltd.",
    contenttitlelink: "",
    iconlinks: [
      {
        icon: faLink,
        link: "https://webv3.theo.co.th/th/contact-us-th/",
      },
    ],
    descriptions: ["Service"],
    tags: [["Technology", "Weighing"]],
  },
  {
    year: "2018 - 2020",
    img: "",
    contenttitle: "THEO Engineering Co, Ltd.",
    contenttitlelink: "",
    iconlinks: [
      {
        icon: faLink,
        link: "https://webv3.theo.co.th/th/contact-us-th/",
      },
    ],
    descriptions: ["Software Tester"],
    tags: [["Technology", "Weighing", "Tester"]],
  },
  {
    year: "2021",
    img: "",
    contenttitle: "THEO Engineering Co, Ltd.",
    contenttitlelink: "",
    iconlinks: [
      {
        icon: faLink,
        link: "https://webv3.theo.co.th/th/contact-us-th/",
      },
    ],
    descriptions: ["Design UI"],
    tags: [["Technology", "Weighing", "Tester", "UI"]],
  },
  {
    year: "2021 - 2023+",
    img: "",
    contenttitle: "THEO Engineering Co, Ltd.",
    contenttitlelink: "",
    iconlinks: [
      {
        icon: faLink,
        link: "https://webv3.theo.co.th/th/contact-us-th/",
      },
    ],
    descriptions: ["Project Coordinators"],
    tags: [["Technology", "Weighing", "Tester", "UI", "Project Co"]],
  },
];

import imgExp from "../assets/rn001.png";
import imgExp2 from "../assets/webmap.png";
import Portfolio from "../assets/Portfolio.gif";
import Sidebar from "../assets/ChatGPT-Sidebar.gif";
import { faLink } from "@fortawesome/free-solid-svg-icons";
export const dataProject = [
  {
    year: "2023",
    img: Portfolio,
    contenttitle: "Portfolio",
    contenttitlelink: "https://www.thetaomc.xyz/",

    iconlinks: [
      { icon: faGithub, link: "https://github.com/TheTaoMC/Portfolio" },
    ],
    descriptions: ["My Portfolio"],
    tags: [
      ["React Native", "React Native Paper"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
  {
    year: "2023",
    img: imgExp,
    contenttitle: "Restaurant Review",
    contenttitlelink: "https://github.com/TheTaoMC/Isaan_Food_House",

    iconlinks: [
      { icon: faGithub, link: "https://github.com/TheTaoMC/Isaan_Food_House" },
      { icon: faYoutube, link: "https://youtu.be/DOUP5gwk2jI" },
    ],
    descriptions: [
      "This application is a restaurant review application developed with React Native. It allows users to find and review restaurants in their area.",
    ],
    tags: [
      ["React Native", "React Native Paper"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
  {
    year: "2022",
    img: "",
    contenttitle: "WebMap",
    contenttitlelink: "",

    iconlinks: [],
    descriptions: ["WebMap of Company."],
    tags: [
      ["HTML", "Bootstrap 5"],
      ["PHP", "MySql"],
    ],
  },
];

export const dataArticle = [
  {
    year: "2023",
    img: Portfolio,
    contenttitle: "Portfolio",
    contenttitlelink: "https://www.thetaomc.xyz/",

    iconlinks: [
      { icon: faGithub, link: "https://github.com/TheTaoMC/Portfolio" },
    ],
    descriptions: ["My Portfolio"],
    tags: [
      ["React Native", "React Native Paper"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
];
export const dataCertification = [
  {
    year: "2023",
    img: "",
    contenttitle: "React Exercises by W3school",
    contenttitlelink: "",

    iconlinks: [
      {
        icon: "",
        link: "",
      },
      { icon: "", link: "" },
    ],
    descriptions: ["Test React skills with W3Schools' Exercises."],
    tags: [["React", "Front End"]],
  },
  {
    year: "2023",
    img: "",
    contenttitle: "MySQL Exercises by W3school",
    contenttitlelink: "",

    iconlinks: [
      {
        icon: "",
        link: "",
      },
      { icon: "", link: "" },
    ],
    descriptions: ["Test MySQL skills with W3Schools' Exercises."],
    tags: [["MySQL", "Back End"]],
  },
  {
    year: "2023",
    img: "",
    contenttitle: "HTML Exercises by W3school",
    contenttitlelink: "",

    iconlinks: [
      {
        icon: "",
        link: "",
      },
      { icon: "", link: "" },
    ],
    descriptions: ["Test HTML skills with W3Schools' Exercises."],
    tags: [["HTML", "Front End"]],
  },
  {
    year: "2023",
    img: "",
    contenttitle: "CSS Exercises by W3school",
    contenttitlelink: "",

    iconlinks: [
      {
        icon: "",
        link: "",
      },
      { icon: "", link: "" },
    ],
    descriptions: ["Test CSS skills with W3Schools' Exercises."],
    tags: [["CSS", "Front End"]],
  },
];
