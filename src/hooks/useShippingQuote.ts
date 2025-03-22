
import type React from "react"
import { useState, useEffect, useCallback } from "react"
import type { QuoteData } from "@/types/location"
import { fetchLocationByZipCode } from "@/utils/zip-code"
import { toast } from "sonner"
import confetti from "canvas-confetti"

export const initialFormData: QuoteData = {
    name: "",
    phone: "",
    email: "",
    message: "",
    shipFrom: {
        city: "",
        state: "",
        postalCode: "",
        country: "",
    },
    shipTo: {
        city: "",
        state: "",
        postalCode: "",
        country: "",
    },
    agreeToSMS: false,
}

export function useShippingQuote() {
    // Estado inicial del formulario
    const [zipCode, setZipCode] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    // Función para actualizar la ubicación basada en el código postal
    const updateLocation = useCallback(async (section: "shipFrom" | "shipTo", zipCode: string) => {
        if (zipCode.length === 5) {
            const locationInfo = await fetchLocationByZipCode(zipCode)
            if (locationInfo) {
                setZipCode((prev) => ({
                    ...prev,
                    [section]: {
                        ...prev[section],
                        city: locationInfo.city,
                        state: locationInfo.state,
                        country: locationInfo.country,
                    },
                }))
            }
        }
    }, [])

    // Manejador para cambios en los campos del formulario
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        // Maneja campos anidados (shipFrom y shipTo)
        if (name.includes(".")) {
            const [section, field] = name.split(".")
            setFormData((prev) => ({
                ...prev,
                [section]: {
                    ...(prev[section as keyof typeof prev] as object),
                    [field]: value,
                },
            }))
        } else {
            // Maneja campos de nivel superior
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }))
        }
    }, [])

    // Manejador para el checkbox
    const handleCheckboxChange = useCallback((checked: boolean) => {
        setFormData((prev) => ({
            ...prev,
            agreeToSMS: checked,
        }))
    }, [])

    // Manejador para enviar el formulario
    // const handleSubmit = useCallback(
    //     (e: React.FormEvent) => async () => {
    //         e.preventDefault()
    //         console.log("Submitting form with data:", formData);

    //         try {
    //             const response = await fetch("/api/quote", {
    //                 method: "POST",
    //                 body: JSON.stringify(formData),
    //             });
    //             setIsLoading(true)

    //             if (response.ok) {
    //                 console.log("Form submitted:", formData)
    //                 toast.success("Form submitted successfully!")
    //                 confetti()
    //                 setFormData(initialFormData)
    //                 setIsLoading(false)
    //             }

    //         } catch (error) {
    //             console.log("Error submitting form:", error)
    //             toast.error("Error submitting form please try again!")

    //         } finally {
    //             setIsLoading(false)
    //         }
    //         // Aquí iría la lógica para enviar los datos al servidor
    //     },
    //     [formData],
    // )

    // Efecto para actualizar la ciudad y estado cuando cambia el código postal de "Ship From"
    useEffect(() => {

        if (formData.shipFrom.postalCode.length === 5) {
            updateLocation("shipFrom", formData.shipFrom.postalCode)
        }

        if (formData.shipTo.postalCode.length === 5) {
            updateLocation("shipTo", formData.shipTo.postalCode)

        }

    }, [formData.shipFrom.postalCode, formData.shipTo.postalCode, updateLocation])

    return {
        formData,
        isLoading,
        handleChange,
        handleCheckboxChange,

    }
}

