import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
// import { AnimatedBeam, Circle } from "@/components/core/animated-beam";
// import { Icons } from "@/components/core/animated-beam";
import { AnimatedBeam, Circle } from "./Beam";
import {
  IconUser,
  IconBrandWhatsapp,
  IconMail,
  IconAppWindow,
  IconVideoPlus,
} from "@tabler/icons-react";

export default function MultipleBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex w-full max-w-[500px] mx-auto items-center justify-center overflow-hidden rounded-lg border bg-transparent p-12 border-none h-full ",
        className
      )}
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <IconUser />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="h-16 w-16">
            <img src="/royal.webp" alt="Royal" className="h-full w-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <IconBrandWhatsapp />
          </Circle>
          <Circle className="p-2" ref={div2Ref}>
            <IconMail />
          </Circle>
          <Circle className="p-2" ref={div3Ref}>
            <IconAppWindow />
          </Circle>
          <Circle className="p-2" ref={div4Ref}>
            <IconVideoPlus />
          </Circle>
          {/* <Circle className="p-2" ref={div5Ref}>
            <Icons.framer />
          </Circle> */}
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}
