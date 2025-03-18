import { Marquee } from "@/components/ui/marquee";
import { logosGrid } from "@/data/logoGrid";

export function SliceLogo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee>
        {logosGrid.map((logo) => (
          <img
            key={logo.name}
            className="rounded-xl bg-white dark:bg-zinc-700 dark:border p-3 object-contain object-center w-48 h-24"
            width="200"
            alt={logo.name}
            src={logo.logo}
            decoding="async"
            loading="lazy"
          />
        ))}
      </Marquee>
    </div>
  );
}
