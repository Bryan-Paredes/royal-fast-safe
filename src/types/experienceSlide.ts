interface Location {
    city: string;
    state: string;
}

interface EquipmentDetails {
    name: string;
    model: string;
    weight?: string;
    dimensions?: string;
}

export interface SlideData {
    id: number;
    imageUrl: string;
    from: Location;
    to: Location;
    equipment: EquipmentDetails;
}