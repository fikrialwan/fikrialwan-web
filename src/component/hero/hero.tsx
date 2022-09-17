import { css } from "@emotion/css";
import { HeroContentType } from "src/data";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";

interface HeroPropsType {
  isHome: Boolean;
  data: HeroContentType;
}

export default function Hero({ isHome, data }: HeroPropsType) {
  if (isHome) {
    const {
      greeting,
      title: titles,
      desc,
      descHighlight,
      img: { url: imgUrl, alt: imgAlt },
      button,
    } = data;
    const { title: buttonTitle, link: buttonLink } = button!;
    return (
      <section
        className={css`
          display: flex;
          flex-direction: column-reverse;
          min-height: 100vh;
          align-items: center;
          justify-items: center;
          gap: 10vw;
          margin-top: 60px;
          ${mq[0]} {
            flex-direction: row;
          }
        `}
      >
        <article
          className={css`
            flex: 4;
          `}
        >
          <p
            className={css`
              font-family: ${theme.fonts.blinker};
              color: ${theme.colors.grey};
              font-size: 24px;
              font-weight: 400;
            `}
          >
            {greeting}
          </p>
          {titles.split("\n").map((title: string, key: number) => (
            <p
              className={css`
                font-family: ${theme.fonts.blinker};
                color: ${theme.colors.white};
                font-size: 68px;
                font-weight: 600;
              `}
              key={key}
            >
              {title}
            </p>
          ))}
          <p
            className={css`
              font-family: ${theme.fonts.blinker};
              font-weight: 400;
              font-size: 36px;
              color: ${theme.colors.white};
              margin-bottom: 25px;
            `}
          >
            {desc}{" "}
            <span
              className={css`
                color: ${theme.colors.blue};
              `}
            >
              {descHighlight}
            </span>
          </p>
          <a
            href={buttonLink}
            className={css`
              font-family: ${theme.fonts.blinker};
              display: inline-block;
              text-decoration: none;
              color: ${theme.colors.black};
              padding: 10px 20px;
              background-color: ${theme.colors.blue};
              border-radius: 50px;
              font-weight: 400;
              font-size: 20px;
              transition: all 0.5s ease;
              &:hover {
                transform: scale(1.05);
              }
            `}
            target="_blank"
            rel="noreferrer noopener"
          >
            {buttonTitle}
          </a>
        </article>
        <div
          className={css`
            flex: 3;
            width: 100%;
          `}
        >
          <img
            src={imgUrl}
            alt={imgAlt}
            className={css`
              height: 60vh;
              width: 100%;
              object-fit: contain;
              object-position: center;
              ${mq[0]} {
                height: auto;
              }
            `}
          />
        </div>
      </section>
    );
  } else {
    const {
      title: titles,
      desc,
      img: { url: imgUrl, alt: imgAlt },
    } = data;
    return (
      <section>
        <article>
          {titles.split("\n").map((title: string, key: number) => (
            <p key={key}>{title}</p>
          ))}
          <p>{desc}</p>
        </article>
        <div>
          <img src={imgUrl} alt={imgAlt} />
        </div>
      </section>
    );
  }
}
