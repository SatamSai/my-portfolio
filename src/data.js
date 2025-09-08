import PreviewImg from './assets/project_preview.png'
import ProjectLogoImg from './assets/projectlogo.png'
import MovieBaseLogo from './assets/moviebaselogo.png'
import Win95 from './assets/win95.webp'
import LearnblockLogo from './assets/learnblock.png'
import Learnblock1 from './assets/learnblock1.png'
import Learnblock2 from './assets/learnblock2.png'
import Learnblock3 from './assets/learnblock3.png'

import Win95_1 from './assets/Win95_1.png'
import Win95_2 from './assets/Win95_2.png'
import Win95_3 from './assets/Win95_3.png'

import Movie_1 from './assets/Moviebase_1.png'
import Movie_2 from './assets/Moviebase_2.png'
import Movie_3 from './assets/Moviebase_3.png'

import SurrealImgUrl from './assets/surreal.png'
import DecimalImgUrl from './assets/dpa.png'
import TorusImgUrl from './assets/torus.svg'
import MumbaiUniversityUrl from './assets/university.jpg'

import { School, Work } from '@mui/icons-material'
import React from 'react'

export const projects = [
    {
        id: 0,
        title: "KanBan Flow",
        time: "12/2023 - 02/2024",
        githubUrl: "https://github.com/SatamSai/kanbanflow",
        websiteUrl: "https://kanbannflow.netlify.app/",
        logoUrl: ProjectLogoImg,
        pictures: [
            PreviewImg,
            PreviewImg,
            PreviewImg
        ],
        about: "KanbanFlow is a task management tool built with the MERN stack. It provides a drag-and-drop board with columns like \"To Do,\" \"In Progress,\" and \"Completed,\" along with authentication, role-based access, and file attachments.",
        techStack: "ReactJS, Redux, TypeScript, NodeJS, ExpressJS, MongoDB, Multer, JWT",
        implementation: "Developed secure APIs, role-based access control, and data models on the backend using NodeJS, Express, and MongoDB. Implemented a type-safe frontend with React, Redux, and TypeScript. Integrated Multer for file uploads."
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
        about: "Learnblock is an educational site that demonstrates blockchain concepts like hashing, block creation, peer chains, and Proof of Work. It makes blockchain fundamentals interactive and visual.",
        techStack: "HTML, CSS, ReactJS",
        implementation: "Built interactive simulations of hashing, block creation, and Proof of Work. Designed visual step-by-step blockchain illustrations for easy understanding."
    },
    {
        id: 2,
        title: "MovieBase",
        time: "01/2022 - 03/2022",
        githubUrl: "https://github.com/SatamSai/MovieBase2022",
        websiteUrl: "https://moviebase22.netlify.app/",
        logoUrl: MovieBaseLogo,
        pictures: [
            Movie_1,
            Movie_2,
            Movie_3
        ],
        about: "MovieBase is a ReactJS app integrated with TMDB API to explore movies and TV shows. It includes trending, top-rated, and upcoming titles with trailers, cast, and collections.",
        techStack: "ReactJS, TMDB API, HTML, CSS",
        implementation: "Connected to TMDB API for content. Built reusable components for movie/show pages with cast, trailers, and related titles. Implemented responsive search and filter features."
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
        about: "A retro-themed portfolio designed like Windows 95, featuring interactive apps such as Notepad, Minesweeper, PDF viewer, browser, and email client. Includes an installation wizard walkthrough.",
        techStack: "ReactJS, Styled Components, HTML, CSS",
        implementation: "Implemented draggable desktop icons, interactive windows, and functional apps. Added an installation wizard for onboarding. Ensured responsive design while maintaining Windows 95 aesthetics."
    }
]

export const experiences = [
    {
        id: 1,
        logo: TorusImgUrl,
        title: "Software Engineer",
        subTitle: "01/2025 – Present | Torus Digital, Mumbai",
        icon: React.createElement(Work, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Built Mutual Fund and Stocks frontend apps using React, TypeScript, Vite, Tailwind, and Zustand for high-traffic financial services.",
            "Led Micro Frontend (MFE) adoption with Module Federation, reducing feature development time by ~70%.",
            "Engineered real-time features with WebSockets, Shared Workers, and event buses for efficient cross-tab communication.",
            "Automated CI/CD pipelines with Jenkins, Podman, Traefik, and Nginx, cutting deployment effort from hours to minutes.",
            "Implemented unit testing to ensure reliability and maintain code quality."
        ]
    },
    {
        id: 2,
        logo: SurrealImgUrl,
        title: "Frontend Developer",
        subTitle: "02/2024 – 12/2024 | Surreal Events, Remote",
        icon: React.createElement(Work, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Developed responsive metaverse platform UI for clients like Emirates and Sephora using ReactJS, Redux, and SCSS.",
            "Built Meeting Rooms with WebRTC for audio, video, and screen sharing.",
            "Integrated Sentry with Slack for error monitoring, reducing debugging time by 40%.",
            "Improved API performance by reusing Redux store data, cutting 40% of redundant API calls.",
            "Conducted frontend testing with Jest and React Testing Library.",
            "Integrated game client communication via game signals."
        ]
    },
    {
        id: 3,
        logo: DecimalImgUrl,
        title: "Software Development Engineer",
        subTitle: "07/2022 – 01/2024 | Decimal Point Analytics, Mumbai",
        icon: React.createElement(Work, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Revamped trading chart platform UI, adding financial indicators, drawing tools, and a news section with TypeScript and HTML Canvas.",
            "Improved ETL pipeline performance by 60% using Azure Databricks, PySpark, and Delta tables with parallel processing."
        ]
    },
    {
        id: 4,
        logo: MumbaiUniversityUrl,
        title: "BE in Computer Science",
        subTitle: "06/2018 – 06/2022 | Mumbai University",
        icon: React.createElement(School, { style: { fontSize: '15px', color: '#0F0' } }),
        description: [
            "Graduated with a CGPA of 8.62 from MCT’s Rajiv Gandhi Institute of Technology.",
            "Built projects in blockchain, web development, and data processing.",
            "Strengthened foundations in software development, algorithms, and database management."
        ]
    }
]

export const skills = {
    frontend: [
        'HTML', 'CSS', 'SCSS', 'Tailwind', 'Git', 'Figma',
        'JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'Zustand',
        'WebRTC', 'Webpack', 'Babel', 'Jest', 'React Testing Library', 'Postman'
    ],
    backend: ['NodeJS', 'ExpressJS', 'Mongoose', 'REST APIs', 'JWT', 'Socket.io'],
    devops: ['Jenkins', 'Docker', 'Podman', 'Traefik', 'Nginx', 'CI/CD'],
    data: ['Azure Databricks', 'PySpark', 'Delta Tables']
}
