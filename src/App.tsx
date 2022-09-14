import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import NavigationMenu from "./component/layout/navigation-menu";
import normalizeCss from "./styles/normalize-css";

function App() {
  return (
    <div>
      <Global styles={normalizeCss} />
      <NavigationMenu />
      hello world
      <Outlet />
    </div>
  );
}

export default App;
