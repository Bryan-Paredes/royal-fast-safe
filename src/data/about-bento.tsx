import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconShieldPin,
} from "@tabler/icons-react";
import MultipleBeam from "@/components/MultipleBeam";

export const items = [
  {
    title: "Who We Are",
    description:
      "Royal Fast and Safe specializes in heavy haul and oversized freight transportation throughout the U.S., aiming to deliver cargo safely, quickly, and efficiently while maintaining top professionalism and compliance with regulations",
    header: <MultipleBeam />,
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Experience",
    description:
      "With 5+ years of experience, we’ve worked with construction, energy, mining, and manufacturing firms, transporting everything from machinery to large structures",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <img
          src="/about/experience.svg"
          alt="Experience Image"
          className="w-50"
          decoding="async"
          loading="lazy"
        />
      </span>
    ),
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to simplify life and boost client efficiency with innovative shipping solutions, ensuring successful domestic and international deliveries",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <IconShieldPin size={150} className=" text-primary-500" />
      </span>
    ),
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "At our heavy haul transport company, the power of communication drives success—connecting clients and crews for seamless, safe, and efficient delivery of oversized loads",
    header: (
      <span className="flex items-center justify-center w-full h-full">
        <img
          src="/about/conversation.svg"
          alt="Conversation Image"
          className="w-80"
          decoding="async"
          loading="lazy"
        />
      </span>
    ),
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
