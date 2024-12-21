import { Routes, Route } from "react-router-dom";
import Home from "@/screens/home/Home";
import Dashboard from "@/screens/dashboard/Dashboard";
import Users from "@/screens/users/Users";
import UserDetails from "@/screens/userDetails/UserDetails";
import NotFound from "@/screens/notFound/NotFound";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/dashboard" index element={<Dashboard />} />
      <Route path="/users" index element={<Users />} />
      <Route path="/user/:userId" index element={<UserDetails />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteConfig;
