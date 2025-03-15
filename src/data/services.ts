export interface Service {
    title: string;
    href: string;
    description?: string;
    image: string;
}

export const services: Service[] = [
    {
        title: "Heavy Equipment",
        href: "/service/heavy-equipment",
        description:
            "We ship freight of any size, weight, or shape, including agricultural equipment and oversize loads—just let us know what you need!",
        image: "/services/camion-de-carga.webp",
    },
    {
        title: "Container / Freight Shipping",
        href: "/service/container",
        description:
            "We offer custom container shipping solutions, with Total Fast and Safe being a top industry mover.",
        image: "/services/envase.webp",
    },
    {
        title: "Power Only / Drive Away",
        href: "/service/power-only",
        description:
            "If you need Power Only services, we will use our Semi Trucks to low your trailers.",
        image: "/services/remolque.webp",
    },
    {
        title: "Boats / Maritime Shipping",
        href: "/service/boat",
        description:
            "Small or large boat, we treat your boat as if it's our own! Licensed to transport your vessel Fast and Safe.",
        image: "/services/yate.webp",
    },
    {
        title: "RV / 5th Wheel",
        href: "/service/rv-5th-wheel-shipping",
        description:
            "RV & Travel Trailer, we can carry the weight, ramps, center reel and winch, All equipment for the haul.",
        image: "/services/remolque-2.webp",
    },
    {
        title: "Complex Logistics / Project",
        href: "/service/complicated-logistics",
        description:
            "We manage heavy equipment hauling and complex logistics, delivering your cargo efficiently—just share your goals!",
        image: "/services/camion-grua.webp",
    },
];

export const otherServices: Service[] = [
    {
        title: "Hazmat",
        href: "/service/hazmat",
        image: "/services/hazmat.webp",
    },
    {
        title: "Warehousing",
        href: "/service/warehousing",
        image: "/services/warehousing.webp",
    },
    {
        title: "Customs",
        href: "/service/customs",
        image: "/services/customs.webp",
    },
    {
        title: "Bond",
        href: "/service/bonded",
        image: "/services/bonded.webp",
    },
    {
        title: "Insured",
        href: "/service/insured",
        image: "/services/insured.webp",
    },
    {
        title: "Emergency Assitance Government Contracting",
        href: "/service/emergency-assistance-government-contracting",
        image: "/services/fema.webp",
    },
    {
        title: "Crane and Rigging",
        href: "/service/crane-and-rigging",
        image: "/services/rigging.webp",
    },
    {
        title: "Heavy Duty Towtruck Wrecker Rotator",
        href: "/service/heavy-duty-towtruck-wrecker-rotator",
        image: "/services/towtruck.webp",
    },
    {
        title: "International Overseas",
        href: "/service/international-overseas",
        image: "/services/overseas.webp",
    },
    {
        title: "Certificate & Inspection",
        href: "/service/certificate-and-inspection",
        image: "/services/certificate.webp",
    }
]