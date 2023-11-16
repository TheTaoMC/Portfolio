import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"

export const data = {
  name: "Manote Bunyoy",
  title: "Software Developer · between jobs",
  description:
    "From imagination to design. From design to development. From development to product. We complete it all in one place.",
  btntxt: "View Resume",
  link: "",
}

export const datanav = {
  title: "About",
  description:
    "I am a beginner in programming, but I am passionate about technology and eager to learn. I am always looking for opportunities to improve my skills and contribute to the field.",
}

export const dataabout = {
  title: "About",
  description:
    "I am a beginner in programming, but I am passionate about technology and eager to learn. I am always looking for opportunities to improve my skills and contribute to the field.",
}

import imgExp from "../assets/rn001.png"
import imgExp2 from "../assets/webmap.png"
import imgExp3 from "../assets/POS.jpg"
export const dataExperience = [
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
      "1 This application is a restaurant review application developed with React Native. It allows users to find and review restaurants in their area.",
      "2 This application is a restaurant review application developed with React Native. It allows users to find and review restaurants in their area.",
    ],
    tags: [
      ["React Native", "React Native Paper"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
  {
    year: "2022",
    img: imgExp2,
    contenttitle: "WebMap",
    contenttitlelink: "",

    iconlinks: [
      { icon: faGithub, link: "https://github.com/TheTaoMC/Isaan_Food_House" },
      { icon: faGithub, link: "" },
    ],
    descriptions: ["3 WebMap of Company.", "4 WebMap of Company."],
    tags: [
      ["HTML", "Bootstrap 5"],
      ["PHP", "MySql"],
    ],
  },
  {
    year: "2021",
    img: imgExp3,
    contenttitle: "MiniPOS",
    contenttitlelink: "",

    iconlinks: [],
    descriptions: ["4 MiniPOS"],
    tags: [
      ["React", "Bootstrap 5"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
  {
    year: "2020",
    img: imgExp3,
    contenttitle: "MiniShop",
    contenttitlelink: "",

    iconlinks: [],
    descriptions: ["5 MiniShop"],
    tags: [
      ["React", "Bootstrap 5"],
      ["NodeJS", "ExpressJS", "MySql"],
    ],
  },
]
