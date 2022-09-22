import { css } from "@emotion/css";
import {
  LinkProjects,
  LinkProjectsType,
  projectsData,
  ProjectsDataType,
} from "src/data/projects-data";
import theme from "src/styles/theme";
import TechStack from "../tech-stack";
import MoreButton from "../ui/buttons/more-button";
import { FigmaIcon, GithubIcon, LinkIcon } from "../ui/icons";

interface ProjectSectionProps {
  isHome: Boolean;
}

export default function ProjectSection({ isHome }: ProjectSectionProps) {
  if (isHome) {
    return (
      <section
        className={css`
          display: flex;
          flex-direction: column;
          justify-items: center;
        `}
      >
        <h2
          className={css`
            font-weight: 600;
            font-size: 32px;
            color: ${theme.colors.white};
          `}
        >
          My Projects
        </h2>
        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 20px;
            margin-bottom: 15px;
          `}
        >
          {projectsData
            .slice(0, 6)
            .map(
              (
                { name, desc, techStack, url }: ProjectsDataType,
                key: number
              ) => {
                return (
                  <article
                    key={key}
                    className={css`
                      display: flex;
                      flex-direction: column;
                      padding: 15px;
                      background-color: ${theme.colors.blackGrey};
                      border-radius: 18px;
                      transition: all 0.5ms ease-in;
                      &:hover {
                        outline-offset: 4px;
                        outline: 3px solid ${theme.colors.white};
                      }
                    `}
                  >
                    <div
                      className={css`
                        display: flex;
                        justify-content: end;
                        align-items: center;
                      `}
                    >
                      {url.map((urlData: LinkProjectsType, key: number) => {
                        if (urlData.type === LinkProjects.github) {
                          return (
                            <a
                              key={key}
                              href={urlData.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <GithubIcon
                                width={30}
                                height={30}
                                className={css`
                                  margin-left: 5px;
                                  cursor: pointer;
                                `}
                              />
                            </a>
                          );
                        } else if (urlData.type === LinkProjects.link) {
                          return (
                            <a
                              key={key}
                              href={urlData.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <LinkIcon
                                width={25}
                                height={25}
                                className={css`
                                  margin-left: 5px;
                                  cursor: pointer;
                                `}
                              />
                            </a>
                          );
                        } else {
                          return (
                            <a
                              key={key}
                              href={urlData.url}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <FigmaIcon
                                width={30}
                                height={30}
                                className={css`
                                  margin-left: 5px;
                                  cursor: pointer;
                                `}
                              />
                            </a>
                          );
                        }
                      })}
                    </div>
                    <h3
                      className={css`
                        font-size: 24px;
                        font-weight: 600;
                        color: ${theme.colors.white};
                        margin: 10px 0 0 0;
                        padding: 0;
                      `}
                    >
                      {name}
                    </h3>
                    <p
                      className={css`
                        font-size: 16px;
                        font-weight: 400;
                        flex: 1;
                        color: ${theme.colors.grey};
                        margin: 16px 0;
                      `}
                    >
                      {desc}
                    </p>
                    <TechStack data={techStack} />
                  </article>
                );
              }
            )}
        </div>
        <MoreButton title="More Projects" url="projects" />
      </section>
    );
  } else {
    return <div>projects</div>;
  }
}
