import styles from "./Sidebar.module.scss";
import dropdown from "@/assets/svg/dropdown2.svg";
import briefcase from "@/assets/svg/briefcase.svg";
import home from "@/assets/svg/home.svg";
import { Link, useLocation } from "react-router-dom";
import {
  businessesRelatedNavlink,
  customersRelatedNavlink,
  settingsRelatedNavlink,
} from "@/constants";

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  return (
    <aside className={styles.aside}>
      <Link to="#" className={styles.organization}>
        <img src={briefcase} alt="dropdown" />
        <span>Switch Organization</span>
        <img src={dropdown} alt="dropdown" />
      </Link>

      <Link
        to="/dashboard"
        className={`${styles.dashboard} ${
          isActive("/dashboard") ? styles.active : ""
        }`}
      >
        <img src={home} alt="home" />
        <span>Dashboard</span>
      </Link>

      <section className={styles.costumers}>
        <span className={styles.sectionTitle}>Customers</span>
        {customersRelatedNavlink.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`${styles.navLink} ${
              isActive(link.href) ? styles.active : ""
            }`}
          >
            <img src={link.icon} alt={link.title} />
            <span>{link.title}</span>
          </Link>
        ))}
      </section>

      <section className={styles.businesses}>
        <span className={styles.sectionTitle}>Businesses</span>
        {businessesRelatedNavlink.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`${styles.navLink} ${
              isActive(link.href) ? styles.active : ""
            }`}
          >
            <img src={link.icon} alt={link.title} />
            <span>{link.title}</span>
          </Link>
        ))}
      </section>

      <section className={styles.settings}>
        <span className={styles.sectionTitle}>Settings</span>
        {settingsRelatedNavlink.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`${styles.navLink} ${
              isActive(link.href) ? styles.active : ""
            }`}
          >
            <img src={link.icon} alt={link.title} />
            <span>{link.title}</span>
          </Link>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;