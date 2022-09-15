import { css } from "@emotion/css";
import theme from "src/styles/theme";
import Copyright from "./copyright";

export default function Footer() {
  return (
    <footer
      className={css`
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
      `}
    >
      <Copyright />
    </footer>
  );
}
