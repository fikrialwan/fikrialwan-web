import { css } from "@emotion/css";
import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Navigation from "src/component/layout/navigation";
import normalizeCss from "src/styles/normalize-css";

function App() {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
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
    </div>
  );
}

export default App;
