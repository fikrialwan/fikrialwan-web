export interface HeroButtonType {
  title: string;
  link: string;
}

export interface HeroContentType {
  greeting?: string;
  title: string;
  desc: string;
  img: string;
  descHighlight?: string;
  button?: HeroButtonType;
}

export interface HeroDataType {
  home: HeroContentType;
  about: HeroContentType;
  projects: HeroContentType;
}

export const heroData: HeroDataType = {
  home: {
    greeting: "Hello,",
    title: "I'm Fikri Alwan \nRamadhan'",
    desc: "a",
    descHighlight: "Front End Web Developer",
    img: "hero-home-illustration.webp",
    button: {
      title: "Download CV",
      link: "https://drive.google.com/u/0/uc?id=1Cavak6L3SYhY3TvOMqyrKtvgWg_odAj7&export=download",
    },
  },
  about: {
    title: "Hello,\nI'm Fikri Alwan Ramadhan,\nI'm a Front End Web Developer",
    desc: "I'm a developer who enthusiasm for Javascript, Typescript and React.",
    img: "hero-about-illustration.webp",
  },
  projects: {
    title: "This is my project,",
    desc: "You can see all of my project that I built, contributed, or designed using various technologies.",
    img: "hero-project-illustration.webp",
  },
};
