export enum LinkProjects {
  github,
  link,
  figma,
}

export interface LinkProjectsType {
  url: string;
  type: LinkProjects;
}

export interface ProjectsDataType {
  name: string;
  desc: string;
  url: LinkProjectsType[];
  techStack: string[];
}

export const projectsData: ProjectsDataType[] = [
  {
    name: "Sipallima",
    desc: "Pallima village information system website",
    url: [
      {
        url: "https://github.com/fikrialwan/sipallima",
        type: LinkProjects.github,
      },
      {
        url: "https://sipallima.fikrialwan.com/",
        type: LinkProjects.link,
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Calci Indonesia",
    desc: "Build a webstie e-commerce for sport company named Calci Indonesia.",
    url: [
      {
        url: "https://github.com/warcodes/calciindonesia-web",
        type: LinkProjects.github,
      },
      {
        url: "https://calci.fikrialwan.com/",
        type: LinkProjects.link,
      },
      {
        url: "https://www.figma.com/file/JhCecvgczO1sDwAIgFqSSc/calciindonesia.com?node-id=7%3A2",
        type: LinkProjects.figma,
      },
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "SIBUCIN (Sistem Budidaya Cacing Nipah)",
    desc: "create a website for monitoring Nipah worm cultivation that is automatically connected to sensors.",
    url: [
      {
        url: "https://cacingnipah-2021.web.app/",
        type: LinkProjects.link,
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Firebase Realtime Database",
    ],
  },
  {
    name: "De-Clickbait",
    desc: "Build a website to detect clickbait news from news titles using Multinomial Naive Bayes algorithm.",
    url: [
      {
        url: "https://github.com/unknownunnamed/fe-declickbait",
        type: LinkProjects.github,
      },
      {
        url: "https://github.com/unknownunnamed/be-declickbait",
        type: LinkProjects.github,
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MySQLi",
      "Sequelize",
      "Bootstrap",
    ],
  },
  {
    name: "Web Label Clickbait",
    desc: "Build a website for my research to make it easier for volunteers to label clickbait news.",
    url: [
      {
        url: "https://github.com/unknownunnamed/fe-weblabel",
        type: LinkProjects.github,
      },
      {
        url: "https://github.com/unknownunnamed/be-weblabel",
        type: LinkProjects.github,
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MySQLi",
      "Sequelize",
      "Bootstrap",
    ],
  },
  {
    name: "Himaster",
    desc: "Build a webstie for Himpunan Mahasiswa Rekayasa Sistem Komputer (Himaster) but this project unfinished because the UI/UX designer stop design this website.",
    url: [
      {
        url: "https://himaster.web.app/",
        type: LinkProjects.link,
      },
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "PIFA",
    desc: "Build an android app named PIFA. PIFA is the latest and most up-to-date information platform, a netizen aspiration channel, and a digital marketer. The information barometer in Equator City was originally named Pontianak Informasi, with the site address pontianakinformasi.co.id.",
    url: [
      {
        url: "https://play.google.com/store/apps/details?id=id.co.pifa.pifa",
        type: LinkProjects.link,
      },
    ],
    techStack: ["Dart", "Flutter"],
  },
  {
    name: "Bersihberes",
    desc: "Build an android application with the name Bersihberes that can make users order laundry from home.",
    url: [
      {
        url: "https://play.google.com/store/apps/details?id=id.bersihberes.bersih_beres",
        type: LinkProjects.link,
      },
    ],
    techStack: ["Dart", "Flutter"],
  },
  {
    name: "E - SinaARE",
    desc: "Build an android app with the name E - SinaARE that can make the people of Bengkayang Regency able to express their aspirations quickly, easily and cheaply without knowing space and time and also of course very useful for DPRD members in supporting the tasks entrusted by the community to the DPRD Institution.",
    url: [
      {
        url: "https://play.google.com/store/apps/details?id=bengkayang.dprd.sinaare",
        type: LinkProjects.link,
      },
    ],
    techStack: ["Dart", "Flutter"],
  },
];
