import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam, Circle } from "./ui/beam";
import {
  IconMail,
  IconBrandMessenger,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMap2,
} from "@tabler/icons-react";

const CircleS = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

CircleS.displayName = "Circle";

export default function MultipleBeam() {
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
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[250px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <a href="" className="flex items-center justify-center">
            <Circle ref={div1Ref}>
              <IconBrandFacebook color="black" />
            </Circle>
          </a>
          <a href="" className="flex items-center justify-center">
            <Circle ref={div5Ref}>
              <IconBrandLinkedin color="black" />
            </Circle>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a href="/contact" className="flex items-center justify-center">
            <Circle ref={div2Ref}>
              <IconMail color="black" />
            </Circle>
          </a>
          <Circle ref={div4Ref} className="size-[75px]">
            <img src="/royal.webp" alt="Royal" className="h-full w-full" />
          </Circle>
          <a href="" className="flex items-center justify-center">
            <Circle ref={div6Ref}>
              <IconBrandInstagram color="black" />
            </Circle>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a href="" className="flex items-center justify-center">
            <Circle ref={div3Ref}>
              <IconMap2 color="black" />
            </Circle>
          </a>
          <a
            href=""
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
          >
            <Circle ref={div7Ref}>
              <IconBrandMessenger color="currentColor" />
            </Circle>
          </a>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
