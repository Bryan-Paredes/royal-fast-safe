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
            "Bulldozers, Cranes, SkidSteer, etc...",
        image: "/services/camion-de-carga.webp",
    },
    {
        title: "Container / Freight Shipping",
        href: "/service/container",
        description:
            "Cargo, ISO, Flat Rack, High Cube, etc...",
        image: "/services/envase.webp",
    },
    {
        title: "Power Only / Drive Away",
        href: "/service/power-only",
        description:
            "Semi, Dump Truck, Mobile Cranes, etc...",
        image: "/services/remolque.webp",
    },
    {
        title: "Boats / Maritime Shipping",
        href: "/service/boat",
        description:
            "Amphibious, Boat, Floating, Yacht, Barges, etc...",
        image: "/services/yate.webp",
    },
    {
        title: "RV / 5th Wheel",
        href: "/service/rv-5th-wheel-shipping",
        description:
            "Class C, 5th-Wheel, Teardrop, etc...",
        image: "/services/remolque-2.webp",
    },
    {
        title: "Complex Logistics / Project",
        href: "/service/complicated-logistics",
        description:
            "Inoperable Equipment, Super Loads, Oversize, Seamless Freight Solutions",
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