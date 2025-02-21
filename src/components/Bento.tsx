import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconGraph,
} from "@tabler/icons-react";
import MultipleBeam from "./MultipleBeam";

export default function BentoSection() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] p-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          //   icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[2rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Who We Are",
    description:
      "At Royal Fast and Safe, we are leaders in heavy haul and oversized freight transportation across the U.S. Our mission is to provide safe, fast, and efficient solutions, ensuring your cargo is delivered with the highest level of professionalism and regulatory compliance.",
    header: <MultipleBeam />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Experience",
    description:
      "With +5 years of experience in the industry, we have worked with companies in construction, energy, mining, and manufacturing, transporting everything from industrial machinery to large-scale structures.",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <img
          src="/about/experience.svg"
          alt="Experience Image"
          className="w-50"
          decoding="async"
        />
      </span>
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Mission",
    description: "Discover the beauty of thoughtful and functional design.",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <IconGraph size={150} className=" text-primary-500" />
      </span>
    ),
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <img
          src="/about/conversation.svg"
          alt="Conversation Image"
          className="w-80"
          decoding="async"
        />
      </span>
    ),
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
