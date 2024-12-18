import { Routes, Route } from "react-router-dom";
import Home from "@/screens/Home/Home";
import Dashboard from "@/screens/Dashboard/Dashboard";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/dashboard" index element={<Dashboard />} />
    </Routes>
  );
};

export default RouteConfig;
