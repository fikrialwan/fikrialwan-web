import { Outlet } from "react-router-dom";
import Layout from "./component/layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
