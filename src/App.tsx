import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
import RouteConfig from "./routes";

function App() {
  return (
    <Router>
      <Layout>
        <RouteConfig />
      </Layout>
    </Router>
  );
}

export default App;
