import { ChildrenT } from "@/types";
import { FC } from "react";

const Layout: FC<ChildrenT> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
