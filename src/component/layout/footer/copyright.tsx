import { css } from "@emotion/css";
import theme from "src/styles/theme";

const linkStyle: string = css`
  text-decoration: none;
  color: ${theme.colors.blue};
  font-family: ${theme.fonts.inter};
`;

export default function Copyright() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
        max-width: 1400px;
        margin: 0 auto;
      `}
    >
      <p
        className={css`
          margin-top: 0;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 10px;
          color: ${theme.colors.grey};
          text-align: center;
        `}
      >
        Inspired by{" "}
        <a
          href="https://kentcdodds.com"
          target="_blank"
          rel="noreferrer noopener"
          className={linkStyle}
        >
          https://kentcdodds.com
        </a>
        ,{" "}
        <a
          href="https://sonnylab.com"
          target="_blank"
          rel="noreferrer noopener"
          className={linkStyle}
        >
          https://sonnylab.com
        </a>{" "}
        and{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer noopener"
          className={linkStyle}
        >
          https://brittanychiang.com
        </a>
      </p>
      <p
        className={css`
          font-size: 18px;
          font-weight: 400;
          margin-bottom: 20px;
          margin-top: 0;
          text-align: center;
        `}
      >
        Designed and built by{" "}
        <a
          href="https://www.linkedin.com/in/fikri-alwan/"
          target="_blank"
          rel="noreferrer noopener"
          className={linkStyle}
        >
          Fikri Alwan Ramadhan
        </a>
      </p>
    </div>
  );
}
