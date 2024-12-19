import { Routes, Route } from "react-router-dom";

import Users from "@/screens/users/Users";
import UserDetails from "@/screens/userDetails/UserDetails";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/users" index element={<Users />} />
      <Route path="/user/:id" index element={<UserDetails />} />
    </Routes>
  );
};

export default RouteConfig;
