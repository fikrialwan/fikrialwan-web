import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";
import { GET_PROJECTS } from "src/apollo/query";
import { LinkProjectsType, ProjectsDataType } from "src/data/projects-data";
import theme from "src/styles/theme";
import TechStack from "../tech-stack";
import MoreButton from "../ui/buttons/more-button";
import { FigmaIcon, GithubIcon, LinkIcon } from "../ui/icons";
interface ProjectSectionProps {
  isHome: Boolean;
}

export default function ProjectSection({ isHome }: ProjectSectionProps) {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading || error) {
    return <div />;
  }

  const projectsDatas: ProjectsDataType[] = data.projects.map(
    ({ name, description, link, projectTechStack }: any) => {
      return {
        name,
        desc: description,
        url: link,
        techStack: projectTechStack.map(({ tech }: any) => tech),
      };
    }
  );

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
          {projectsDatas
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
                        if (urlData.type === "github") {
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
                        } else if (urlData.type === "link") {
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
                                width={28}
                                height={28}
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
    return (
      <section
        className={css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
          margin-bottom: 15px;
        `}
      >
        {projectsDatas.map(
          ({ name, desc, techStack, url }: ProjectsDataType, key: number) => {
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
                    if (urlData.type === "github") {
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
                    } else if (urlData.type === "link") {
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
                            width={28}
                            height={28}
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
      </section>
    );
  }
}
