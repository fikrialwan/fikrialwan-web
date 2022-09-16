import { css } from "@emotion/css";
import LinkIcon from "src/component/ui/icons/link-icon";
import mq from "src/styles/breakpoints";
import github from "src/component/ui/images/github.png";
import linkedin from "src/component/ui/images/linkedin.png";
import theme from "src/styles/theme";
import { useEffect, useRef, useState } from "react";

export default function SocialMediaMobile() {
  const [isShowSosmed, setIsShowSosmed] = useState<Boolean>(false);
  const [isShowButtonSosmed, setIsShowButtonSosmed] = useState<Boolean>(true);

  let showSocialMedia: any;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll.current);
  }, []);

  const handleScroll = useRef(() => {});
  handleScroll.current = () => {
    clearTimeout(showSocialMedia);
    setIsShowButtonSosmed(false);
    setIsShowSosmed(false);

    showSocialMedia = setTimeout(() => {
      setIsShowButtonSosmed(true);
    }, 1500);
  };

  const handleToggleShowSosmed = () => {
    setIsShowSosmed((prev) => !prev);
  };

  return (
    <aside
      className={css`
        position: fixed;
        bottom: 25px;
        right: 25px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        transition: all 0.5s ease;
        transform: ${isShowButtonSosmed ? "scale(1)" : "scale(0)"};
        ${mq[0]} {
          right: 50px;
        }
        ${mq[1]} {
          display: none;
        }
      `}
    >
      <a
        href="https://github.com/fikrialwan"
        target="_blank"
        rel="noreferrer noopener"
        className={css`
          border: 5px solid ${theme.colors.white};
          background-color: ${theme.colors.blackGrey};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-in;
          ${isShowSosmed
            ? "transform: translateY(0)"
            : "transform: translateY(120px) rotate(360deg)"};
        `}
      >
        <img src={github} alt="Github icon mobile" />
      </a>
      <a
        href="https://www.linkedin.com/in/fikri-alwan/"
        target="_blank"
        rel="noreferrer noopener"
        className={css`
          border: 5px solid ${theme.colors.white};
          background-color: ${theme.colors.blackGrey};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease-in;
          ${isShowSosmed
            ? "transform: translateY(0)"
            : "transform: translateY(60px) rotate(180deg)"};
        `}
      >
        <img src={linkedin} alt="Linkedin icon mobile" />
      </a>
      <div
        className={css`
          background-color: ${theme.colors.blue};
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10;
        `}
        onClick={handleToggleShowSosmed}
      >
        <LinkIcon
          width={25}
          height={25}
          className={css`
            margin: 0 2px 2px 0;
          `}
        />
      </div>
    </aside>
  );
}
