import portfolioSiteImage from '../assets/PortfolioSiteImg.jpg';
import reactPlayground from '../assets/ReactPlaygroundImg.jpg';
import vpSites from '../assets/VPsites.jpg';
import tmRedesign from '../assets/ToughMudderMockup.jpg';
import toDoList from '../assets/ToDoList.jpg';

export const projects = [
    {
        id: "01",
        title: "Portfolio Website",
        description: "The site you're viewing right now! Designed and developed from scratch as both a personal brand and a technical showcase. Features custom components, responsive layouts, theme toggling, and smooth animations. Built to highlight my ability to blend front-end development with strong visual design.",
        image: portfolioSiteImage,
        tech: ["React", "CSS", "JavaScript", "Bootstrap 5"],
        links: [
            { id: "1", title: "GitHub", url: "https://github.com/Bateeters/BrianTeetersPortfolio" }
        ],
        imgPosition: "top center"    
    },
    {
        id: "02",
        title: "React Playground",
        description: "An ever growing collection of React exercises built to strengthen component-driven thinking, state management, props handling, and event-driven logic. This project demonstrates my ability to quickly translate requirements into functional features and showcases my dedication to both understanding and mastering React fundamentals.",
        image: reactPlayground,
        tech: ["React", "CSS", "JavaScript"],
        links: [
            { id: "1", title: "Live Demo", url: "https://react-exercises-pt2.pages.dev/" },
            { id: "2", title: "GitHub", url: "https://github.com/Bateeters/React-Exercises-Pt2" }
        ],
        imgPosition: "center 25%"
    },
    {
        id: "03",
        title: "Destination & Supplier Sites",
        description: "Professional website pages designed and developed for my current role. These pages are added to customer sites for destination and supplier promotion. Responsibilities included implementing responsive layouts and ensuring cross-browser performance. These projects highlight my ability to deliver production-ready code in a real-world environment.",
        image: vpSites,
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
        links: [
            { id: "1", title: "Dominica", url: "https://atlasandaura.vacationport.net/Info/Destination/DominicaHome" },
            { id: "2", title: "HX Expeditions", url: "https://atlasandaura.vacationport.net/Info/Supplier/HXExpeditions" },
            { id: "3", title: "Las Vegas", url: "https://atlasandaura.vacationport.net/Info/Destination/LasVegasHome" },
            { id: "4", title: "Luggage Forward", url: "https://atlasandaura.vacationport.net/Info/Supplier/LuggageForward" },
        ],
        imgPosition: "center"
    },
    {
        id: "04",
        title: "Tough Mudder Redesign",
        description: "A full mobile redesign project beginning with wireframes in Adobe XD and was then coded into a functional, responsive demo site. This project demonstrates my ability to merge creative UX/UI design with solid front-end development, translating visuals into user-friendly, accessible code.",
        image: tmRedesign,
        tech: ["HTML", "CSS", "Adobe XD"],
        links: [
            { id: "1", title: "Home Demo", url: "https://bateeters.github.io/ToughMudderRedesign/" },
            { id: "2", title: "XD Mobile Prototype", url: "https://xd.adobe.com/view/4eff75d1-a463-4755-a436-6658b4309afb-1bac/?fullscreen" },
            { id: "3", title: "GitHub", url: "https://github.com/Bateeters/ToughMudderRedesign" }
        ],
        imgPosition: "center 25%"
    },
    {
        id: "05",
        title: "To-Do List",
        description: "A simple to-do list application built with Python. While straightforward, it represents some of my first steps into backend development and full-stack thinking, laying the foundation for future work and projects with data handling, logic structuring, and server-side programming.",
        image: toDoList,
        tech: ["Python"],
        links: [
            { id: "1", title: "GitHub", url: "https://github.com/Bateeters/todo_list" }
        ],
        imgPosition: "center"
    }
];
