import emptyHeartFavorite from "../../assets/emptyFavoriteIcon.svg";
import fullHeartFavorite from "../../assets/fillHeartIcon.svg";

export const Favorite = ({ className, isFavorite }) => {
  return (
    <img
      className={className}
      src={isFavorite ? fullHeartFavorite : emptyHeartFavorite}
      alt={isFavorite ? "в избранном" : "добавить в избранное"}
    />
  );
};
