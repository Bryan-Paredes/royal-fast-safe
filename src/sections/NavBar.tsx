import { forwardRef, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Mail, PanelRightClose, PhoneCall } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { services } from "@/data/services";
import { routes } from "@/data/header";
import { motion } from "framer-motion";
import { flags, type FlagImage } from "@/data/hero";

export default function NavBar() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolling]);
  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`flex fixed items-center justify-evenly z-50 w-full mx-auto px-4 `}
      >
        <div
          className={`flex w-full mx-auto items-center justify-between max-w-7xl mt-1 rounded-xl px-5 transition-all duration-300 ${
            scrolling
              ? "bg-background shadow-lg dark:shadow-gray-400/30"
              : "bg-transparent shadow-none"
          } `}
        >
          <a href="/" className="block md:hidden">
            <img
              src="/logoRoyal.webp"
              alt="Logo Royal Fast and Safe"
              className="h-20 w-20 object-cover object-center rounded-full"
              loading="eager"
              decoding="async"
              width={100}
              height={100}
            />
          </a>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex items-center justify-center">
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  <img
                    src="/logoRoyal.webp"
                    alt="Logo Royal Fast and Safe"
                    className="h-28 w-32 object-cover object-center rounded-full"
                    loading="eager"
                    decoding="async"
                    width={100}
                    height={100}
                  />
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem className="text-lg mr-2">
                <a href="/blog">
                  <NavigationMenuLink
                    className={`px-4 py-2 font-medium hover:bg-primary-500 rounded-lg hover:text-white ${
                      scrolling ? "text-black dark:text-white" : "text-white"
                    }`}
                  >
                    Newsroom
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem> */}
              <div className=" flex items-center justify-center ">
                <div className="flex gap-6 ">
                  {flags.map((flag: FlagImage) => (
                    <img
                      src={flag.src}
                      alt={flag.alt}
                      className="h-9 w-9"
                      decoding="async"
                      loading="eager"
                    />
                  ))}
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-end space-x-2">
            <ModeToggle />
            <a href="tel:(888)4286329">
              <Button
                variant="outline"
                size="default"
                className="rounded-full hover:text-white cursor-pointer"
              >
                <PhoneCall size={36} />
              </Button>
            </a>
            <a href="/contact" className="cursor-pointer">
              <Button
                variant="default"
                size="default"
                className="hidden md:flex capitalize text-lg items-center gap-2 px-4 py-2 rounded-lg bg-primary-400 hover:bg-primary-600 transition-colors duration-200 ease-in-out text-white/80 cursor-pointer"
              >
                <span className="font-medium">Contact</span>
                <Mail size={24} strokeWidth={2} className="text-white/80" />
              </Button>
            </a>
            <Sheet>
              <SheetTrigger className="flex md:hidden rounded-full">
                <Button
                  variant="outline"
                  size="default"
                  className="rounded-full hover:text-white cursor-pointer"
                >
                  <PanelRightClose size={24} className="w-36 h-36" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-left">Routes</SheetTitle>
                  <hr className="border-primary-300" />
                </SheetHeader>
                <ul className="flex flex-col gap-3 p-2">
                  {routes.map((route) => (
                    <li key={route.title}>
                      <a href={route.href}>{route.title}</a>
                    </li>
                  ))}
                </ul>
                <div className="my-10 flex items-center justify-center">
                  <div className="flex gap-6">
                    {flags.map((flag: FlagImage) => (
                      <img
                        src={flag.src}
                        alt={flag.alt}
                        className="h-9 w-9"
                        decoding="async"
                        loading="eager"
                      />
                    ))}
                  </div>
                </div>
                <a
                  href="/contact"
                  className="flex items-center justify-start gap-2 cursor-pointer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="capitalize text-lg stroke-2 items-center gap-2 px-4 py-2 rounded-lg bg-primary-400 hover:bg-primary-600 hover:text-white transition-colors duration-200 ease-in-out text-white/80 mx-auto mt-3 cursor-pointer"
                  >
                    <span className="font-medium">Contact</span>
                    <Mail size={18} className="text-white/80" />
                  </Button>
                </a>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
