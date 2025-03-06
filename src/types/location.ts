// Tipo para la información de ubicación
export type LocationInfo = {
    city: string
    state: string
    country: string
}

// Tipo para los datos del formulario
export type FormData = {
    name: string
    phone: string
    email: string
    message: string
    shipFrom: {
        city: string
        state: string
        postalCode: string
        country: string
    }
    shipTo: {
        city: string
        state: string
        postalCode: string
        country: string
    }
    agreeToSMS: boolean
}

