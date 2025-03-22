// Tipo para la información de ubicación
export type LocationInfo = {
    city: string
    state: string
    postalCode: string
    country: string
}

// Tipo para los datos del formulario
export interface QuoteData {
    name: string
    phone: string
    email: string
    message: string
    shipFrom: LocationInfo
    shipTo: LocationInfo
    agreeToSMS: boolean
}

