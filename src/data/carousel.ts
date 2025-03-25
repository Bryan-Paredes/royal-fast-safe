interface ExperienceImage {
    id: number;
    src: string;
    data: {
        from: string;
        to: string;
        equipment: string;
    }
}

export const ExperienceImages: ExperienceImage[] = [
    {
        id: 1,
        src: "/slideImages/johnDeere.webp",
        data: {
            from: "Longmont, CO",
            to: "Fort Hancock, TX",
            equipment: "John Deere 770A motor grader 33' L x 8.6' W x 10.6' H x 34K",
        }
    },
    {
        id: 2,
        src: "/slideImages/Doosan.webp",
        data: {
            from: "Parowan, UT",
            to: "Conchas, NM",
            equipment: "Doosan DX225LC Hydraulic Excavator 31ft L x 10.5ft W x 9.6ft H x 52800 lbs",
        }
    },
    {
        id: 3,
        src: "/slideImages/Kobelco.webp",
        data: {
            from: "Longmont, CO",
            to: "Fort Hancock, TX",
            equipment: "Kobelco SK210 LC Excavator 32' L x 11' W x 11.3' H x 57K",
        }
    },
    {
        id: 4,
        src: "/slideImages/Kenworth.webp",
        data: {
            from: "Douglas, WY",
            to: "Spencer, NE",
            equipment: "Kenworth T800 dump truck 33' L x 8' W x 10.5' H x 33K LBS",
        }
    },
    {
        id: 5,
        src: "/slideImages/CR582.webp",
        data: {
            from: "Arcola, TX",
            to: "Hobe Sound, FL",
            equipment: "CR582 2014 Mantis 15010 77 Ton Telescopic Boom Crawler Crane 49' L x 12'6W x 10'7H x 150K LBS",
        }
    },
    {
        id: 6,
        src: "/slideImages/Caterpillar930M.webp",
        data: {
            from: "Arcola, TX",
            to: "Hobe Sound, FL",
            equipment: "Caterpillar 930M Wheel Loader 25' L x 9.8' W x 12' H x 31K LBS"
        }
    },
    {
        id: 7,
        src: "/slideImages/CAT420F.webp",
        data: {
            from: "Waco, TX",
            to: "Katy, TX",
            equipment: "Pair of CAT 420F IT Loader Backhoes 40ft L x 8.5ft W x 10ft H x 46000lbs"
        }
    }
]