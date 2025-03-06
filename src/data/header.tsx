export interface Service {
  title: string;
  href: string;
  description: string;
  image: string;
}

export const routes: { title: string; href: string }[] = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Newsroom",
    href: "/newsroom",
  },
];

export const services: Service[] = [
  {
    title: "Heavy Equipment",
    href: "/service/heavy-equipment",
    description:
      "We ship freight of any size, weight, or shape, including agricultural equipment and oversize loads—just let us know what you need!",
    image: "/services/excavator.webp",
  },
  {
    title: "Container",
    href: "/service/container",
    description:
      "We offer custom container shipping solutions, with Total Fast and Safe being a top industry mover.",
    image: "/services/container-truck.webp",
  },
  {
    title: "Power Only",
    href: "/service/power-only",
    description:
      "If you need Power Only services, we will use our Semi Trucks to low your trailers.",
    image: "/services/container.webp",
  },
  {
    title: "Boat",
    href: "/service/boat",
    description:
      "Small or large boat, we treat your boat as if it's our own! Licensed to transport your vessel Fast and Safe.",
    image: "/services/boat.webp",
  },
  {
    title: "RV / 5th Wheel Shipping",
    href: "/service/rv-5th-wheel-shipping",
    description:
      "RV & Travel Trailer, we can carry the weight, ramps, center reel and winch, All equipment for the haul.",
    image: "/services/caravan.webp",
  },
  {
    title: "Complicated Logistics",
    href: "/service/complicated-logistics",
    description:
      "We manage heavy equipment hauling and complex logistics, delivering your cargo efficiently—just share your goals!",
    image: "/services/crane.webp",
  },
];
