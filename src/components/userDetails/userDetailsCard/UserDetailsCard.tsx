import { FC } from "react";
import { UserDetailsCardType } from "@/types";
import styles from "./UserDetailsCard.module.scss";
import profile from "@/assets/svg/profile.svg";
import filledStar from "@/assets/svg/filled-star.svg";
import notFilledStar from "@/assets/svg/empty-stay.svg";

const UserDetailsCard: FC<UserDetailsCardType> = ({
  avatar,
  name,
  id,
  userTier,
  mainIncome,
  bvn,
  bank,
}) => {
  return (
    <div className={styles.userDetailsCardContainer}>
      <div className={styles.userDetailsCardInner}>
        <img
          src={avatar ? avatar : profile}
          alt="avatar"
          className={styles.avatar}
        />
        <div className={styles.nameAndId}>
          <span className={styles.name}>{name}</span>
          <span className={styles.id}>{id}</span>
        </div>

        <div className={styles.ratingContainer}>
          <span>User's Tier</span>

          <div className={styles.rating}>
            {[1, 2, 3].map((star) => (
              <img
                key={star}
                src={star <= userTier ? filledStar : notFilledStar}
                alt="star"
              />
            ))}
          </div>
        </div>

        <div className={styles.incomeContainer}>
          <div className={styles.incomeInnerContainer}>
            <p className={styles.name}>{mainIncome}</p>
            <p className={styles.bvnBank}>
              {bvn}/{bank}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.buttonsContainer}>
        <button>General Details</button>
        <button disabled>Documents</button>
        <button disabled>Bank Details</button>
        <button disabled>Loans</button>
        <button disabled>Savings</button>
        <button disabled>App and System</button>
      </div>
    </div>
  );
};

export default UserDetailsCard;
