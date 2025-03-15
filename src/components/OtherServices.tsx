import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { CSSProperties } from "react";
import { otherServicesImages } from "@/data/carousel";
import ServiceCard from "./ServiceCard";
import { otherServices } from "@/data/services";

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
        slidesPerView={2}
        spaceBetween={10}
        navigation={true}
        rewind={true}
        modules={[Navigation]}
        className="max-w-4xl h-full w-full mx-auto px-3"
        grabCursor
      >
        {otherServices.map((service) => (
          <SwiperSlide key={service.title}>
            <ServiceCard service={[service]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
