export const profile = {
  name: 'Eglė Sabaliauskaitė',
  role: 'AI Engineer',
  location: 'Linz, Austria',
  github: 'https://github.com/esabaliauskaite',
  linkedin: 'https://www.linkedin.com/in/eglesabaliauskaite/',
  cv: 'CV_Egle_Sabaliauskaite.pdf',
};

/** Resolve public assets for the configured Vite base path. */
export const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const experience = [
  {
    period: 'Sep 2026 – Present',
    role: 'AI Engineer',
    company: 'Headquarter Web 3.0 GmbH',
    location: 'Linz, Austria',
    current: true,
    details: [
      'Develop, implement, test and optimise AI-powered automation solutions using no-code and low-code platforms to streamline business processes.',
      'Support AI projects through architecture development, codebase maintenance, quality assurance and technical documentation.',
    ],
  },
  {
    period: 'Nov 2024 – Oct 2025',
    role: 'Senior Software Engineer',
    company: 'MAIT Austria GmbH',
    location: 'Linz, Austria',
    details: [
      'Led technical workshops and product demonstrations for AR and IoT solutions, translating client requirements into testable proof-of-concept applications.',
      'Worked with clients and cross-functional teams to refine solution concepts through hands-on testing, feedback and iteration.',
    ],
  },
  {
    period: 'Jul 2023 – Nov 2024',
    role: 'Software Developer · IoT & AR',
    company: 'MAIT Austria GmbH',
    location: 'Linz, Austria',
    details: [
      'Designed and implemented user interfaces and operational dashboards for an industrial IoT platform, making shop-floor and workflow data easier to interpret and use.',
      'Evaluated IoT, AR and automation technologies to support client digital transformation initiatives and guide proof-of-concept development.',
    ],
  },
  {
    period: 'Jan 2022 – Feb 2023',
    role: 'Software Engineer',
    company: 'NTS Retail KG',
    location: 'Linz, Austria',
    details: [
      'Modernised Angular applications through framework upgrades and responsive UI improvements across screen sizes.',
      'Delivered frontend functionality in a retail software environment and supported selected backend development tasks.',
    ],
  },
  {
    period: 'Jul 2021 – Dec 2021',
    role: 'Frontend Developer',
    company: 'Johannes Kepler University',
    location: 'Linz, Austria · Fixed-term project',
    details: [
      'Maintained and enhanced legacy React applications, with a focus on frontend performance and usability.',
      'Delivered frontend work within an Agile sprint-based team and supported backend development where required.',
    ],
  },
  {
    period: 'Jun 2020 – Sep 2020',
    role: 'Junior Frontend Developer',
    company: 'Softrobotics UAB',
    location: 'Vilnius, Lithuania',
    details: [
      'Designed and developed custom WordPress websites from client requirements, delivering user-friendly solutions aligned with business needs.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'AI & Automation',
    description: 'Tools and techniques used in my current AI work.',
    skills: ['Python', 'Langdock', 'Docker'],
  },
  {
    title: 'Software Development',
    description: 'The foundation behind my applications and interfaces.',
    skills: ['TypeScript', 'JavaScript', 'React', 'Angular', 'Tailwind CSS', 'SQL'],
  },
  {
    title: 'Engineering Practice',
    description: 'Implementation, verification and ongoing maintenance.',
    skills: ['Git', 'Testing', 'Quality assurance', 'Technical documentation'],
  },
  {
    title: 'Product & Collaboration',
    description: 'From understanding requirements to testing an idea.',
    skills: ['Technical workshops', 'Proofs of concept', 'Agile delivery', 'Figma', 'Data visualisation'],
  },
];

export const education = [
  {
    degree: 'MSc Interactive Media',
    institution: 'University of Applied Sciences Upper Austria',
    detail: 'Hagenberg Campus',
    period: '2020 – 2022',
    thesis: 'Interaction techniques for airborne light fields using web-based rendering',
  },
  {
    degree: 'BSc Multimedia Design',
    institution: 'Vilnius Gediminas Technical University',
    detail: 'Erasmus semester in Hagenberg, 2019',
    period: '2016 – 2020',
    thesis: 'Website about Lithuanian castles and forts, including a Google Maps API map',
  },
];

export const languages = [
  { language: 'Lithuanian', level: 'Native' },
  { language: 'English', level: 'C1' },
  { language: 'German', level: 'A2 Certified · B1.1 Course Completed' },
];
