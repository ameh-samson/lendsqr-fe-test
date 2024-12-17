import { ChildrenType } from "@/types";
import { FC } from "react";

const Layout: FC<ChildrenType> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
