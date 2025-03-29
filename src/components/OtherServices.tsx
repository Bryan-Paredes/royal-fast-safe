import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { CSSProperties } from "react";
import { otherServices, type Service } from "@/data/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

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
        spaceBetween={5}
        navigation={true}
        rewind={true}
        modules={[Navigation]}
        className="max-w-4xl h-full w-full mx-auto px-3"
        grabCursor
      >
        {otherServices.map(({ title, description, image }: Service) => (
          <SwiperSlide key={title}>
            <Card
              className={`bg-primary-500/35 dark:bg-zinc-800 flex items-center justify-center w-full h-full shadow-none hover:shadow-sm hover:shadow-primary-400 transition-all duration-200 ease-in-out`}
              key={title}
            >
              <CardHeader className="flex flex-col items-center justify-center gap-4">
                <img
                  src={image}
                  alt={title}
                  width={40}
                  height={40}
                  className={`w-20 h-20 object-center object-cover `}
                  decoding="async"
                  loading="lazy"
                />
                <CardTitle className="text-xl text-center">{title}</CardTitle>
              </CardHeader>
              <CardContent className="">
                <CardDescription className="text-gray-600 dark:text-gray-200 text-base flex-1">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
