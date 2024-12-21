import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/dashboard" className={styles.dashboardLink}>
          All Users
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
