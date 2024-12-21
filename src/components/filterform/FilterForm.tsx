import { useForm } from "react-hook-form";
import styles from "./FIlterForm.module.scss";
import { FilterFormFilteredType } from "@/types";

const FilterForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data:FilterFormFilteredType) => {
    console.log(data, "filtered");
    reset();
  };

  return (
    <div className={styles.filterForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formFieldContainer}>
          <label htmlFor={styles.organization}>Organization</label>
          <select id="organization" {...register("organization")}>
            <option value="">Select</option>
            <option value="org1">Organization 1</option>
            <option value="org2">Organization 2</option>
          </select>
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor={styles.username}>Username</label>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="User"
          />
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email"
          />
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            {...register("date")}
            placeholder="Date"
          />
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.formFieldContainer}>
          <label htmlFor={styles.status}>Status</label>
          <select id="status" {...register("status")}>
            <option value="">Select</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className={styles.buttonsContainer}>
          <button type="reset" onClick={() => reset()}>
            Reset
          </button>
          <button type="submit">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
