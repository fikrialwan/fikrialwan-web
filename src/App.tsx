import { Global } from "@emotion/react";
import normalizeCss from "./styles/normalize-css";

function App() {
  return (
    <div>
      <Global styles={normalizeCss} />
      <h1>hello world</h1>
    </div>
  );
}

export default App;
