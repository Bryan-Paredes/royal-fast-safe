export type FlagImage = {
    id: number;
    src: string;
    alt: string;
}

export const flags: FlagImage[] = [
    {
        id: 1,
        src: "/flags/usa.svg",
        alt: "USA",
    },
    {
        id: 2,
        src: "/flags/canada.svg",
        alt: "Canada",
    },
    {
        id: 3,
        src: "/flags/mexico.svg",
        alt: "Mexico",
    }
]