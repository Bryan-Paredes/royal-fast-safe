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

export default function SliderExperience() {
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
        Slide {current} of {count}
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
                          From
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
                          To
                        </h3>
                        <p className="text-foreground font-medium text-sm sm:text-base">
                          {image.to.city}, {image.to.state}
                        </p>
                      </div>
                    </div>
                    <Dialog modal={true}>
                      <DialogTrigger asChild>
                        {/* <Button
                          variant="ghost"
                          size="lg"
                          className="top-2 right-2 bg-background/50 hover:bg-primary-500 hover:text-white text-foreground rounded-full p-2 cursor-pointer"
                          onClick={() => setSelectedImage(image.imageUrl)}
                        > */}
                        <InteractiveButton
                          className="text-foreground hover:text-white"
                          onClick={() => setSelectedImage(image.imageUrl)}
                        >
                          View Equipment Details
                          {/* <Maximize2 size={20} /> */}
                        </InteractiveButton>
                        {/* </Button> */}
                      </DialogTrigger>
                      <DialogContent className="w-full p-4 bg-background border-none">
                        <DialogTitle className="sr-only">
                          Imagen ampliada
                        </DialogTitle>
                        {selectedImage && (
                          <>
                            {/* <img
                              src={selectedImage}
                              alt="Imagen ampliada"
                              className="w-full h-auto rounded-lg"
                            /> */}
                            <h3 className="text-primary-500 font-bold text-lg sm:text-xl mt-2">
                              Equipment Details
                            </h3>
                            <div className="grid items-center justify-start  gap-3 sm:gap-4 my-5">
                              <div>
                                <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                  Name:{" "}
                                  <span className="font-normal">
                                    {image.equipment.name}
                                  </span>
                                </p>
                                <p className="flex gap-2 font-semibold text-foreground text-sm sm:text-base">
                                  Model:{" "}
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
                    {/* <div className="bg-background flex flex-col gap-2 items-start md:items-center my-5">
                      <h3 className="text-primary-500 font-bold text-lg sm:text-xl my-2">
                        Equipment Details
                      </h3>
                      <div className="">
                        <div className="p-4 sm:p-6 pt-0 sm:pt-0">
                          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
                            <div>
                              <p className="flex gap-2 font-semibold text-gray-700 text-sm sm:text-base">
                                Name:{" "}
                                <span className="font-normal">
                                  {image.equipment.name}
                                </span>
                              </p>
                              <p className="flex gap-2 font-semibold text-gray-700 text-sm sm:text-base">
                                Model:{" "}
                                <span className="font-normal">
                                  {image.equipment.model}
                                </span>
                              </p>
                            </div>
                            <div>
                              {image.equipment.weight && (
                                <p className="flex gap-2 font-semibold text-gray-700 text-sm sm:text-base">
                                  Weight:{" "}
                                  <span className="font-normal">
                                    {image.equipment.weight}
                                  </span>
                                </p>
                              )}
                              {image.equipment.dimensions && (
                                <p className="flex gap-2 font-semibold text-gray-700 text-sm sm:text-base">
                                  Dimensions:{" "}
                                  <span className="font-normal">
                                    {image.equipment.dimensions}
                                  </span>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
