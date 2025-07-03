// Tipo para la información de ubicación
export type LocationInfo = {
    city: string
    state: string
    postalCode: string
    country: string
    manualEdit: boolean
}

// Tipo para los datos del formulario
export interface QuoteData {
    name: string
    phone: string
    email: string
    message: string
    shipFrom: LocationInfo
    shipTo: LocationInfo
    weight: string
    year: string
    make: string
    model: string
    isOperable: boolean
    preferredShippingDate: string
    agreeToSMS: boolean
}

