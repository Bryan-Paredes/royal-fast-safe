import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Service } from "@/data/services";

export default function ServiceCard({
  service,
  className,
  classCard,
}: {
  service: Service[];
  className?: string;
  classCard?: string;
}) {
  return (
    <>
      {service.map(({ title, description, image }: Service) => (
        <Card
          className={`bg-primary-500/35 dark:bg-zinc-800 flex items-center justify-center w-full h-full shadow-none hover:shadow-sm hover:shadow-primary-400 hover:scale-[103%] transition-all duration-200 ease-in-out ${classCard}`}
          key={title}
        >
          <CardHeader className="flex flex-col items-center justify-center gap-4">
            <img
              src={image}
              alt={title}
              width={40}
              height={40}
              className={`w-20 h-20 object-center object-cover ${className}`}
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
      ))}
    </>
  );
}
