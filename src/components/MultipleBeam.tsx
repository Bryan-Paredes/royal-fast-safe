import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { AnimatedBeam, Circle } from "./ui/beam";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
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
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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
      className="relative flex h-[310px] w-full items-center justify-center overflow-hidden p-10 my-16"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[250px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <a
            href="https://www.facebook.com/royalfastandsafetransportation"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Visit our Facebook page"
          >
            <Circle ref={div1Ref}>
              <IconBrandFacebook color="currentColor" />
            </Circle>
          </a>
          <h3 className="text-center text-base/7 font-semibold text-accent">
            Get in Touch
          </h3>
          <a
            href="https://www.linkedin.com/company/royal-fast-safe"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Visit our LinkedIn page"
          >
            <Circle ref={div5Ref}>
              <IconBrandLinkedin color="currentColor" />
            </Circle>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            href="mailto:info@royalfastandsafe.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Send an email to info@royalfastandsafe.com"
          >
            <Circle ref={div2Ref}>
              <IconMail color="currentColor" />
            </Circle>
          </a>
          <Circle ref={div4Ref} className="size-[95px]">
            <img
              src="/royal.webp"
              alt="Royal Fast & Safe Logo"
              className="h-full w-full rounded-full"
            />
          </Circle>
          <a
            href="https://www.instagram.com/royal.fast_safe"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Visit our Instagram page"
          >
            <Circle ref={div6Ref}>
              <IconBrandInstagram color="currentColor" />
            </Circle>
          </a>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            href="https://maps.app.goo.gl/cr8a6AzkfqWghLW77"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Visit our location on Google Maps"
          >
            <Circle ref={div3Ref}>
              <IconMap2 color="currentColor" />
            </Circle>
          </a>
          <a
            href="https://x.com/royalfast_safe"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-black hover:text-primary-500 transition-colors duration-200"
            aria-label="Visit our X page (formerly Twitter)"
          >
            <Circle ref={div7Ref}>
              <IconBrandX color="currentColor" />
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
