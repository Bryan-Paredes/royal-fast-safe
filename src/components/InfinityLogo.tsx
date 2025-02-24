import { Marquee } from "@/components/magicui/marquee";
import { logosGrid } from "@/data/logoGrid";

export function SliceLogo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee>
        {logosGrid.map((logo) => (
          <img
            className="rounded-xl bg-white dark:bg-transparent dark:border p-3"
            width="150"
            alt={logo.name}
            src={logo.logo}
          />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}
