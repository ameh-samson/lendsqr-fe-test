import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { ChildrenType } from "@/types";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import { useDashboardContext } from "@/context/DashboardContext";

const Layout: FC<ChildrenType> = ({ children }) => {
  const { toggleSidebar } = useDashboardContext();

  const location = useLocation();
  const loginPage = location.pathname === "/";
  return (
    <div className={loginPage ? "" : styles.layout}>
      {!loginPage && <Header />}
      <div className={styles.content}>
        <div
          className={`${styles.sidebar} ${
            toggleSidebar ? styles.showSidebar : styles.hideSidebar
          }`}
        >
          {!loginPage && <Sidebar />}
        </div>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
