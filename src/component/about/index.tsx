import { css } from "@emotion/css";
import { AboutDataType } from "src/data";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";
import TechStack from "../tech-stack";
import MoreButton from "../ui/buttons/more-button";

interface AboutSectionProps {
  isHome: Boolean;
  data: AboutDataType;
}

export default function AboutSection({ isHome, data }: AboutSectionProps) {
  if (isHome) {
    return (
      <section
        className={css`
          display: flex;
          margin-top: 50px;
          flex-direction: column;
          min-height: 100vh;
          align-items: center;
          justify-items: center;
          gap: 10vw;
          ${mq[0]} {
            margin-top: 0;
            flex-direction: row;
          }
        `}
      >
        <div
          className={css`
            ${mq[0]} {
              flex: 2;
            }
          `}
        >
          <img
            className={css`
              border-radius: 18px;
              width: 100%;
            `}
            src={data.img.url}
            alt={data.img.alt}
          />
        </div>
        <article
          className={css`
            ${mq[0]} {
              flex: 3;
            }
          `}
        >
          <h2
            className={css`
              font-weight: 600;
              font-size: 32px;
              color: ${theme.colors.white};
            `}
          >
            About me
          </h2>
          {data.desc.split("\n").map((desc: string, key: number) => {
            return (
              <p
                key={key}
                className={css`
                  margin: 8px 0;
                  font-weight: 400;
                  font-size: 16px;
                  color: ${theme.colors.grey};
                `}
              >
                {desc}
              </p>
            );
          })}
          <p
            className={css`
              margin: 8px 0;
              font-weight: 400;
              font-size: 16px;
              color: ${theme.colors.grey};
            `}
          >
            Here are a few technologies I've been working with recently:
          </p>
          <TechStack data={data.techStack!} />
          <MoreButton title="More info" url="/about" />
        </article>
      </section>
    );
  } else {
    return (
      <section
        className={css`
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-items: center;
          gap: 10vw;
        `}
      >
        <div
          className={css`
            ${mq[0]} {
              flex: 2;
            }
          `}
        >
          <img
            src={data.img.url}
            alt={data.img.alt}
            className={css`
              border-radius: 18px;
              width: 100%;
            `}
          />
        </div>
        <article
          className={css`
            ${mq[0]} {
              flex: 3;
            }
          `}
        >
          {data.desc.split("\n").map((desc: string, key: number) => {
            return (
              <p
                className={css`
                  margin: 8px 0;
                  font-weight: 400;
                  font-size: 16px;
                  color: ${theme.colors.grey};
                `}
              >
                {desc}
              </p>
            );
          })}
        </article>
      </section>
    );
  }
}
