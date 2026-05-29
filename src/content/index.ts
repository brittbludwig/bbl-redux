import { SectionContent } from "$types";

const content: SectionContent[]  = [
  {
    name: "Intro",
    id: "section-1",
    header: "Hi there.",
    content: [
      "My name is Brittany.",
      "I'm a front end engineer living in Los Angeles with 10 years industry experience.",
    ],
    formText: "What's your name?",
  },
  {
    name: "Resume",
    id: "section-2",
    header: "Places I've worked",
    formText: "What is your job?",
    content: [
      {
        place: "Bluebeam, Inc.",
        date: "05/2020 - Present",
      },
      {
        place: "ConsumerTrack",
        date: "10/2019 - 03/2020",
      },
      {
        place: "Deloitte Digital",
        date: "05/2016 - 10/2019",
      },
      {
        place: "Canyon Design Group",
        date: "10/2014 - 04/2016",
      },
      {
        place: "...and company",
        date: "03/2012 - 09/2014",
      },
      {
        place: "Tuesday Creative",
        date: "10/2009 - 03/2012",
      },
      {
        place: "Oskoui+Oskoui",
        date: "09/2007 - 12/2008",
      },
    ],
  },
  {
    name: "Skills",
    id: "section-3",
    header: "Skills",
    formText: "Filter",
    content: [
      {
        name: "JavaScript (ES6+)",
        type: "languages",
      },
      {
        name: "TypeScript",
        type: "languages",
      },
      {
        name: "HTML",
        type: "languages",
      },
      {
        name: "CSS / SCSS",
        type: "languages",
      },
      {
        name: "React",
        type: "frameworks",
      },
      {
        name: "Vue",
        type: "frameworks",
      },
      {
        name: "Angular",
        type: "frameworks",
      },
      {
        name: "Node.js",
        type: "frameworks",
      },
      {
        name: "GraphQL",
        type: "apis",
      },
      {
        name: "REST APIs",
        type: "apis",
      },
      {
        name: "WebSockets",
        type: "apis",
      },
      {
        name: "Google Maps API",
        type: "apis",
      },
      {
        name: "Stripe API",
        type: "apis",
      },
      {
        name: "Material UI",
        type: "libraries",
      },
      {
        name: "Bootstrap",
        type: "libraries",
      },
      {
        name: "GSAP",
        type: "libraries",
      },
      {
        name: "Salesforce",
        type: "platforms",
      },
      {
        name: "WordPress",
        type: "platforms",
      },
      {
        name: "Shopify",
        type: "platforms",
      },
      {
        name: "Agile / Scrum",
        type: "methodologies",
      },  
      {
        name: "SAFe Agilist",
        type: "certifications",
      },
      {
        name: "Git",
        type: "tools",
      },
      {
        name: "GitHub",
        type: "tools",
      },
      {
        name: "GitLab",
        type: "tools",
      },
      {
        name: "Jira",
        type: "tools",
      },
      {
        name: "Confluence",
        type: "tools",
      },
    ]
  },
  {
    name: "Current Work",
    id: "section-4",
    header: "Currently at Bluebeam",
    formText: "Pick an adjective",
    content: [
      "At Bluebeam, I led a major refactor of the Bluebeam Cloud web app architecture that reduced JavaScript loaded by the application by 50% and improved test performance from 96+ seconds with significant flakiness to 28 seconds with stable, reliable results. I also managed a 9-month migration and refactor of more than 35,000 lines of code that received special recognition from leadership. In addition, I built the UI for a new CMS in 4 weeks, rebuilding 30 screens on our component library, and implemented a new templating system that streamlined content creation across the platform. I currently co-lead the Front-End Guild, mentor interns, and have represented Bluebeam as a speaker at a “She Codes” event at California State Polytechnic University, Pomona.",
    ],
  },
  {
    name: "About",
    id: "section-5",
    header: "About Me",
    formText: "Pick a noun",
    content: [
      "I’m a self-taught front-end engineer with over a decade of experience building modern web applications, leading large-scale refactors, and improving performance across enterprise platforms and customer-facing products. Over the course of my career, I’ve worked with cross-functional teams to deliver scalable UI systems, CMS platforms, and complex application migrations for high-profile clients and products.I’m especially interested in front-end architecture, performance optimization, and creating maintainable systems that improve both developer experience and product reliability. Beyond engineering work, I enjoy helping shape engineering standards and collaboration across teams.",
    ],
  },
  {
    name: "Links",
    id: "section-6",
    header: "Links",
    formText: "Pick an adverb",
    content: [
      {
        url: "https://github.com/brittbludwig/",
        title: "GitHub",
      },
      {
        url: "https://www.linkedin.com/in/brittany-ludwig/",
        title: "LinkedIn",
      },
      {
        url: "https://brittanyludwig.com/2020",
        title: "2020 Portfolio",
      },
    ],
  },
  {
    name: "Contact",
    id: "section-7",
    header: "Contact",
    formText: "Pick an adjective",
    content: [
      "Hi! My name is",
      "I'm a",
      "I have a project that uses",
      "and I'd like to talk to you more about it.",
      "It should be really",
      "Please contact me via",
      "at",
    ],
  },
];

export default content;
