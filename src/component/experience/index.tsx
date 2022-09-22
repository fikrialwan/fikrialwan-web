import { css } from "@emotion/css";
import { useState } from "react";
import { experienceData, ExperienceDataType } from "src/data/experience-data";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";

export default function Experience() {
  const [experienceKeyShow, setExperienceKeyShow] = useState<number>(0);

  const handleCompanyClick = (key: number) => {
    setExperienceKeyShow(key);
  };

  return (
    <section
      className={css`
        display: flex;
        flex-direction: column;
        justify-items: center;
        margin-bottom: 50px;
      `}
    >
      <h2
        className={css`
          font-weight: 600;
          font-size: 32px;
          color: ${theme.colors.white};
        `}
      >
        My Experience
      </h2>
      <article
        className={css`
          display: flex;
          flex-direction: column;
          gap: 10px;
          overflow: hidden;
          justify-items: center;
          align-items: center;
          ${mq[0]} {
            gap: 10vw;
            flex-direction: row;
          }
        `}
      >
        <section
          className={css`
            width: 100%;
            display: flex;
            gap: 20px;
            overflow-x: auto;
            flex-basis: 100px;
            &::-webkit-scrollbar {
              display: none;
            }
            ${mq[0]} {
              flex: 2;
              flex-direction: column;
              gap: 0;
            }
          `}
        >
          {experienceData.map(
            ({ company, position }: ExperienceDataType, key: number) => {
              return (
                <article
                  key={key}
                  onClick={() => handleCompanyClick(key)}
                  className={css`
                    flex-basis: 250px;
                    flex-grow: 0;
                    flex-shrink: 0;
                    cursor: pointer;
                    &:hover h3,
                    &:hover li {
                      color: ${theme.colors.white};
                    }
                    ${mq[0]} {
                      flex-basis: auto;
                    }
                  `}
                >
                  <h3
                    className={css`
                      font-size: 24px;
                      font-weight: 600;
                      margin: 0;
                      padding: 0;
                      transition: all 0.5ms ease-in;
                      color: ${key === experienceKeyShow
                        ? theme.colors.white
                        : theme.colors.grey};
                    `}
                  >
                    {company}
                  </h3>
                  <ul
                    className={css`
                      padding: 10px 20px 15px 0;
                      margin: 0;
                      padding-left: 20px;
                    `}
                  >
                    <li
                      className={css`
                        font-size: 20px;
                        padding: 0;
                        margin: 0;
                        transition: all 0.5ms ease-in;
                        color: ${key === experienceKeyShow
                          ? theme.colors.white
                          : theme.colors.grey};
                      `}
                    >
                      {position}
                    </li>
                  </ul>
                </article>
              );
            }
          )}
        </section>
        <section
          className={css`
            width: 100%;
            flex: 3;
            padding: 35px;
            border-radius: 18px;
            background-color: ${theme.colors.blackGrey};
          `}
        >
          <p
            className={css`
              font-size: 16px;
              font-weight: 400;
              color: ${theme.colors.grey};
            `}
          >
            {experienceData[experienceKeyShow].desc}
          </p>
        </section>
      </article>
    </section>
  );
}
