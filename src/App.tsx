import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Navigation from "src/component/layout/navigation";
import normalizeCss from "src/styles/normalize-css";
import Footer from "./component/layout/footer";
import theme from "./styles/theme";

function App() {
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
      <main
        className={css`
          flex-grow: 1;
        `}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
