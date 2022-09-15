import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";
import { MenuIcon, CloseIcon } from "src/component/ui/icons";

function Navigation() {
  return (
    <nav
      className={css`
        background-color: ${theme.colors.black};
        width: 100%;
        padding: 25px 25px;
        position: fixed;
        top: 0;
        z-index: 10;
        transition: all 0.5s ease;
        ${mq[2]} {
          padding: 25px 50px;
        }
        ${mq[3]} {
          padding: 25px 75px;
        }
      `}
    >
      <div
        className={css`
          max-width: 1500px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          transition: all 0.5s ease;
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-grow: 1;
          `}
        >
          <Link
            to="/"
            className={css`
              text-decoration: none;
              cursor: pointer;
              color: ${theme.colors.white};
              font-weight: 600;
              font-size: 32px;
            `}
          >
            Fikri A.R.
          </Link>
          <MenuIcon
            className={css`
              cursor: pointer;
              ${mq[0]} {
                display: none;
              }
            `}
            width={24}
            height={24}
          />
          <CloseIcon
            className={css`
              cursor: pointer;
              display: none;
            `}
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
