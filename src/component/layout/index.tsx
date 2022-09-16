import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { ReactNode } from "react";
import normalizeCss from "src/styles/normalize-css";
import theme from "src/styles/theme";
import Footer from "./footer";
import Navigation from "./navigation";
import Aside from "./aside";

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
      <Global styles={normalizeCss} />
      <Navigation />
      <Aside />
      <main
        className={css`
          flex-grow: 1;
        `}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
