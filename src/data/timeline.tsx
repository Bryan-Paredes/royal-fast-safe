const checks = [
  {
    id: 1,
    text: "Permits",
  },
  {
    id: 2,
    text: "Escorts",
  },
  {
    id: 3,
    text: "Pilots",
  },
  {
    id: 4,
    text: "Nationwide - Highest Safety Protocols",
  },
  {
    id: 5,
    text: "We got you covered !",
  },
];

export const TimelineData = [
  {
    title: "The Royalty of Heavy Hauling",
    content: (
      <div>
        <p className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 text-balance">
          Individuals and Businesses have trusted our unmatched expertise in
          handling small and large- scale transportation solutions.
        </p>
        <img
          src="/timeline/heavy-timeline.webp"
          alt="startup template"
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
    title: "Oversized Loads",
    content: (
      <div>
        <div className="flex flex-col py-5 gap-2 text-center items-start justify-evenly">
          {checks.map((check, index) => (
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
                {check.text}
              </span>
            </div>
          ))}
        </div>
        <img
          src="/timeline/oversize-timeline.webp"
          alt="hero template"
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
    title:
      "FULL TRUCKLOAD TRANSPORT, LESS THAN TRUCKOAD (LTL), FREIGHT SHIPPING",
    content: (
      <div>
        <p className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200 text-xs md:text-base font-normal mb-8 text-balance">
          Cut costs efficiency by combining your equipment with other shipments
          on the same trailer, we find the best driver and trailer for your
          needs.
        </p>
        <img
          src="/timeline/partial-timeline.webp"
          alt="hero template"
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
