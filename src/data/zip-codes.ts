import type { LocationInfo } from "@/types/location"

// Base de datos local de códigos postales comunes
export const zipCodeDatabase: Record<string, LocationInfo> = {
    "90210": { city: "Beverly Hills", state: "California", country: "United States" },
    "10001": { city: "New York", state: "New York", country: "United States" },
    "60601": { city: "Chicago", state: "Illinois", country: "United States" },
    "77001": { city: "Houston", state: "Texas", country: "United States" },
    "33101": { city: "Miami", state: "Florida", country: "United States" },
    "98101": { city: "Seattle", state: "Washington", country: "United States" },
    "02108": { city: "Boston", state: "Massachusetts", country: "United States" },
    "20001": { city: "Washington", state: "DC", country: "United States" },
    "30301": { city: "Atlanta", state: "Georgia", country: "United States" },
    "75201": { city: "Dallas", state: "Texas", country: "United States" },
}

