import MetricCard from "@/components/metricCard/MetricCard";
import styles from "./Dashboard.module.scss";
import usersIcon from "@/assets/svg/users.svg";
import activeUsersIcon from "@/assets/svg/active-users.svg";
import usersWithLoanIcon from "@/assets/svg/active-users.svg";
import usersWithSavingsIcon from "@/assets/svg/users-with-savings.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className={styles.dashboard}>
      <h1>Dashboard</h1>

      <div className={styles.metricCardContainer}>
        <MetricCard image={usersIcon} title="Users" value={100} />
        <MetricCard image={activeUsersIcon} title="Active Users" value={200} />
        <MetricCard
          image={usersWithLoanIcon}
          title="Users with Loans"
          value={300}
        />
        <MetricCard
          image={usersWithSavingsIcon}
          title="Users with Savings"
          value={300}
        />
      </div>

      <div className={styles.quickLinks}>
        <Link to="/users" className={styles.linkCard}>
          Manage Users
        </Link>
        <Link to="/" className={styles.linkCard}>
          View Reports
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
