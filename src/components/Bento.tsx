import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/data/about-bento";

export default function BentoSection() {
  return (
    <BentoGrid className="max-w-5xl  mx-auto md:auto-rows-[20rem] p-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
