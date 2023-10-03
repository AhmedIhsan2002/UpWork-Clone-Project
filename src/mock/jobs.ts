interface JOBS {
  id: number;
  title: string;
  fixedPrice: string;
  hourly: string;
  projectLenth: string;
  projectType: string;
  price: string;
  proposal: string,
  description: string;
  skills: string[];
  expert: string;
  spent: string;
  location: string;
}

export const JOBS_DETAILS: JOBS[] = [
  {
    id: 1,
    title: "HTML Site Page Updates",
    fixedPrice: "Fixed-price - Expert - Est. Budget: $25 - Posted 16 hours ago",
    hourly: "",
    projectLenth: "",
    projectType: "One-time project",
    price: "$25.00",
    proposal: "50+",
    description:
      "We require an experienced upworker able to make some page updates to our HTML website. The tasks are very simple as shown below, but require a focused methodical approach. Work should take no more than 2 hours.",
    skills: ["HTML"],
    expert: "I am willing to pay higher rates for the most experienced freelancers",
    spent: "$4K+",
    location: 'Palestine',
  },
  {
    id: 2,
    title: "Front-end, js adjustment",
    fixedPrice: "Fixed-price - Expert - Est. Budget: $50 - Posted 1 hour ago",
    hourly: "",
    projectLenth: "",
    projectType: "One-time project",
    price: "$50.00",
    proposal: "10 to 15",
    description:
      "Description in ppt.Description in ppt.Description in ppt.Description in ppt.Description in ppt.Description in ppt.",
    skills: ["JavaScript", "HTML5", "CSS", "jQuery"],
    expert: "I am willing to pay higher rates for the most experienced freelancers",
    spent: "$100+",
    location: 'Saudi Arabia',
  },
  {
    id: 3,
    title: "Need to develop a simple landing page on HTML",
    fixedPrice: "Fixed-price - Entry level - Est. Budget: $10 - Posted 1 hour ago",
    hourly: "",
    projectLenth: "",
    projectType: "One-time project",
    price: "$10.00",
    proposal: "20 to 50",
    description:
      "Looking for an HTML Front End Developer to create a stunning and responsive landing page. Bring the design to life with our Figma design file and optimize user experience. HTML, CSS, and JavaScript skills required.",
    skills: ["HTML5", "CSS", "Ladning Page", "Web Development"],
    expert: "I am looking for freelancers with the lowest rates",
    spent: "$60K+",
    location: 'Türkiye',
  },
  {
    id: 4,
    title: "Web Developer for Single Page Project",
    fixedPrice: "Fixed-price - Intermediate - Est. Budget: $15 - Posted 1 hour ago",
    hourly: "",
    projectLenth: "",
    projectType: "One-time project",
    price: "$15.00",
    proposal: "10 to 15",
    description:
      "We are in search of a skilled web developer to collaborate on an exciting project involving the creation of a single web page with two tabs. As a developer, your primary responsibility will be to bring our design vision to life through coding while ensuring seamless functionality across various browsers and devices. We are seeking an individual with a strong background in front-end development, particularly in HTML, CSS, and JavaScript. Attention to detail and the ability to work independently are critical qualities for this project's success.",
    skills: ["JavaScript", "WordPress", "HTML", "CSS", "Web Development"],
    expert: "I am looking for a mix of experience and value",
    spent: "$50K+",
    location: 'France',
  },
  {
    id: 5,
    title: "Front developpment for Web2 website",
    fixedPrice: "Fixed-price - Intermediate - Est. Budget: $800 - Posted 47 minutes ago",
    hourly: "",
    projectLenth: "",
    projectType: "One-time project",
    price: "$15.00",
    proposal: "50+",
    description:
      "Hello, we are looking for a front-end dev to create the project interface. This one will have a landing page and about 10 annex pages. 5 we already have the landing page and an annex page created in HTML / CSS on a github to save time. We want it to be done in 7 days maximum so that our dev back can start with the integrations and so on. Thank you in advance for your application.",
    skills: ["React", "Website", "Node.js", "Web Development"],
    expert: "I am looking for a mix of experience and value",
    spent: "$40",
    location: 'Canada',
  },
  {
    id: 6,
    title: "Website Code Debug / Website Update",
    fixedPrice: '',
    hourly: "Less than 30 hrs/week",
    projectLenth: "Less than a month",
    projectType: "One-time project",
    price: "$15.0-$30.00",
    proposal: "20 to 50",
    description:
      "We are a new nonprofit with limited funding. We are updating our website and need some help debugging our new code. Our interns have returned to school and have limited time to fix. These should be relatively easy to do. There is one more update that we need, also, before relaunching. Looking for efficiency on a budget. Thank you for considering a company that does good.",
    skills: ["HTML", "CSS", "JavaScript", "Website", "Web Design"],
    expert: "I am looking for a mix of experience and value",
    spent: "$9K+",
    location: 'Morocco',
  },
  {
    id: 7,
    title: "Create my front end website for marketing technology / app",
    fixedPrice: 'Fixed-price - Intermediate - Est. Budget: $250 - Posted 3 hours ago',
    hourly: "",
    projectLenth: "",
    projectType: "Ongoing project",
    price: "$250.00",
    proposal: "20 to 50",
    description:
      "Hi would like to make a copy cat of this website : https://joinbrands.com/ and adapt it with my market",
    skills: ["Web Design", "HTML5", "Ladning Page", "Web Development"],
    expert: "I am looking for a mix of experience and value",
    spent: "$1K+",
    location: 'Jordan',
  },
  {
    id: 8,
    title: "WEB DEV WANTED FOR Blog Integration",
    fixedPrice: '',
    hourly: "Intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week - Posted 15 hours ago",
    projectLenth: "Less than a month",
    projectType: "One-time project",
    price: "$250.00",
    proposal: "20 to 50",
    description:
      "Looking for someone to create blog integration for: http://www.miamiwilds.com/ We would like a page for the blogs to be featured and a templatized process for creating and posting new blogs to the site. We would also like to add another Info page",
    skills: ["WordPress", "HTML5", "Web Design"],
    expert: "I am looking for a mix of experience and value",
    spent: "$2K+",
    location: 'Egypt',
  },
];
