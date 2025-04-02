import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import RatingStars from "./Rating";
import { IconExternalLink } from "@tabler/icons-react";
import { reviews } from "@/data/reviews";

export default function TestimonialSlide() {
  return (
    <div className="relative flex max-w-5xl h-full flex-col items-center justify-center overflow-hidden mx-auto">
      <Marquee pauseOnHover className="[--duration:60s] gap-2">
        {reviews.map(({ img, name, body, rating, href }, index) => (
          <figure
            key={index}
            className={cn(
              " flex flex-col h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <img
                className="rounded-full"
                loading="lazy"
                decoding="async"
                width="40"
                height="40"
                alt=""
                src={img}
              />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
                <RatingStars rating={rating} />
              </div>
            </div>
            <blockquote className="mt-2 text-sm">
              {body.length > 150 ? body.slice(0, 150) + "..." : body}
            </blockquote>
            <div className=" flex-1 items-end justify-end my-2">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline hover:text-accent"
              >
                <span>View Coment</span>
                <IconExternalLink className="w-4 h-4" />
              </a>
            </div>
          </figure>
        ))}
      </Marquee>
    </div>
  );
}
