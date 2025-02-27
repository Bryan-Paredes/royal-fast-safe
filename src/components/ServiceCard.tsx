import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services, type Service } from "@/data/header";
import { InteractiveButton } from "./ui/interactive-button";

export default function ServiceCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-5 px-4">
      {services.map(({ title, href, description, image }: Service) => (
        <Card
          className="w-full h-full shadow-none hover:shadow-sm hover:shadow-primary-400 hover:scale-[103%] transition-all duration-200 ease-in"
          key={title}
        >
          <CardHeader className="flex items-center justify-center gap-4">
            <img
              src={image}
              alt={title}
              width={40}
              height={40}
              className="w-20 h-20"
              decoding="async"
              loading="lazy"
            />
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1/2">
            <CardDescription>{description}</CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between">
            <InteractiveButton className="flex items-center gap-2 w-36 h-12 text-sm">
              <a href={href} className="dark:text-white">
                See More
              </a>
            </InteractiveButton>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
