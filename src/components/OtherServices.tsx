import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { CSSProperties } from "react";
import { otherServicesImages } from "@/data/carousel";

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

export default function SlideOtherServices() {
  return (
    <div className="relative flex w-full h-[250px] flex-col items-center justify-center overflow-hidden my-16">
      <Swiper
        style={styles}
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        rewind={true}
        modules={[Navigation]}
        className="max-w-4xl h-full w-full mx-auto px-3"
        grabCursor
      >
        {otherServicesImages.length > 0 ? (
          otherServicesImages.map(({ id, src, title }) => (
            <SwiperSlide
              key={id}
              className="p-5 border rounded-2xl grid-cols-1 grid-rows-2 gap-4 place-items-center"
            >
              <img
                key={id}
                src={src}
                alt={`Experience image ${id}`}
                loading="lazy"
                decoding="async"
                width={200}
                height={200}
                className="object-cover object-center absolute bottom-10 left-0 right-0 w-36 h-36 m-auto rounded-2xl"
              />
              <figcaption className="absolute top-0 left-0 right-0 text-center text-lg font-medium text-black dark:text-white bg-primary-700/50 backdrop-blur-2xl backdrop-filter p-2 rounded-2xl">
                {title}
              </figcaption>
            </SwiperSlide>
          ))
        ) : (
          <p>No se encuentra ninguna imagen</p>
        )}
      </Swiper>
    </div>
  );
}
