import styles from "./UserDetails.module.scss";
import backIcon from "@/assets/svg/back-icon.svg";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <section className={styles.userdetails}>
      <Link to="/users" className={styles.backButton}>
        <img src={backIcon} alt="back" />
        <span>Back to Users</span>
      </Link>

      <div className={styles.userdetailsHeader}>
        <h1>User Details</h1>

        <div>
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
