import styles from "./Characteristic.module.css";

export const Characteristic = ({
  className,
  icoSrc,
  icoAlt,
  value,
  dimension,
}) => {
  if (!value) return null;
  return (
    <div className={`${className} ${styles.container}`}>
      <img className={styles.icon} src={icoSrc} alt={icoAlt} />
      <span className={styles.text}>{`${value} ${dimension}`}</span>
    </div>
  );
};
