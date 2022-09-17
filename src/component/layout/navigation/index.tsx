import { css } from "@emotion/css";
import { Link } from "react-router-dom";
import mq from "src/styles/breakpoints";
import theme from "src/styles/theme";
import { MenuIcon, CloseIcon } from "src/component/ui/icons";
import NavigationMenu from "./navigation-menu";
import { useEffect, useRef, useState } from "react";

function Navigation() {
  const [isMenuActive, setIsMenuActive] = useState<Boolean>(false);
  const [isScroll, setIsScroll] = useState<Boolean>(false);

  const handleScroll = useRef(() => {});

  handleScroll.current = () => {
    if (window.scrollY > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll.current);
  }, []);

  return (
    <nav
      className={css`
        background-color: ${theme.colors.black};
        width: ${isScroll ? "calc(100% - 50px)" : "100%"};
        padding: ${isScroll ? "20px 25px" : "25px 25px"};
        margin: ${isScroll ? "0 25px" : "0"};
        position: fixed;
        top: ${isScroll ? "10px" : "0"};
        z-index: 10;
        transition: all 0.5s ease;
        ${isScroll
          ? `
            border-radius: 18px;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);`
          : ""}
        ${mq[0]} {
          padding: ${isScroll ? "15px 25px" : "25px 50px"};
        }
        ${mq[2]} {
          padding: ${isScroll ? "15px 50px" : "25px 75px"};
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
          flex-direction: column;
          ${mq[0]} {
            flex-direction: row;
          }
        `}
      >
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          `}
        >
          <Link
            to="/"
            className={css`
              text-decoration: none;
              cursor: pointer;
              color: ${theme.colors.white};
              font-weight: 600;
              font-size: 24px;
            `}
          >
            Fikri A.R.
          </Link>
          <MenuIcon
            className={css`
              cursor: pointer;
              display: ${isMenuActive ? "none" : "block"};
              ${mq[0]} {
                display: none;
              }
            `}
            width={24}
            height={24}
            onClick={() => setIsMenuActive(true)}
          />
          <CloseIcon
            className={css`
              cursor: pointer;
              display: ${isMenuActive ? "block" : "none"};
              ${mq[0]} {
                display: none;
              }
            `}
            onClick={() => setIsMenuActive(false)}
            width={24}
            height={24}
          />
        </div>
        <NavigationMenu
          isNavToggleActive={isMenuActive}
          onClick={() => setIsMenuActive(false)}
        />
      </div>
    </nav>
  );
}

export default Navigation;
