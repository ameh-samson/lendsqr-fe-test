import { otherDetailsType } from "@/types";
import styles from "./OtherDetails.module.scss";
import { FC } from "react";

const OtherDetails: FC<otherDetailsType> = ({
  name,
  number,
  email,
  bvn,
  gender,
  maritalStatus,
  children,
  typeOfResidence,
  levelOfEdu,
  employmentStatus,
  employmentSector,
  employmentDuration,
  officialEmail,
  monthlyIncome,
  loanPayment,
  twitter,
  facebook,
  instagram,
  guarantorName,
  guarantorPhoneNumber,
  guarantorEmail,
  guarantorRelationship,
}) => {
  return (
    <div className={styles.otherDetailsContainer}>
      {/*  Personal Information */}

      <div className={styles.sectionContainer}>
        <h2 className={`${styles.subsectionTitle} ${styles.firstSectionTitle}`}>
          Personal Information
        </h2>

        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div>
              <p>full Name</p>
              <p>{name}</p>
            </div>

            <div>
              <p>Phone Number</p>
              <p>{number}</p>
            </div>

            <div>
              <p>Email Address</p>
              <p>{email}</p>
            </div>

            <div>
              <p>Bvn</p>
              <p>{bvn}</p>
            </div>
            <div>
              <p>Gender</p>
              <p>{gender}</p>
            </div>
          </div>

          <div className={styles.details}>
            <div>
              <p>Marital status</p>
              <p>{maritalStatus}</p>
            </div>

            <div>
              <p>Children</p>
              <p>{children}</p>
            </div>

            <div>
              <p>Type of residence</p>
              <p>{typeOfResidence}</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Education and Employment*/}

      <div className={styles.sectionContainer}>
        <h2 className={styles.subsectionTitle}>Education and Employment</h2>

        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div>
              <p>level of education</p>
              <p>{levelOfEdu}</p>
            </div>

            <div>
              <p>employment status</p>
              <p>{employmentStatus}</p>
            </div>

            <div>
              <p>sector of employment</p>
              <p>{employmentSector}</p>
            </div>

            <div>
              <p>Bvn</p>
              <p>{bvn}</p>
            </div>
            <div>
              <p>Duration of employment</p>
              <p>{employmentDuration}</p>
            </div>
          </div>

          <div className={styles.details}>
            <div>
              <p>office email</p>
              <p>{officialEmail}</p>
            </div>

            <div>
              <p>Monthly income</p>
              <p>{monthlyIncome}</p>
            </div>

            <div>
              <p>loan repayment</p>
              <p>₦ {loanPayment}</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Socials*/}

      <div className={styles.sectionContainer}>
        <h2 className={styles.subsectionTitle}>Socials</h2>

        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div>
              <p>Twitter</p>
              <p>{twitter}</p>
            </div>

            <div>
              <p>Facebook</p>
              <p>{facebook}</p>
            </div>

            <div>
              <p>Instagram</p>
              <p>{instagram}</p>
            </div>
          </div>
        </div>
      </div>

      {/*  Guarantor*/}

      <div className={styles.sectionContainer}>
        <h2 className={styles.subsectionTitle}>Guarantor</h2>

        <div className={styles.detailsContainer}>
          <div className={styles.details}>
            <div>
              <p>full Name</p>
              <p>{guarantorName}</p>
            </div>

            <div>
              <p>Phone Number</p>
              <p>{guarantorPhoneNumber}</p>
            </div>

            <div>
              <p>Email Address</p>
              <p>{guarantorEmail}</p>
            </div>

            <div>
              <p>Relationship</p>
              <p>{guarantorRelationship}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
