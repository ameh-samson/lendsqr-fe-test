import OtherDetails from "@/components/userDetails/otherDetails/OtherDetails";
import styles from "./UserDetails.module.scss";
import backIcon from "@/assets/svg/back-icon.svg";
import UserDetailsCard from "@/components/userDetails/userDetailsCard/UserDetailsCard";
import { useDashboardContext } from "@/context/DashboardContext";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { data } = useDashboardContext();
  const { userId } = useParams();

  const user = data?.find((user) => user.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  const {
    avatar,
    full_name,
    id,
    user_tier,
    education_and_employment,
    bvn,
    bank,
    email,
    phone,
    gender,
    marital_status,
    children,
    residence,
    socials,
    guarantor,
  } = user;

  const {
    level_of_education,
    employment_status,
    sector_of_employment,
    duration_of_employment,
    office_email,
    income,
    loan_repayment,
  } = education_and_employment;

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

      <div>
        <UserDetailsCard
          avatar={avatar}
          name={full_name}
          id={id}
          userTier={user_tier}
          mainIncome={income.main_income}
          bvn={bvn}
          bank={bank}
        />
      </div>

      <div className={styles.otherDetails}>
        <OtherDetails
          name={full_name}
          number={phone}
          email={email}
          bvn={bvn}
          gender={gender}
          maritalStatus={marital_status}
          children={children}
          typeOfResidence={residence}
          levelOfEdu={level_of_education}
          employmentStatus={employment_status}
          employmentSector={sector_of_employment}
          employmentDuration={duration_of_employment}
          officialEmail={office_email}
          monthlyIncome={income.monthly_income}
          loanPayment={loan_repayment}
          twitter={socials.twitter}
          facebook={socials.facebook}
          instagram={socials.instagram}
          guarantorName={guarantor.name}
          guarantorPhoneNumber={guarantor.phone}
          guarantorEmail={guarantor.email}
          guarantorRelationship={guarantor.relationship}
        />
      </div>
    </section>
  );
};

export default UserDetails;
