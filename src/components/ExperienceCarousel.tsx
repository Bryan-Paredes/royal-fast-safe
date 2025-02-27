import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectFade, Navigation, Pagination } from "swiper/modules";
import { images } from "@/data/carousel";
import type { CSSProperties } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/controller";
import "swiper/css/effect-fade";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-color-background"?: string;
}

const styles: CustomCSSProperties = {
  "--swiper-navigation-size": "30px",
  "--swiper-navigation-color": "#C2B24E",
  "--swiper-pagination-color": "white",
  "--swiper-navigation-color-background": "black",
};

export default function ExperienceCarousel() {
  return (
    <Swiper
      style={styles}
      effect="fade"
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      rewind={true}
      pagination={{ clickable: false, dynamicBullets: true }}
      modules={[Navigation, Pagination, Controller]}
      className="max-w-4xl h-full w-full mx-auto px-3"
      grabCursor
    >
      {" "}
      {images.length > 0 ? (
        images.map(({ id, src }) => (
          <SwiperSlide key={id} className="px-3">
            <img
              key={id}
              src={src}
              alt={`Experience image ${id}`}
              loading="lazy"
              decoding="async"
              width={200}
              height={200}
              className="object-cover object-center w-full h-1/2 rounded-2xl"
            />
          </SwiperSlide>
        ))
      ) : (
        <p>No se encuentra ninguna imagen</p>
      )}
    </Swiper>
  );
}
