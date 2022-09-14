import { Global } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Navigation from "./component/layout/navigation";
import normalizeCss from "./styles/normalize-css";

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
