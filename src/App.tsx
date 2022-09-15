import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Navigation from "src/component/layout/navigation";
import normalizeCss from "src/styles/normalize-css";

function App() {
  return (
    <div>
      <Global styles={normalizeCss} />
      <Navigation />
      hello world
      <Outlet />
    </div>
  );
}

export default App;
