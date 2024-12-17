import { Routes, Route } from "react-router-dom";
import Home from "@/screens/Home/Home";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default RouteConfig;
