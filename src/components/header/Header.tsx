import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "@/assets/svg/logo.svg";
import searchIon from "@/assets/svg/search-icon.svg";
import notificationIcon from "@/assets/png/notification.png";
import avatar from "@/assets/png/avatar.png";
import dropdown from "@/assets/svg/arrow-down.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles.inputField}
        />
        <button className={styles.searchButton}>
          <img src={searchIon} alt="search" />
        </button>
      </div>

      <div className={styles.profileContainer}>
        <a href="#">Docs</a>

        <div className={styles.profileDetails}>
          <img
            src={notificationIcon}
            alt="notification"
            className={styles.notification}
          />
          <img src={avatar} alt="user avatar" className={styles.avatar} />
          <span>Adedeji</span>
          <img src={dropdown} alt="dropdown" className={styles.dropdown} />
        </div>
      </div>
    </header>
  );
};

export default Header;
