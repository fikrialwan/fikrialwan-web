import { css } from "@emotion/css";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";
import Contact from "./contact";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <footer
      className={css`
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        width: 100%;
        padding: 0 25px;
        ${mq[0]} {
          padding: 0 50px;
        }

        ${mq[1]} {
          padding: 0 100px;
        }

        ${mq[3]} {
          padding: 0 150px;
        }
      `}
    >
      <Contact />
      <Copyright />
    </footer>
  );
}
