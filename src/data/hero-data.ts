import { ButtonType, ImgType } from "src/util/types";
import homeIlustration from "src/component/ui/images/hero-home-illustration.webp";
import aboutIlustration from "src/component/ui/images/hero-about-illustration.webp";
import projectsIlustration from "src/component/ui/images/hero-project-illustration.webp";

export interface HeroContentType {
  greeting?: string;
  title: string;
  desc: string;
  img: ImgType;
  descHighlight?: string;
  button?: ButtonType;
}

export interface HeroDataType {
  home: HeroContentType;
  about: HeroContentType;
  projects: HeroContentType;
}

export const heroData: HeroDataType = {
  home: {
    greeting: "Hello,",
    title: "I'm Fikri Alwan\nRamadhan",
    desc: "a",
    descHighlight: "Front End Web Developer",
    img: {
      url: homeIlustration,
      alt: "Home hero illustration",
    },
    button: {
      title: "Download CV",
      link: "https://drive.google.com/file/d/1KX00Gngc-RwbtO0wtpyBV4T2eekAXIb3/view?usp=drive_link",
    },
  },
  about: {
    title: "Hello,\nI'm Fikri Alwan Ramadhan,\nI'm a Front End Web Developer",
    desc: "I'm a developer who enthusiasm for Javascript, Typescript and React.",
    img: {
      url: aboutIlustration,
      alt: "About hero illustration",
    },
  },
  projects: {
    title: "This is my project,",
    desc: "You can see all of my project that I built, contributed, or designed using various technologies.",
    img: {
      url: projectsIlustration,
      alt: "Project hero illustration",
    },
  },
};
