import type { LocationInfo } from "@/types/location"
import { zipCodeDatabase } from "@/data/zip-codes"

/**
 * Busca información de ubicación basada en el código postal usando la API de Zippopotam.us
 * Si la API falla, utiliza una base de datos local como respaldo
 * @param zipCode Código postal a buscar
 * @returns Información de ubicación (ciudad y estado) o null si no se encuentra
 */
export async function fetchLocationByZipCode(zipCode: string): Promise<LocationInfo | null> {
    try {
        // Usar HTTPS en lugar de HTTP para evitar problemas de protocolo mixto
        const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })

        if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`)
            // Si la API falla, intentamos usar nuestra base de datos local
            return getLocationFromLocalDatabase(zipCode)
        }

        const data = await response.json()
        console.log("Location data:", data)

        if (data && data.places && data.places.length > 0) {
            return {
                postalCode: zipCode,
                city: data.places[0]["place name"],
                state: data.places[0].state,
                country: data.country
            }
        }

        // Si no hay datos en la API, intentamos usar nuestra base de datos local
        return getLocationFromLocalDatabase(zipCode)
    } catch (error) {
        console.error("Error fetching location data:", error)
        // Si hay un error en la solicitud, intentamos usar nuestra base de datos local
        return getLocationFromLocalDatabase(zipCode)
    }
}

/**
 * Obtiene información de ubicación desde la base de datos local
 * @param zipCode Código postal a buscar
 * @returns Información de ubicación (ciudad y estado) o null si no se encuentra
 */
function getLocationFromLocalDatabase(zipCode: string): LocationInfo | null {
    return zipCodeDatabase[zipCode] || null
}

