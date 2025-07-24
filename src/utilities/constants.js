import project1Image from '../assets/projects/workoutwithBro.png';
import project2Image from '../assets/projects/Shopeeng.png';
import project3Image from '../assets/projects/LockedIn.png';
import html from '../assets/techStack/html.svg';
import css from '../assets/techStack/css.svg';
import js from '../assets/techStack/js.svg';
import react from '../assets/techStack/react.svg';
import tailwind from '../assets/techStack/tailwind.svg';
import linkedinIcon from '../assets/Socials/linkedinIcon.svg';
import gitlab from '../assets/Socials/gitlab.svg';
import gmail from '../assets/Socials/gmail.svg';

export const projects =  [
    {
        id: 'P1',   
        title: 'workoutwith Bro',
        type: 'Workout Routine App',   
        gitLab: 'https://gitlab.com/uplift-code-camp/web-dev-pro/wdp-batch-5/DJ/projects/-/tree/js-api-app',
        website: 'https://workoutwithbro.netlify.app/',
        image : project1Image,
        techstacks: ['HTML', 'CSS', 'JavaScript',],
        description : 'A fitness companion app that helps users discover, browse, and learn different workouts based on muscle groups or goals. Includes an integrated API for dynamic exercise data.'
    },
    {
        id: 'P2',   
        title: 'Shopeeng!',
        type: 'E-commerce Product Showcase', 
        gitLab: 'https://gitlab.com/uplift-code-camp/web-dev-pro/wdp-batch-5/DJ/projects/-/tree/react-ecommerce-app?ref_type=heads',
        website: 'https://shopeeng.netlify.app/',
        image : project2Image,
        techstacks: ['HTML', 'CSS', 'JavaScript', 'REACT'],
        description : 'An e-commerce website built to simulate a product catalog with categories and detailed product views. Designed with UX in mind and responsive behavior as a priority.'
    },
    {
        id: 'P3',   
        title: 'LockedIn',
        type: 'Job Listing Aggrgator Web App (mobile-first)',  
        gitLab: 'https://gitlab.com/uplift-code-camp/web-dev-pro/wdp-batch-5/DJ/projects/-/tree/react-app?ref_type=heads',
        website: 'https://lockedin01.netlify.app/',
        image : project3Image,
        techstacks: ['HTML', 'CSS', 'JavaScript', 'REACT', 'TAILWIND'],
        description : 'A sleek job aggregator that pulls listings from multiple mock APIs, helping users browse job opportunities by filtering roles based on job type and remote flexibility.'
    },
];

export const techStacks = [
    {
        id: 'TS1',
        name: 'HTML5',
        image: html,
    },
    {
        id: 'TS2',
        name: 'CSS3',
        image: css,
    },
    {
        id: 'TS3',
        name: 'JavaScript',
        image: js,
    },
    {
        id: 'TS4',
        name: 'ReactJS',
        image: react,
    },
    {
        id: 'TS5',
        name: 'Tailwind',
        image: tailwind,
    }
];

export const socials = [
    {
        id: 'S1',
        name: 'LinkedIn',
        image: linkedinIcon,
        link: 'https://www.linkedin.com/in/david-joshua-ingua-53a5ab185'
    },
    {
        id: 'S2',
        name: 'Gitlab',
        image: gitlab,
        link: 'https://gitlab.com/dashboard/projects'
    },
    {
        id: 'S3',
        name: 'Gmail',
        image: gmail,
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=inguadavidjoshua@gmail.com'
    },
]

export const jobs = [
   
    {
        id: 'E1',
        role: 'Front-end Developer',
        company: 'Uplift Code Camp',
        tenure: 'July 2025',
        description: 'Took on the challenge of transitioning into tech by completing a rigorous 5-month full-time bootcamp focused on HTML, CSS, JavaScript, ReactJS, and Git. I built responsive, accessible projects from scratch, strengthened my problem-solving skills through JavaScript, and learned to think like a developer. Throughout the bootcamp, I collaborated with peers on Git-managed projects, simulated real-world workflows, and pushed through personal doubts and plateaus, ultimately developing the confidence and skill set to pursue a full-time career in web development. This journey wasn’t easy, but it sharpened my grit & deepened my curiosity.',
    
    },
    {
        id: 'E2',
        role: 'Sales Executive',
        company: 'Filinvest Corp - Quest Hotel',
        tenure: '2022-2023',
        description: 'Handled top-tier government and private accounts, consistently exceeding sales quotas through tailored client solutions and strategic account management. I led the creation of customized proposals and contracts to meet unique client needs, and developed strong communication skills by working closely with high-level decision-makers.This role strengthened my ability to work under pressure, hit revenue targets, and build long-term business relationships, which are transferable skills I bring with me into client-facing roles in tech.',
    },
    {
        id: 'E3',
        role: 'Reservation Sales Specialist',
        company: 'Intercontinental Hotels Group',
        tenure: '2021-2022',
        description: 'Delivered best-in-class reservation experiences while juggling multiple web-based systems and fast-paced sales targets. Routinely exceeded quotas and helped boost guest satisfaction through efficient, accurate service.This position sharpened my multitasking skills, attention to detail, and ability to handle high-pressure environments — essential traits in both tech support and customer-centric software development.'
    },
    {
        id: 'E4',
        role: 'Guest Service Associate',
        company: 'Discovery Primea',
        tenure: '2018-2020',
        description: 'Handled guest transactions and front desk operations in a 5-star hotel, ensuring smooth check-ins, accurate billing, and a premium customer experience. Regularly resolved guest concerns with professionalism and contributed to higher occupancy through efficient handling of reservation inquiries. Developed strong attention to detail, communication, and problem-solving skills in a fast-paced, high-pressure environment.',
    },
    
]