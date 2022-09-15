import { css } from "@emotion/css";
import theme from "src/styles/theme";
import { NavLink } from "react-router-dom";
import { navigationData, NavigationDataType } from "src/data";
import mq from "src/styles/breakpoints";

interface NavigationMenuProps {
  isNavToggleActive: Boolean;
}

export default function NavigationMenu({
  isNavToggleActive = false,
}: NavigationMenuProps) {
  return (
    <ul
      className={css`
        display: ${isNavToggleActive ? "flex" : "none"};
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        gap: 50px;
        list-style: none;
        ${mq[0]} {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
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
