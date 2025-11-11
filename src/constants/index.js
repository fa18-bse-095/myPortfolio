

import project1 from "../assets/projects/pro1.png"
import project2 from "../assets/projects/pro2.png";
import project3 from "../assets/projects/pro4.png";
import project4 from "../assets/projects/pro3.png";
import { link } from "framer-motion/client";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, MySQL, Express.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Mern Stack Stack Developer",
    company: "Max Tech.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["React.Js", "Node.js", "Express.js", "mongoDB"],
  },
  {
    year: "Feburary 2024 – March 2025",
    role: "Frontend Developer",
    company: "Max Tec",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "TailwindCSS", "Javascript,React.JS"],
  },
  {
    year: "January 2023 – December 2023",
    role: "Junior Web Developer",
    company: "Max Tech",
    description: `Built portfolio websites and small business apps using MERN stack technologies.
    Collaborated with clients to define requirements and deliver tailored web solutions.
    `,

  },

];

export const PROJECTS = [
  {
    title: "FK FRUIT STORE",
    image: project1,
    description:
      "“FK Fruit Store is an online platform that allows users to browse and purchase fresh fruits easily. It offers a user-friendly interface with smooth navigation and secure checkout. The project showcases practical e-commerce features suitable for a full-stack application.”",
    technologies: ["HTML", "CSS", "TailwindCSS", "React.JS"],
    link: "https://fru.vercel.app/"
    
  },
  {
    title: " Fayaz Fast Food",
    image: project2,
    description:
      "“Fayaz Fast Food is an online platform for ordering fast food quickly and conveniently. It features a user-friendly interface, menu browsing, and easy order placement. The project highlights practical e-commerce and full-stack development skills.”",
    technologies: ["HTML", "CSS", "TailwindCSS", "React.JS"],
    link: "https://food-eight-ashy-57.vercel.app/"
  },
  // {
  //   title: "First Project To Learn Portfolio",
  //   image: project3,
  //   description:
  //     "“This is my first project created to learn and build my portfolio. It showcases my skills in web development and practical implementation of full-stack features. The project demonstrates my ability to design, develop, and deploy a functional web application.”",
  //   technologies: ["HTML", "CSS", "React.JS", "TailwindCSS"],
  // },
  // {
  //   title: "Shopsy..",
  //   image: project4,
  //   description:
  //     "“Shopsy is an online e-commerce platform that allows users to browse, add, and purchase products effortlessly. It features a user-friendly interface, smooth navigation, and secure checkout. The project demonstrates practical full-stack development and modern web design skills.”",
  //   technologies: ["HTML", "CSS", "React.JS", "TailwindCSS"],
  // },
];

export const CONTACT = {
  address: "Gumbad Maira Mingora, Swat ",
  phoneNo: "03411190506 ",
  email: "yasinahmad919@gmail.com",
};
// export default EXPERIENCES;  THIS IS BY DEFAULT EXPORT