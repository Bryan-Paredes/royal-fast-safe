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
import { Mail, MenuIcon, PhoneCall } from "lucide-react";
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
    <header className="container top-0 left-0 bg-background/80 w-full z-50 py-5 border-b border-gray-300 sticky backdrop-filter backdrop-blur-xl">
      <nav className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 lg:px-0">
        <div className="flex items-center space-x-4">
          <a href="/">
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-20 rounded-full"
              decoding="async"
            />
          </a>
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <a href={routes[0].href}>
                  <NavigationMenuLink
                    className={`bg-transparent font-medium hover:bg-accent px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:text-white`}
                  >
                    {routes[0].title}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-base hover:text-white">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid grid-cols-1 w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-primary-foreground ">
                    {services.map(({ title, href, description }) => (
                      <ListItem key={title} title={title} href={href}>
                        {description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href={routes[1].href}>
                  <NavigationMenuLink className="bg-transparent font-medium hover:bg-accent px-4 py-2 rounded-md transition-colors duration-200 ease-in-out hover:text-white">
                    {routes[1].title}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <Button
            asChild
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
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Routes</SheetTitle>
                <hr className="border-primary-300" />
              </SheetHeader>
              <ul className="flex flex-col gap-3 p-2">
                {routes.map((route) => (
                  <li>
                    <a href={route.href}>{route.title}</a>
                  </li>
                ))}
              </ul>
              <SheetHeader className="my-3">
                <SheetTitle>Services</SheetTitle>
                <hr className="border-primary-300" />
              </SheetHeader>
              <ul className="flex flex-col gap-3 p-2 ">
                {services.map((service) => (
                  <li>
                    <a href={service.href}>{service.title}</a>
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="uppercase stroke-2 items-center gap-2 px-4 py-2 rounded-lg bg-primary-400 hover:bg-primary-600 hover:text-white transition-colors duration-200 ease-in-out text-white/80 mx-auto mt-3"
              >
                <a href="/contact">
                  <span className="font-medium">Contact</span>
                  <Mail size={18} className="text-white/80" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
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
