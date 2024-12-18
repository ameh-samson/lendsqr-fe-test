import styles from "./Users.module.scss";
import usersIcon from "@/assets/svg/users.svg";
import activeUsersIcon from "@/assets/svg/active-users.svg";
import usersWithLoanIcon from "@/assets/svg/active-users.svg";
import usersWithSavingsIcon from "@/assets/svg/users-with-savings.svg";
import MetricCard from "@/components/metricCard/MetricCard";
import { useDashboardContext } from "@/context/DashboardContext";

const Users = () => {
  // Destructure dynamic values from the context
  const { data, activeUsers, usersWithLoans, usersWithSavings } =
    useDashboardContext();

  return (
    <section className={styles.users}>
      <h1>Users</h1>

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
    </section>
  );
};

export default Users;
