import {
  coherent,
  meta,
  mias,
  shopify,
  starbucks,
  telekom,
  tesla,
} from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  c,
  figma,
  canva,
  matlab,
  arduino,
  word,
  powerpoint,
  excel,
  vscode,
  twitter,
  x,
  amazon,
  tomato,
  pocketalk,
  amazonMobile,
  foodDelivery,
  sport,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: c,
    name: 'C',
    type: 'Embedded',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: matlab,
    name: 'Matlab',
    type: 'Control System',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: figma,
    name: 'Figma',
    type: 'Design',
  },
  {
    imageUrl: canva,
    name: 'Canva',
    type: 'Design',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
  {
    imageUrl: vscode,
    name: 'Visual Studio Code',
    type: 'IDE',
  },
  {
    imageUrl: arduino,
    name: 'Arduino',
    type: 'Electronic System',
  },
  {
    imageUrl: word,
    name: 'Microsoft Word',
    type: 'Version Control',
  },
  {
    imageUrl: powerpoint,
    name: 'Microsoft PowerPoint',
    type: 'Version Control',
  },
  {
    imageUrl: excel,
    name: 'Microsoft Excel',
    type: 'Version Control',
  },
];

export const experiences = [
  {
    title: 'Network Maintenance and Operation Executive',
    company_name: 'Telekom Malaysia',
    icon: telekom,
    iconBg: '#accbe1',
    date: 'Jun 2021 - Present',
    points: [
      'Supervises end line distribution from exchange towers to customer premises, ensuring efficient and timely service delivery.',
      'Coordinates teams to address customer requests promptly, identifying issues before assigning tasks to the technicians in charge.',
      'Performs regular inspections and quality checks of work done by TM contractors at customer sites, ensuring adherence to standards and customer satisfaction.',
      'Conducts in-depth research on Optical Network Units (ONUs) to identify recurring issues, developing and implementing strategies to reduce failure rates and improve network reliability.',
      'Actively engages with customers to address their concerns and issues, enhancing overall customer experience and satisfaction.',
      'Monitors network performance metrics, identifying areas for improvement and implementing corrective actions to maintain optimal service levels.',
    ],
  },
  {
    title: 'Test Engineer',
    company_name: 'Coherent',
    icon: coherent,
    iconBg: '#aac9ff',
    date: 'Nov 2020 - May 2021',
    points: [
      'Managed Longwave Production Testers and performed preventive maintenance to ensure optimal performance and longevity.',
      'Led a testers relocation project, coordinating with cross-functional teams to complete the task efficiently and on schedule.',
      'Conducted detailed data processing and failure analysis, delivering weekly yield reports to production and management.',
      'Updated test plans for various testing processes, ensuring alignment with quality standards, and monitored Statistical Process Control (SPC) to maintain process integrity.',
      'Initiated and managed a project aimed at reducing product rejects by conducting experiments and analyzing data from new tester hotplates to identify and implement improvements.',
    ],
  },
  {
    title: 'Engineering Intern',
    company_name: 'Mias Global',
    icon: mias,
    iconBg: '#bababf',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Took part in the wire trunking process for Press Automation Transfer Robots, ensuring efficient setup.',
      'Interpreted ladder logic diagrams to guide precise panel wiring for the control panels.',
      'Played a key role in disassembling and assembling sealant pumps during maintenance, following mechanical drawings to ensure precise and effective servicing.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: x,
    theme: 'btn-back-black',
    name: 'X (Twitter) Clone',
    description:
      'Developed a full-stack web app that replicates key features of X (Twitter), including post creation, deletion, commenting, liking, and user following. Implemented secure authentication with JWT for login and registration. Enabled users to edit their profiles, including cover and profile images, with Cloudinary handling image uploads. Leveraged React Query for optimized data fetching and caching, and integrated real-time notifications for user interactions.',
    link: 'https://twitter-clone-l2ip.onrender.com',
    github:
      'https://github.com/aliffashraff/Fullstack-MERN-Projects/tree/main/Twitter-Clone-App',
  },
  {
    iconUrl: foodDelivery,
    theme: 'btn-back-red',
    name: 'Food Delivery Web App',
    description:
      'Created a comprehensive food ordering platform using the MERN stack, featuring both a frontend and an admin panel. The admin panel enables management of food items, order status updates, and order tracking. Integrated JWT for secure user authentication, and implemented shopping cart and checkout functionalities with Stripe for payment processing. Utilized Multer for handling image uploads, and ensured a responsive, user-friendly design throughout the application.',
    link: 'https://food-delivery-frontend-kht6.onrender.com',
    github:
      'https://github.com/aliffashraff/Fullstack-MERN-Projects/tree/main/Food-Delivery-Web-App',
  },
  {
    iconUrl: amazonMobile,
    theme: 'btn-back-yellow',
    name: 'Amazon Clone',
    description:
      'Developed a frontend-only replica of Amazon, focusing on a responsive and interactive user interface. Features include product listings, search functionality, and a shopping cart for managing and reviewing items. Added an order history feature for viewing past purchases and an order tracking feature to enhance the user experience. Designed the layout to closely resemble the Amazon platform, without backend integration.',
    link: 'https://amazon-clone-9m8m.onrender.com',
    github:
      'https://github.com/aliffashraff/FCC-Legacy-ResponsiveWeb-Design/tree/main/Product%20Landing%20Page',
  },
  {
    iconUrl: pocketalk,
    theme: 'btn-back-pink',
    name: 'Pocketalk Landing Page',
    description:
      'Created a visually engaging product landing page using HTML and CSS. Focused on delivering a clean, responsive design to effectively showcase the Pocketalk product and its features, enhancing user engagement through a well-structured layout.',
    link: 'https://pocketalk-landing-page.onrender.com',
    github:
      'https://github.com/aliffashraff/FCC-Legacy-ResponsiveWeb-Design/tree/main/Product%20Landing%20Page',
  },
  {
    iconUrl: sport,
    theme: 'btn-back-red',
    name: 'Sport Facility Booking System',
    description:
      "Conducted comprehensive research to evaluate and enhance the user experience of a booking system prototype designed in Figma. Improved the user experience for UPM's Sport Facilities and Equipment Booking System using the BASIC UX Framework. Applied Design Thinking methods to ensure an intuitive and user-friendly design. Performed UX testing with the BASIC UX Framework checklist and User Experience Questionnaire (UEQ). Recognized with the Best Paper Award at the 6th International Conference on Interdisciplinary Computer Science and Engineering 2023.",
    link: 'https://www.figma.com/proto/3UiXp5Rtiod9s1qedxNiiG/Sport-Online-System?node-id=129-92&starting-point-node-id=129%3A92&t=bOOn1jftaRRCBUVu-1',
  },
];
