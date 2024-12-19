import { Routes, Route } from "react-router-dom";
import Home from "@/screens/home/Home";
import Dashboard from "@/screens/dashboard/Dashboard";
import Users from "@/screens/users/Users";
import UserDetails from "@/screens/userDetails/UserDetails";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/dashboard" index element={<Dashboard />} />
      <Route path="/users" index element={<Users />} />
      <Route path="/user/:id" index element={<UserDetails />} />
    </Routes>
  );
};

export default RouteConfig;
