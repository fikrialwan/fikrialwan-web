import profileImg from "src/component/ui/images/profile.webp";
import aboutImgOne from "src/component/ui/images/about-image-1.webp";
import aboutImgTwo from "src/component/ui/images/about-image-2.webp";

import { ImgType } from "src/util/types";

export interface AboutDataType {
  img: ImgType;
  desc: string;
  techStack?: string[];
}

export const aboutData: AboutDataType[] = [
  {
    img: {
      url: aboutImgOne,
      alt: "Equator monument photo",
    },
    desc: "A erat nam at lectus urna duis convallis convallis. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Neque vitae tempus quam pellentesque nec nam aliquam. Vitae sapien pellentesque habitant morbi tristique. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Sed faucibus turpis in eu mi bibendum neque. Massa placerat duis ultricies lacus sed turpis tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique et egestas quis ipsum suspendisse. Maecenas pharetra convallis posuere morbi. Quisque sagittis purus sit amet volutpat consequat mauris. Sed viverra ipsum nunc aliquet. Tellus at urna condimentum mattis pellentesque. Non blandit massa enim nec dui nunc mattis enim. Egestas integer eget aliquet nibh praesent tristique magna sit. Aliquam ultrices sagittis orci a scelerisque. Sagittis aliquam malesuada bibendum arcu vitae elementum.",
  },
  {
    img: {
      url: aboutImgTwo,
      alt: "Tanjungpura university photo",
    },
    desc: "A erat nam at lectus urna duis convallis convallis. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Neque vitae tempus quam pellentesque nec nam aliquam. Vitae sapien pellentesque habitant morbi tristique. Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Sed faucibus turpis in eu mi bibendum neque. Massa placerat duis ultricies lacus sed turpis tincidunt. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tristique et egestas quis ipsum suspendisse. Maecenas pharetra convallis posuere morbi. Quisque sagittis purus sit amet volutpat consequat mauris. Sed viverra ipsum nunc aliquet. Tellus at urna condimentum mattis pellentesque. Non blandit massa enim nec dui nunc mattis enim. Egestas integer eget aliquet nibh praesent tristique magna sit. Aliquam ultrices sagittis orci a scelerisque. Sagittis aliquam malesuada bibendum arcu vitae elementum.",
  },
];

export const aboutHomeData: AboutDataType = {
  img: {
    url: profileImg,
    alt: "Fikri's profile photo",
  },
  desc: "Hello! My name is Fikri Alwan Ramadhan and I love programming. I am an enthusiast of web development, especially front end web development.\nI started to learn programming when I am studying at Tanjungpura University, then I focus to learn front-end web development when my senior in my college gives me the challenge to learn React in 1 week. After that, I started to learn things related to React and front-end web development.",
  techStack: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Git",
    "Figma",
    "TypeScript",
  ],
};
