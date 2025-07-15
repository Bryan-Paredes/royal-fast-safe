import { ExperienceImages } from "@/data/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { IconRoute2 } from "@tabler/icons-react";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Maximize2 } from "lucide-react";
import { InteractiveButton } from "./ui/interactive-button";

interface SliderExperienceProps {
  t: any;
}

export default function SliderExperience({ t }: SliderExperienceProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="py-2 text-center text-lg text-muted-foreground">
        {t.sliderExperience.slideOf
          .replace("{current}", current.toString())
          .replace("{count}", count.toString())}
      </div>
      <Carousel setApi={setApi} className="w-full max-w-4xl max-h-1/2 mx-auto">
        <CarouselContent>
          {ExperienceImages.map((image) => (
            <CarouselItem className="relative" key={image.id}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-2">
                    <img
                      src={image.imageUrl}
                      alt={image.equipment.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center rounded-2xl"
                    />
                    <div className="flex text-center justify-evenly w-full md:w-2/3 p-4 sm:p-6 bg-background">
                      <div className="text-center flex-1">
                        <h3 className="text-primary-500 font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                          {t.sliderExperience.from}
                        </h3>
                        <p className="text-foreground font-medium text-sm sm:text-base">
                          {image.from.city}, {image.from.state}
                        </p>
                      </div>
                      <IconRoute2
                        size={55}
                        stroke={1.5}
                        className="text-primary-500 dark:text-primary-700"
                      />
                      <div className="text-center flex-1">
                        <h3 className="text-primary-500 font-bold text-lg sm:text-xl mb-1 sm:mb-2">
                          {t.sliderExperience.to}
                        </h3>
                        <p className="text-foreground font-medium text-sm sm:text-base">
                          {image.to.city}, {image.to.state}
                        </p>
                      </div>
                    </div>
                    <Dialog modal={true}>
                      <DialogTrigger asChild>
                        <InteractiveButton
                          className="text-foreground hover:text-white"
                          aria-label={`View Equipment Details of ${image.equipment.name}`}
                          onClick={() => setSelectedImage(image.imageUrl)}
                        >
                          {t.sliderExperience.equipmentDetails}
                        </InteractiveButton>
                      </DialogTrigger>
                      <DialogContent className="w-full p-4 bg-background border-none">
                        <DialogTitle className="sr-only">
                          Imagen ampliada
                        </DialogTitle>
                        {selectedImage && (
                          <>
                            <h3 className="text-primary-500 font-bold text-lg sm:text-xl mt-2">
                              {t.sliderExperience.equipmentDetails}
                            </h3>
                            <div className="grid items-center justify-start  gap-3 sm:gap-4 my-5">
                              <div>
                                <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                  {t.sliderExperience.name}:{" "}
                                  <span className="font-normal">
                                    {image.equipment.name}
                                  </span>
                                </p>
                                <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                  {t.sliderExperience.model}:{" "}
                                  <span className="font-normal">
                                    {image.equipment.model}
                                  </span>
                                </p>
                              </div>
                              <div>
                                {image.equipment.weight && (
                                  <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                    Weight:{" "}
                                    <span className="font-normal">
                                      {image.equipment.weight}
                                    </span>
                                  </p>
                                )}
                                {image.equipment.dimensions && (
                                  <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                    Dimensions:{" "}
                                    <span className="font-normal">
                                      {image.equipment.dimensions}
                                    </span>
                                  </p>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1 top-[40%] -translate-y-1/2 cursor-pointer" />
        <CarouselNext className="absolute right-1 top-[40%] -translate-y-1/2 cursor-pointer" />
      </Carousel>
    </div>
  );
}
