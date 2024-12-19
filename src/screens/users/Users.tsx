import styles from "./Users.module.scss";
import Datatable from "@/components/table/Datatable";

const Users = () => {
  return (
    <section className={styles.users}>
      <h1>Users</h1>
      <div className={styles.datatableContainer}>
        <Datatable />
      </div>
    </section>
  );
};

export default Users;
