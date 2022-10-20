import styles from "./Bar.module.css";

export const Bar = ({ className, type, children }) => {
  return (
    <div
      className={`${className} ${styles[`bar_${type}`]} ${styles.bar}`}
      data-testid={`product-card__bar_${type}`}
    >
      {children}
    </div>
  );
};
