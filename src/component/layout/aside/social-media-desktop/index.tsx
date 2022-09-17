import { css } from "@emotion/css";
import mq from "src/styles/breakpoints";
import github from "src/component/ui/images/github.png";
import linkedin from "src/component/ui/images/linkedin.png";
import theme from "src/styles/theme";

export default function SocialMediaDesktop() {
  return (
    <aside
      className={css`
        display: none;
        ${mq[1]} {
          display: flex;
        }
      `}
    >
      <address
        className={css`
          left: 50px;
          bottom: 0;
          position: fixed;
          height: 50vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
          ${mq[2]} {
            left: 75px;
          }
        `}
      >
        <a
          href="https://github.com/fikrialwan"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={github} alt="Github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/fikri-alwan/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={linkedin} alt="Linkedin icon" />
        </a>
        <div
          className={css`
            flex: 1;
            width: 1px;
            background-color: ${theme.colors.white};
          `}
        />
      </address>
      <address
        className={css`
          right: 50px;
          bottom: 0;
          position: fixed;
          height: 50vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
          align-items: center;
          ${mq[2]} {
            right: 75px;
          }
        `}
      >
        <a
          href="mailto:fikriar93@gmail.com"
          className={css`
            font-size: 20px;
            font-weight: 600;
            font-style: normal;
            text-decoration: none;
            color: ${theme.colors.white};
            writing-mode: vertical-rl;
            text-orientation: mixed;
          `}
        >
          fikriar93@gmail.com
        </a>
        <div
          className={css`
            flex: 1;
            width: 1px;
            background-color: ${theme.colors.white};
          `}
        />
      </address>
    </aside>
  );
}
