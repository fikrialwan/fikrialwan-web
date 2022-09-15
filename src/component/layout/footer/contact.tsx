import { css } from "@emotion/css";
import getInTouchIlustration from "src/component/ui/images/get-in-touch-ilustration.webp";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";

export default function Contact() {
  return (
    <section
      className={css`
        display: flex;
        flex-direction: column-reverse;
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        ${mq[0]} {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10vw;
        }
      `}
    >
      <article
        className={css`
          display: flex;
          flex-direction: column;
          gap: 20px;
          ${mq[0]} {
            flex: 1;
          }
        `}
      >
        <h2
          className={css`
            font-family: ${theme.fonts.inter};
            margin: 0;
            font-size: 28px;
            font-weight: 500;
          `}
        >
          Get In Touch
        </h2>
        <p
          className={css`
            margin: 0;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: ${theme.colors.grey};
          `}
        >
          Currently looking for any new opportunities, my inbox is always open.
          Whether you have a question or just want to say hello, I'll try my
          best to get back to you!
        </p>
        <div>
          <a
            href="mailto:fikriar93@gmail.com"
            className={css`
              text-decoration: none;
              color: ${theme.colors.blue};
              border: 1px solid ${theme.colors.blue};
              border-radius: 25px;
              padding: 10px 20px;
              font-size: 16px;
              font-weight: 400;
              font-family: ${theme.fonts.inter};
              display: inline-block;
              transition: all 0.5s ease;
              &:hover {
                color: ${theme.colors.black};
                background-color: ${theme.colors.blue};
              }
            `}
          >
            Say hello
          </a>
        </div>
      </article>
      <div
        className={css`
          width: 100%;
          ${mq[0]} {
            flex: 1;
          }
        `}
      >
        <img
          src={getInTouchIlustration}
          alt="get in touch ilustration"
          className={css`
            width: 100%;
            object-fit: contain;
            object-position: center;
            ${mq[3]} {
              object-position: right;
            }
          `}
        />
      </div>
    </section>
  );
}
