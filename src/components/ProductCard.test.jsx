import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

describe("Компонент «Карточка товара»", () => {
  it("Рендеринг карточки со всеми корректными данными", async () => {
    const sampleCard = {
      title: "Пример",
      bouquetHeight: 55,
      bouquetWidth: 55,
      flowersCount: 55,
      currentPrice: 10000,
      isFavorite: false,
      isHit: true,
      isSale: true,
      imageUrl:
        "https://loremflickr.com/cache/resized/3384_3201197223_efe3a9f318_z_400_400_nofilter.jpg",
      oldPrice: 11111,
    };

    render(<ProductCard {...sampleCard} />);

    expect(await screen.findByTestId("product-card__img")).toHaveAttribute(
      "src",
      "https://loremflickr.com/cache/resized/3384_3201197223_efe3a9f318_z_400_400_nofilter.jpg"
    );
    expect(
      await screen.findByTestId("product-card__bar_hit")
    ).toBeInTheDocument();
  });
  it("Пришла картинка, проверяем наличие картинки", async () => {
    const sampleCard = {
      title: "Пример",
      bouquetHeight: 55,
      bouquetWidth: 55,
      flowersCount: 55,
      currentPrice: 10000,
      isFavorite: false,
      isHit: false,
      isSale: false,
      imageUrl:
        "https://loremflickr.com/cache/resized/3384_3201197223_efe3a9f318_z_400_400_nofilter.jpg",
      oldPrice: 11111,
    };

    render(
      <ProductCard
        {...sampleCard}
        // imageUrl={
        //   "https://loremflickr.com/cache/resized/3384_3201197223_efe3a9f318_z_400_400_nofilter.jpg"
        // }
      />
    );
    screen.logTestingPlaygroundURL();
    expect(await screen.findByTestId("product-card__img")).not.toHaveAttribute(
      "src",
      "default_img.png"
    );
  });
});

// https://loremflickr.com/cache/resized/3384_3201197223_efe3a9f318_z_400_400_nofilter.jpg
