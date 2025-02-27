import { forwardRef } from "react";

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
import { routes, services } from "@/data/header";

export default function NavBar() {
  return (
    <nav className="flex fixed items-center justify-evenly z-50 w-full mx-auto px-4">
      <div className="flex w-full mx-auto items-center justify-between scroll-auto backdrop-blur-sm backdrop-filter bg-background max-w-7xl mt-1 rounded-xl px-5 shadow-lg dark:shadow-lg dark:shadow-gray-400/30">
        <a href="/" className="block md:hidden">
          <img
            src="/royal.webp"
            alt="Logo"
            className="h-20 w-20 object-cover object-center"
            loading="eager"
            decoding="async"
            width={100}
            height={100}
          />
        </a>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex">
            <NavigationMenuItem>
              <NavigationMenuLink href="/">
                <img
                  src="/royal.webp"
                  alt="Logo"
                  className="h-20 w-20 object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-lg">
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} hover:text-white`}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-lg">
              <NavigationMenuTrigger className="hover:text-white">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {services.map(({ title, href, description }) => (
                    <ListItem
                      className="hover:text-white"
                      key={title}
                      title={title}
                      href={href}
                    >
                      {description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="text-lg">
              <a href="/docs">
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} hover:text-white`}
                >
                  Newsroom
                </NavigationMenuLink>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center justify-end space-x-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:text-white"
          >
            <a href="/">
              <PhoneCall size={20} />
            </a>
          </Button>
          <Button
            variant="default"
            size="default"
            asChild
            className="hidden md:flex uppercase items-center gap-2 px-4 py-2 rounded-lg bg-primary-400 hover:bg-primary-600 transition-colors duration-200 ease-in-out text-white/80"
          >
            <a href="/contact" className="">
              <span className="font-medium uppercase">Contact</span>
              <Mail size={18} strokeWidth={2} className="text-white/80" />
            </a>
          </Button>
          <Sheet>
            <SheetTrigger className="flex md:hidden rounded-2xl">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:text-white cursor-pointer"
              >
                <PanelRightClose size={24} />
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
              <SheetHeader className="my-3">
                <SheetTitle className="text-left">Services</SheetTitle>
                <hr className="border-primary-300" />
              </SheetHeader>
              <ul className="flex flex-col gap-3 p-2 ">
                {services.map((service) => (
                  <li key={service.title}>
                    <a href={service.href}>{service.title}</a>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="lg"
                className="uppercase stroke-2 items-center gap-2 px-4 py-2 rounded-lg bg-primary-400 hover:bg-primary-600 hover:text-white transition-colors duration-200 ease-in-out text-white/80 mx-auto mt-3"
              >
                <a href="/contact" className="flex items-center gap-2">
                  <span className="font-medium">Contact</span>
                  <Mail size={18} className="text-white/80" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
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
