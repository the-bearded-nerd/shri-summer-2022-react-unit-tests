import defaultIMG from "../assets/default_img.png";

import styles from "./ProductCard.module.css";
import { Bar } from "./Bar/Bar";
import { Favorite } from "./Favorite/Favorite";
import { Price } from "./Price/Price";

import countIMG from "../assets/flowersCountIcon.svg";
import bouquetHeightIcon from "../assets/bouquetHeightIcon.svg";
import bouquetWidthIcon from "../assets/bouquetWidthIcon.svg";
import { Characteristic } from "./Characteristic/Characteristic";

export const ProductCard = ({
  bouquetHeight,
  bouquetWidth,
  flowersCount,
  currentPrice,
  isFavorite,
  isHit,
  isSale,
  imageUrl,
  oldPrice,
  title,
}) => {
  // Реализуйте компонент
  return (
    <div data-testid={"product-card"} className={styles["product-card"]}>
      <div className={styles["product-card__container"]}>
        <div className={styles["product-card__icons"]}>
          <div className={styles["product-card__bars"]}>
            {isHit && (
              <Bar className="product-card__bar_hit" type={"hit"}>
                Хит
              </Bar>
            )}
            {isSale && (
              <Bar className="product-card__bar-sale" type={"sale"}>
                Скидка
              </Bar>
            )}
          </div>
          <Favorite
            classname={styles["product-card__favorite"]}
            isFavorite={isFavorite}
            data-testid={"product-card__favorite"}
          />
        </div>
        <img
          data-testid={"product-card__img"}
          className={styles["product-card__img"]}
          src={imageUrl ? imageUrl : defaultIMG}
          alt="Фото букета"
        />
        <div className={styles["product-card__text-group"]}>
          <div
            className={styles["product-card__title"]}
            data-testid={"product-card__title"}
          >
            {title?.length > 27 ? `${title.substring(0, 24)}...` : title}
          </div>
          <Price
            className={styles["product-card__price"]}
            currentPrice={currentPrice}
            oldPrice={oldPrice}
            data-testid={"product-card__price"}
          />
          <div className={styles["product-card__characteristics"]}>
            <Characteristic
              className={"product-card__count"}
              icoSrc={countIMG}
              icoAlt={"Количество цветов"}
              value={flowersCount}
              dimension="шт."
              data-testid={"product-card__count"}
            />
            <Characteristic
              className={"product-card__height"}
              icoSrc={bouquetHeightIcon}
              icoAlt={"высота букета"}
              value={bouquetHeight}
              dimension="см"
              data-testid={"product-card__height"}
            />
            <Characteristic
              className={"product-card__height"}
              icoSrc={bouquetWidthIcon}
              icoAlt={"высота букета"}
              value={bouquetWidth}
              dimension="см"
              data-testid={"product-card__height"}
            />
          </div>
        </div>
        <div className={styles["product-card__button-group"]}>
          <button
            className={`${styles["product-card__button"]} ${
              styles["button_to-cart"]
            } ${flowersCount === 0 ? styles["button_disabled"] : ""}`}
            type="button"
            data-testid={"button_to-cart"}
          >
            В корзину
          </button>
          <button
            className={`${styles["product-card__button"]} ${
              styles["button_buy-now"]
            } ${flowersCount === 0 ? styles["button_disabled"] : ""}`}
            type="button"
            data-testid={"button_buy-now"}
          >
            Купить сразу
          </button>
        </div>
      </div>
    </div>
  );
};
