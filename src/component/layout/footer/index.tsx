import { css } from "@emotion/css";
import theme from "src/styles/theme";

export default function Footer() {
  return (
    <footer
      className={css`
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
      `}
    >
      ini halaman footer
    </footer>
  );
}
