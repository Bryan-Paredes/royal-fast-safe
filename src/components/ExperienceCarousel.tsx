import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ExperienceImages } from "@/data/carousel";
import { useEffect, useState, type CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import "swiper/css";
import "swiper/css/navigation";
// interface CustomCSSProperties extends CSSProperties {
//   "--swiper-navigation-size"?: string;
//   "--swiper-navigation-color"?: string;
// }

// const styles: CustomCSSProperties = {
//   "--swiper-navigation-size": "35px",
//   "--swiper-navigation-color": "black",
// };

export default function ExperienceCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative flex max-w-4xl mx-auto w-full h-[600px] flex-col items-center justify-center overflow-hidden gap-3 ">
      {/* <Swiper
        style={styles}
        slidesPerView={1}
        spaceBetween={0}
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
      </Swiper> */}
      <div className="py-2 text-center text-lg text-muted-foreground z-10 relative top-5 left-0 right-0">
        Slide {current} of {count}
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {ExperienceImages.length > 0 &&
            ExperienceImages.map(({ id, src, data }) => (
              <CarouselItem key={id} className="">
                <div className="p-2">
                  <Card>
                    <CardContent className="p-0 cursor-grab">
                      <CardHeader>
                        <img
                          src={src}
                          alt={`Experience image ${id}`}
                          loading="lazy"
                          decoding="async"
                          width={200}
                          height={200}
                          className="object-cover object-center w-full h-[500px] rounded-2xl"
                        />
                      </CardHeader>
                      <CardDescription className="flex flex-wrap gap-10 p-5 items-center justify-center">
                        {/* <p className="text-center text-lg font-semibold">
                          Experience {id}
                        </p> */}
                        <div>
                          <h4 className="text-center text-primary-500 text-xl font-semibold">
                            From
                          </h4>
                          <span className="text-lg">{data.from}</span>
                        </div>
                        <div>
                          <h4 className="text-center text-primary-500 text-xl font-semibold">
                            To
                          </h4>
                          <span className="text-lg">{data.to}</span>
                        </div>
                        <div>
                          <h4 className="text-center text-primary-500 text-xl font-semibold">
                            Equipment Details
                          </h4>
                          <span className="text-lg">{data.equipment}</span>
                        </div>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 !flex cursor-pointer" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 !flex cursor-pointer" />
      </Carousel>
    </div>
  );
}
