import { Timeline } from "@/components/ui/timeline";
import { IconCircleDashedCheck } from "@tabler/icons-react";

const checks = [
  {
    id: 1,
    text: "Top Safety standards",
  },
  {
    id: 2,
    text: "Local and Long-Distance Logistics",
  },
  {
    id: 3,
    text: "Expert Oversize load transport",
  },
  {
    id: 4,
    text: "Quality Equipment transport every time",
  },
];

export function TimelineDemo() {
  const data = [
    {
      title: "Experts in Heavy Haul Shipping",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Businesses and consumers, just like you, have trusted Heavy Haulers
            to transport oversize equipment and machinery for over fourteen
            years.
          </p>
          <img
            src="/timeline/1.jpg"
            alt="startup template"
            width={1000}
            height={800}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
          {/* <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
        </div>
      ),
    },
    {
      title: "Oversized Loads",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>

          <img
            src="/timeline/2.jpg"
            alt="hero template"
            width={500}
            height={500}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
          {/* <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
        </div>
      ),
    },
    {
      title: "Partial Load / LTL Hauling Solutions",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="">
            {checks.map((check, index) => (
              <div
                className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                key={index}
              >
                <IconCircleDashedCheck className="text-green-500" />{" "}
                {check.text}
              </div>
            ))}
          </div>
          <img
            src="/timeline/3.jpg"
            alt="hero template"
            width={500}
            height={500}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
          {/* <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            /> */}
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
