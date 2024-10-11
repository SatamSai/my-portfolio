import PreviewImg from './assets/project_preview.png'
import ProjectLogoImg from './assets/projectlogo.png'
import MovieBaseLogo from './assets/moviebaselogo.png'
import Win95 from './assets/win95.webp'
import LearnblockLogo from './assets/learnblock.png'
import Learnblock1 from './assets/learnblock1.png'
import Learnblock2 from './assets/learnblock2.png'
import Learnblock3 from './assets/learnblock3.png'

import Win95_1 from './assets/win95_1.png'
import Win95_2 from './assets/win95_2.png'
import Win95_3 from './assets/win95_3.png'


import SurrealImgUrl from './assets/surreal.png'
import DecimalImgUrl from './assets/dpa.png'
import MumbaiUniversityUrl from './assets/university.jpg'

import { School, Work } from '@mui/icons-material'
import React from 'react'

export const projects = [
    {
        id: 0,
        title: "KanBan Flow",
        time: "02/2024 - Current",
        githubUrl: "",
        websiteUrl: "",
        logoUrl: ProjectLogoImg,
        pictures: [
            PreviewImg,
            PreviewImg,
            PreviewImg
        ],
        about: "KanbanFlow is an easy-to-use task management tool that helps people organize their work visually. Imagine a virtual board with columns like \"To Do,\" \"In Progress,\" and \"Completed.\" You can create tasks (represented as cards) and move them across the columns as you make progress. It's perfect for keeping track of what needs to be done, what you're working on, and what you've finished.\n\nAdditionally, the tool allows you to work with others, where you can assign tasks, set permissions for team members, and manage everything in one place. It’s like having a clear, organized view of all your work, helping you stay focused and efficient!",
        techStack: "HTML, CSS, Javascript, Typescript, ReactJS, Styled Components, NodeJS, ExpressJS, Mongoose",
        implementation: "KanbanFlow is a task management web application designed to enhance productivity and collaboration. I developed it using the MERN stack (MongoDB, ExpressJS, React, and NodeJS), implementing a visual Kanban board system that allows users to manage tasks through a drag-and-drop interface.\n\n\nKey features include:\n\n\t- User Authentication & Role-Based Access Control: Implemented secure user registration and login using JWT tokens, allowing board owners to control who can view or update tasks.\n\n\t- File Upload & Management: Integrated Multer for file uploads, enabling users to attach files to tasks.\n\n\t- Frontend: Developed with React and Redux for a responsive and dynamic user interface, ensuring efficient state management and real-time updates.\n\n\t- Backend: Built using NodeJS & Express, with MongoDB for storing user data and board/task information."
    },
    {
        id: 1,
        title: "Learnblock",
        time: "04/2022 - 06/2022",
        githubUrl: "https://github.com/SatamSai/LearnBlock",
        websiteUrl: "https://learnblock.netlify.app/",
        logoUrl: LearnblockLogo,
        pictures: [
            Learnblock1,
            Learnblock2,
            Learnblock3
        ],
        about: "Learnblock is a website designed to visually demonstrate how blockchain technology works. It simplifies complex concepts like hashing, block creation, and peered chains, allowing users to interact with blockchain processes. By simulating how nodes are linked and how blocks are mined in the Proof of Work consensus mechanism, users can better understand blockchain fundamentals.\n\nThe tool is interactive, providing a step-by-step explanation and illustration of the mechanisms behind blockchain networks, making the learning experience engaging and insightful.",
        techStack: "HTML, CSS, ReactJS",
        implementation: "Learnblock showcases blockchain technology through an interactive web experience.\n\nKey features include:\n\n\t- Interactive Blockchain Demonstrations: Created simulations of hashing and block creation processes, showing how blocks are mined and linked.\n\n\t- Visual Proof of Work Mechanism: Implemented a visual representation of the Proof of Work process.\n\n\t- Frontend Development: Built using ReactJS for a dynamic and responsive UI."
    },
    {
        id: 2,
        title: "MovieBase",
        time: "01/2022 - 03/2022",
        githubUrl: "https://github.com/SatamSai/MovieBase2022",
        websiteUrl: "https://moviebase22.netlify.app/",
        logoUrl: MovieBaseLogo,
        pictures: [
            PreviewImg,
            PreviewImg,
            PreviewImg
        ],
        about: "MovieBase is a responsive ReactJS-based platform for exploring movies and TV shows. It integrates with the TMDB API to offer users a wide array of content, from trending and top-rated movies to upcoming shows. Users can search for specific titles or celebrities, and view detailed information, including trailers, featured cast, and posters. The platform also allows users to browse collections of related movies.\n\nThe website is designed to provide a smooth and engaging user experience, making it easy to explore and discover new content.",
        techStack: "HTML, CSS, ReactJS, TMDB API",
        implementation: "MovieBase delivers a rich, dynamic user experience for browsing movies and TV shows.\n\nKey features include:\n\n\t- API Integration: Connected with the TMDB API to fetch and display trending, top-rated, and upcoming content.\n\n\t- Search & Filtering: Built a search feature to allow users to find movies, shows, or celebrities.\n\n\t- Detailed Pages: Used reusable components to show detailed info about each movie/show, including cast, trailers, and related content.\n\n\t- Frontend Development: ReactJS was used to build a responsive, smooth interface."
    },
    {
        id: 3,
        title: "Windows 95 Portfolio",
        time: "06/2024 - 07/2024",
        githubUrl: "https://github.com/SatamSai/win95-portfolio",
        websiteUrl: "https://sainamdev-win95.netlify.app/",
        logoUrl: Win95,
        pictures: [
            Win95_1,
            Win95_2,
            Win95_3
        ],
        about: "This portfolio website is a retro-themed project designed to resemble the classic Windows 95 interface. It provides a nostalgic, interactive experience, featuring iconic desktop elements such as notepad, minesweeper, browser, PDF viewer, email, and file manager. Each app within the portfolio is fully functional, allowing visitors to engage with the user's bio, skills, projects, and more through familiar Windows 95 interactions.",
        techStack: "HTML, CSS, ReactJS, Styled Components",
        implementation: "The Windows 95-themed portfolio merges retro aesthetics with modern web development techniques.\n\nKey features include:\n\n\t- Functional Applications: Implemented classic apps like Notepad, Minesweeper, a PDF viewer, a browser, and an email client, all designed to enhance the interactive experience.\n\n\t- Installation Wizard: Created a step-by-step introduction to the portfolio, simulating an installation process to guide users through the content.\n\n\t- Responsive Design: Maintained the Windows 95 look while ensuring compatibility across various devices and screen sizes.\n\n\t- Desktop Icons & Windows: Developed draggable icons and interactive windows to replicate the feel of a Windows 95 desktop.\n\n\t- Frontend Development: Built using ReactJS and styled components for seamless navigation and a retro visual experience."
    }
]

export const experiences = [
    {
        id: 1,
        logo: SurrealImgUrl,
        title: "Surreal Events",
        subTitle: "09/2023 – Present",
        icon: React.createElement(Work, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Developed the user interface for a metaverse platform from scratch, ensuring a seamless and responsive user experience.",
            "Integrated APIs using Axios for enhanced functionality and efficient data communication.",
            "Established WebSocket connections using SockJS for delivering real-time notifications, including invites, chats, and other interactive features.",
            "Created the Meeting Rooms module, enabling users to engage via audio, video, and screen sharing using Agora WebRTC for smooth collaboration.",
            "Integrated a game client into the platform's frontend, ensuring communication between the platform and games through game signals.",
            "Developed a comprehensive admin dashboard from scratch, allowing administrators to efficiently manage resources such as meeting materials (upload, delete, modify).",
            "Implemented Single Sign-On (SSO) authentication using Keycloak, streamlining access across multiple metaverse experiences for enhanced user security."
        ]
    },
    {
        id: 2,
        logo: DecimalImgUrl,
        title: "Decimal Point Analytics",
        subTitle: "07/2022 – 02/2024",
        icon: React.createElement(Work, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Played a key role in upgrading the frontend UI of a trading chart platform, incorporating features such as a comprehensive news section, financial indicators, and drawing tools, all implemented with HTML Canvas Renderer and TypeScript.",
            "Developed scalable ETL data pipelines with Azure Databricks for efficient data loading, validation, and transformation, storing processed data in Delta tables.",
            "Optimized data pipeline performance by implementing parallel processing techniques using PySpark"
        ]
    },
    {
        id: 3,
        logo: MumbaiUniversityUrl,
        title: "Mumbai University",
        subTitle: "07/2018 – 06/2022",
        icon: React.createElement(School, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Completed a Bachelor's degree in Computer Science with a CGPA of 8.62.",
            "Gained a strong foundation in software development, algorithms, data structures, and database management.",
            "Worked on projects related to blockchain technology, web development, and data processing, applying both theoretical knowledge and practical skills."
        ]
    }
]

export const skills = {
    frontend: ['Html', 'CSS', 'SCSS', 'Git', 'Javascript', 'Typescript', 'ReactJs', 'Redux', 'WebRTC', 'Webpack'],
    backend: ['NodeJS', 'ExpressJS', 'Mongoose', 'Django', 'Restful API', 'JWT', 'Socket.io'],
    blockchain: ['Solidity', 'Web3.js', 'Ethers.js', 'Moralis', 'Hardhat', 'Openzeppelin', 'Metamask']
}
