import MetricCard from "@/components/metricCard/MetricCard";
import styles from "./Dashboard.module.scss";
import usersIcon from "@/assets/svg/users.svg";
import activeUsersIcon from "@/assets/svg/active-users.svg";
import usersWithLoanIcon from "@/assets/svg/active-users.svg";
import usersWithSavingsIcon from "@/assets/svg/users-with-savings.svg";
import { Link } from "react-router-dom";
import { useDashboardContext } from "@/context/DashboardContext";

const Dashboard = () => {
  const { data, activeUsers, usersWithLoans, usersWithSavings } =
    useDashboardContext();

  return (
    <section className={styles.dashboard}>
      <h1>Dashboard</h1>

      <div className={styles.metricCardContainer}>
        <MetricCard image={usersIcon} title="Users" value={data?.length} />

        <MetricCard
          image={activeUsersIcon}
          title="Active Users"
          value={activeUsers.length}
        />

        <MetricCard
          image={usersWithLoanIcon}
          title="Users with Loans"
          value={usersWithLoans.length}
        />

        <MetricCard
          image={usersWithSavingsIcon}
          title="Users with Savings"
          value={usersWithSavings.length}
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
