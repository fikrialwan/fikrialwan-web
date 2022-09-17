import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { ReactNode } from "react";
import normalizeCss from "src/styles/normalize-css";
import theme from "src/styles/theme";
import Footer from "./footer";
import Navigation from "./navigation";
import Aside from "./aside";
import mq from "src/styles/breakpoints";
import ScrollToTop from "./scroll-to-top";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: ${theme.colors.black};
      `}
    >
      <ScrollToTop />
      <Global styles={normalizeCss} />
      <Navigation />
      <Aside />
      <main
        className={css`
          flex-grow: 1;
          width: 100%;
          padding: 0 25px;
          ${mq[0]} {
            padding: 0 50px;
          }

          ${mq[1]} {
            padding: 0 100px;
          }

          ${mq[2]} {
            padding: 0 150px;
          }
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
