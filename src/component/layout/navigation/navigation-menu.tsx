import { css } from "@emotion/css";
import theme from "src/styles/theme";
import { NavLink } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";
import mq from "src/styles/breakpoints";

export default function NavigationMenu() {
  const linkNotActive = css`
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.grey};
  `;

  const linkActive = css`
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.white};
  `;

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
                className={({ isActive }) =>
                  isActive ? linkActive : linkNotActive
                }
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
