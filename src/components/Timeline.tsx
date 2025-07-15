import { Timeline } from "@/components/ui/timeline";
import { TimelineData } from "@/data/timeline";

interface TimelineSectionProps {
  t: any;
}

export function TimelineSection({ t }: TimelineSectionProps) {
  // Crear datos del timeline con traducciones
  const translatedTimelineData = [
    {
      title: t.timeline.items.heavyHauling.title,
      content: (
        <div>
          <p className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 text-balance">
            {t.timeline.items.heavyHauling.description}
          </p>
          <img
            src="/timeline/heavy-timeline.webp"
            alt="Heavy equipment transportation timeline showing professional heavy haul services"
            width={1000}
            height={800}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
        </div>
      ),
    },
    {
      title: t.timeline.items.oversizedLoads.title,
      content: (
        <div>
          <div className="flex flex-col py-5 gap-2 text-center items-start justify-evenly">
            {t.timeline.items.oversizedLoads.checks.map(
              (check: string, index: number) => (
                <div
                  className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                  key={index}
                >
                  <span className="flex gap-3 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="none"
                    >
                      <style>
                        {`
                    @keyframes check {
                      to {
                        stroke-dashoffset: 0;
                      }
                    }
                  `}
                      </style>
                      <path
                        stroke="#00C427"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M5.387 12.68l3.955 3.956 9.271-9.272"
                        style={{
                          strokeDasharray: 100,
                          strokeDashoffset: 100,
                          animation:
                            "check 2s infinite cubic-bezier(.99,-.1,.01,1.02)",
                        }}
                      />
                    </svg>
                    {check}
                  </span>
                </div>
              )
            )}
          </div>
          <img
            src="/timeline/oversize-timeline.webp"
            alt="Oversized load transportation with permits, escorts and safety protocols"
            width={500}
            height={500}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
        </div>
      ),
    },
    {
      title: t.timeline.items.freightShipping.title,
      content: (
        <div>
          <p className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 text-balance">
            {t.timeline.items.freightShipping.description}
          </p>
          <img
            src="/timeline/partial-timeline.webp"
            alt="Freight shipping and logistics services for full truckload and LTL transportation"
            width={500}
            height={500}
            decoding="async"
            loading="lazy"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-xl"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={translatedTimelineData} />
    </div>
  );
}
