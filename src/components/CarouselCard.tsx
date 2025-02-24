import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from "@/data/carousel";

export function CarouselCard() {
  return (
    <Carousel className="w-full max-w-3xl">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id}>
            <div className="">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={`Image ${image.id}`}
                    decoding="async"
                    loading="lazy"
                    className="object-cover object-center w-full h-full rounded-2xl"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
