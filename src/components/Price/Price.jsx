import styles from "./Price.module.css";

//new Intl.NumberFormat('ru-RU').format(number)

export const Price = ({ className, currentPrice, oldPrice }) => {
  return (
    <div className={className}>
      <span
        className={`${className} ${styles.price} ${
          oldPrice ? styles["price_new"] : ""
        }`}
      >
        {`${new Intl.NumberFormat("ru-RU").format(currentPrice)} ₽`}
      </span>
      {oldPrice && (
        <span className={`${styles["price"]} ${styles["price_old"]}`}>
          {`${new Intl.NumberFormat("ru-RU").format(oldPrice)} ₽`}
        </span>
      )}
    </div>
  );
};
