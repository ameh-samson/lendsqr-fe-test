import { metricCardDataType } from "@/types";
import { FC } from "react";
import styles from "./Metric.module.scss";

const MetricCard: FC<metricCardDataType> = ({ image, title, value }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt={title} />
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default MetricCard;
