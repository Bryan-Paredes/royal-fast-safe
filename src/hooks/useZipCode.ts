import { useState } from "react";

interface ZipCodeData {
    city: string;
    state: string;
}

export const useZipCodeLookup = () => {
    const [loading, setLoading] = useState(false);

    const fetchZipData = async (zip: string, country: string): Promise<ZipCodeData | null> => {
        if (zip.length !== 5 || country !== "United States") return null;

        setLoading(true);
        try {
            const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
            if (!response.ok) throw new Error("ZIP Code not found");

            const data = await response.json();
            const city = data.places[0]["place name"];
            const state = data.places[0]["state abbreviation"];

            return { city, state };
        } catch (error) {
            console.error("Error fetching ZIP Code:", error);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { fetchZipData, loading };
};
