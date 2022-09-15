import { css } from "@emotion/css";
import theme from "src/styles/theme";
import { NavLink } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";
import mq from "src/styles/breakpoints";

export default function NavigationMenu() {
  return (
    <ul
      className={css`
        display: none;
        gap: 50px;
        list-style: none;
        ${mq[0]} {
          display: flex;
        }
      `}
    >
      {navigationData.map(
        ({ title, link }: NavigationDataType, key: number) => {
          return (
            <li key={key}>
              <NavLink
                to={link}
                className={({ isActive }) => css`
                  text-decoration: none;
                  font-size: 24px;
                  font-weight: 600;
                  color: ${isActive ? theme.colors.white : theme.colors.grey};
                `}
                end
              >
                {title}
              </NavLink>
            </li>
          );
        }
      )}
    </ul>
  );
}
