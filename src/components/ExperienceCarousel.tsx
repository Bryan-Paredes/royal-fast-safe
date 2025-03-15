import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { images } from "@/data/carousel";
import type { CSSProperties } from "react";
import "swiper/css";
import "swiper/css/navigation";
interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-color-background"?: string;
}

const styles: CustomCSSProperties = {
  "--swiper-navigation-size": "33px",
  "--swiper-navigation-color": "white",
  "--swiper-navigation-color-background": "white",
};

export default function ExperienceCarousel() {
  return (
    <Swiper
      style={styles}
      slidesPerView={1.1}
      spaceBetween={5}
      navigation={true}
      rewind={true}
      modules={[Navigation]}
      className="max-w-4xl h-full w-full mx-auto px-3"
      grabCursor
    >
      {images.length > 0 ? (
        images.map(({ id, src }) => (
          <SwiperSlide key={id} className="px-3">
            <img
              src={src}
              alt={`Experience image ${id}`}
              loading="lazy"
              decoding="async"
              width={200}
              height={200}
              className="object-cover object-center w-full h-full rounded-2xl"
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No se encuentra ninguna imagen</p>
      )}
    </Swiper>
  );
}
