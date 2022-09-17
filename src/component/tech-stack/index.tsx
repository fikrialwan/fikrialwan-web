import { css } from "@emotion/css";
import theme from "src/styles/theme";

interface TechStackProps {
  data: string[];
}

export default function TechStack({ data }: TechStackProps) {
  return (
    <ul
      className={css`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        gap: 10px;
        list-style: none;
      `}
    >
      {data.map((tech: string, key: number) => {
        return (
          <li
            className={css`
              color: ${theme.colors.blue};
              border: 1px solid ${theme.colors.blue};
              border-radius: 25px;
              padding: 5px 15px;
              font-weight: 400;
              font-size: 20px;
            `}
            key={key}
          >
            {tech}
          </li>
        );
      })}
    </ul>
  );
}
