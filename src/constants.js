
// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import socketiologo from './assets/tech_logo/socket.io.png';
import dasisyUI from './assets/tech_logo/daisyUI.png';
import zustandlogo from './assets/tech_logo/zustand.png';
import cssLogo from './assets/tech_logo/css.png';
import dsalogo from './assets/tech_logo/dsa.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import renderlogo from './assets/tech_logo/render.png';

// Experience Section Logo's
import electronicartslogo from './assets/company_logo/electronic_arts.png';
import accenturelogo from './assets/company_logo/accenture.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import witlogo from './assets/education_logo/wit.png';


// Project Section Logo's
import safelinklogo from './assets/work_logo/safelink.png';
import bookylogo from './assets/work_logo/booky.png';



export const SkillsInfo = [
  {
    title: 'Tech Stack',
    skills: [
      // { name: 'DSA', logo: dsalogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
       
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
       { name: 'socket io', logo: socketiologo },
      // { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
       { name: 'daisyUI', logo: dasisyUI },
        { name: 'zustand', logo: zustandlogo },
      // { name: 'PostgreSQL', logo: postgreLogo },

    ],
  },
  
  {
    title: 'Languages',
    skills: [

      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      // { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Atlas', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
       { name: 'render', logo: renderlogo },

    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: electronicartslogo,
      role: "Virtual Software Engineering Simulation",
      company: "Electronic Arts",
      date: "",
       drivelink:"https://drive.google.com/file/d/14lTl9hQrHjIVssj4Zmo0C18R3AlJbXSv/view?usp=sharing",
      desc: "During the simulation, I proposed new gameplay features, refactored the inventory system for better item management, and performed real-time bug fixes—experiencing the full cycle of feature proposal, development, optimization, and troubleshooting.",
      skills: [
        "Write a Feature Proposal",
        "Create a Game Object Class",
        "Improve Inventory System",
        "Live Bugfix",
      ],
    },
    {
      id: 1,
      img: accenturelogo,
      role: "Virtual Software Engineering Simulation",
      company: "accenture",

      date: "",
     drivelink:"https://drive.google.com/file/d/1jOB1trUrvK2FWhSkggmO87T3XemN7MA8/view?usp=sharing",
      desc: "In the simulation, I designed the system’s architecture, implemented security measures, wrote and debugged code, performed thorough testing, and followed Agile practices—experiencing how these disciplines fit together in a real‐world workflow.",
      skills: [
        "Architecture",
        "Security",
        "Programming",
        "Testing",
        "Agile",
      ],
    },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //    wikipediaLink:"https://en.wikipedia.org/wiki/Rich_Dad_Poor_Dad",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
    {
      id: 0,
      img: witlogo,
      school: "Wuhan Institute of Technology, China",
      date: "Started in September 2022",
      grade: "88%",
      desc: "I am pursuing my undergraduate degree at Wuhan Institute of Technology, where I am building a strong foundation in programming, software development, and computer science principles. I am studying courses such as Software Engineering, Data Structures and Algorithms, Object Oriented Programming, Databases, Discrete Mathematics, Operating Systems, Computer Networks, Machine Learning, Information Retrieval. I also actively participate in technical events and workshops to enhance my skills and expand my knowledge. My experience at WIT is continuously shaping my technical abilities and fostering my professional growth.",
      degree: "Computer Science And Technology",
    },
    // {
    //   id: 1,
    //   img: bsaLogo,
    //   school: "BSA College, Mathura",
    //   date: "Sept 2018 - Aug 2021",
    //   grade: "73.2%",
    //   desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    //   degree: "Bachelor of Science - BSC (Computer Science)",
    // },
    // {
    //   id: 2,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2017 - March 2018",
    //   grade: "78%",
    //   desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    //   degree: "CBSE(XII) - PCM with Computer Science",
    // },
    // {
    //   id: 3,
    //   img: vpsLogo,
    //   school: "Vatsalya Public School Govardhan, Mathura",
    //   date: "Apr 2015 - March 2016",
    //   grade: "87.5%",
    //   desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
    //   degree: "CBSE(X), Science with Computer Application",
    // },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SafeLink - Emergency Realtime Chat Application",
      description:
        "I built an Emergency Realtime Chat Application using the MERN stack and Socket.io that puts help literally at the user’s fingertips. When the user taps the emergency button inside any individual’s chat window, the app springs into action: it instantly sends a “danger” notification to that specific person, sending a clickable link with the location address  that opens the user's live location on Google Maps, along with the latitude and longitude values to them, and begins capturing a 30-second audio clip. The moment the clip finishes, it’s automatically uploaded and delivered into the same chat thread. This means the user simply selects the person they trust, presses one button within that conversation, and everything—the user’s urgent message, pinpoint location, and real-time voices—flows straight to them without extra steps or confusion. It’s a seamless, end-to-end safety net designed so the user can alert exactly who they need, exactly when they need them.",

      image: safelinklogo,
      tags: ["React.js", "express.js", "MongoDb", "Node.js", "socket.io","tailwind css","daisyUI","zustand"],
      github: "https://github.com/Rakib-Hossain10/Realtime-Chat-App",
      webapp: "https://safelink-a12w.onrender.com",
    },
    {
      id: 1,
      title: "bookStore - Academic Editions for Uneversity Students",
      description:
        "I built a bookstore application with the MERN stack that starts by showcasing a curated selection of the best self‐growth titles right on the homepage. Once a student creates an account and selects their current semester, the platform instantly adapts to display the exact textbooks required for that term—no more hunting through endless lists. Each book entry includes a “More Details” button that, when clicked, takes the student straight to its Wikipedia page for a quick overview of content, author background, and reviews. By streamlining recommendations based on semester and offering immediate access to in‐depth information, the app transforms the chore of sourcing course materials into a smooth, one‐stop experience tailored to every university timetable.",
      image: bookylogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "tailwind css", "daisyUI"],
      github: "https://github.com/Rakib-Hossain10/Main-Booky",
      webapp: "https://main-booky.onrender.com",
    },
    // {
    //   id: 2,
    //   title: "Movie Recommendation App",
    //   description:
    //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    //   image: movierecLogo,
    //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },


  ];  