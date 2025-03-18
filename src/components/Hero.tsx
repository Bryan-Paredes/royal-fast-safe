// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import type { CSSProperties } from "react";

export default function HeroSection() {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-pagination-color": "#fff",
          } as CSSProperties
        }
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        // navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper min-h-screen w-full h-full -z-20"
      >
        <SwiperSlide>
          <img
            src="/hero/hero2.webp"
            className="w-full h-full object-cover object-center brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/hero/hero.webp"
            className="w-full h-full object-cover object-center brightness-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/hero/hero3.webp"
            className="w-full h-full object-cover object-center brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/hero/hero4.webp"
            className="w-full h-full object-cover object-center brightness-[45%]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
