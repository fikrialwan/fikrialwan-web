import { Global } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";
import normalizeCss from "./styles/normalize-css";

function App() {
  return (
    <div>
      <Global styles={normalizeCss} />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      hello world
      <Outlet />
    </div>
  );
}

export default App;
