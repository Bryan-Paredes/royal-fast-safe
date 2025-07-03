export function generateQuoteEmailTemplate(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
    shipFrom: {
        country: string;
        postalCode: string;
        city: string;
        state: string;
    };
    shipTo: {
        country: string;
        postalCode: string;
        city: string;
        state: string;
    };
    weight: string;
    year: string;
    make: string;
    model: string;
    isOperable: boolean;
    preferredShippingDate: string;
    agreeToSMS: boolean;
}) {
    const {
        name,
        email,
        phone,
        message,
        shipFrom,
        shipTo,
        weight,
        year,
        make,
        model,
        isOperable,
        preferredShippingDate,
        agreeToSMS,
    } = data;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-gray-100 font-sans">
        <div class="max-w-4xl mx-auto p-8">
            
            <!-- TITLE HEADER -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 text-center border-2 border-blue-200">
                <h1 class="text-4xl font-bold text-blue-800 mb-4">🚛 NEW QUOTE REQUEST</h1>
                <p class="text-xl text-gray-600">Equipment shipping quote from <strong>${name}</strong></p>
                <p class="text-sm text-gray-500 mt-2">Submitted on ${new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}</p>
            </div>

            <!-- CONTACT INFORMATION SECTION -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-blue-500">
                <h2 class="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                    <span class="text-3xl">👤</span>
                    CONTACT INFORMATION
                </h2>
                
                <div class="space-y-4">
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>Name:</strong></span>
                        <span class="text-lg text-gray-900">${name}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>Email:</strong></span>
                        <span class="text-lg text-gray-900">${email}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>Phone:</strong></span>
                        <span class="text-lg text-gray-900">${phone ?? "Not provided"}</span>
                    </div>
                    
                    <div class="flex items-center">
                        <span class="font-bold text-gray-700 w-32"><strong>SMS Consent:</strong></span>
                        <span class="px-4 py-2 rounded-full text-sm font-bold ${agreeToSMS
            ? 'bg-green-100 text-green-800 border-2 border-green-300'
            : 'bg-red-100 text-red-800 border-2 border-red-300'
        }">
                            ${agreeToSMS ? "✓ YES - Can contact via SMS" : "✗ NO - Cannot contact via SMS"}
                        </span>
                    </div>
                </div>
            </div>

            <!-- SHIP FROM SECTION -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-green-500">
                <h2 class="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                    <span class="text-3xl">📍</span>
                    SHIP FROM LOCATION
                </h2>
                
                <div class="space-y-4">
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>Country:</strong></span>
                        <span class="text-lg text-gray-900">${shipFrom.country || "Not provided"}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>State:</strong></span>
                        <span class="text-lg text-gray-900">${shipFrom.state}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>City:</strong></span>
                        <span class="text-lg text-gray-900">${shipFrom.city}</span>
                    </div>
                    
                    <div class="flex items-center">
                        <span class="font-bold text-gray-700 w-32"><strong>Postal Code:</strong></span>
                        <span class="text-lg text-gray-900">${shipFrom.postalCode ? shipFrom.postalCode : "Not provided"}</span>
                    </div>
                </div>
            </div>

            <!-- SHIP TO SECTION -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-green-500">
                <h2 class="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🎯</span>
                    SHIP TO LOCATION
                </h2>
                
                <div class="space-y-4">
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>Country:</strong></span>
                        <span class="text-lg text-gray-900">${shipTo.country || "Not provided"}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>State:</strong></span>
                        <span class="text-lg text-gray-900">${shipTo.state}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-32"><strong>City:</strong></span>
                        <span class="text-lg text-gray-900">${shipTo.city}</span>
                    </div>
                    
                    <div class="flex items-center">
                        <span class="font-bold text-gray-700 w-32"><strong>Postal Code:</strong></span>
                        <span class="text-lg text-gray-900">${shipTo.postalCode ? shipTo.postalCode : "Not provided"}</span>
                    </div>
                </div>
            </div>

            <!-- EQUIPMENT DETAILS SECTION -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-yellow-500">
                <h2 class="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-3">
                    <span class="text-3xl">🚗</span>
                    EQUIPMENT DETAILS
                </h2>
                
                <div class="space-y-4">
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-40"><strong>Year:</strong></span>
                        <span class="text-lg text-gray-900">${year}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-40"><strong>Make:</strong></span>
                        <span class="text-lg text-gray-900">${make}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-40"><strong>Model:</strong></span>
                        <span class="text-lg text-gray-900">${model}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-40"><strong>Weight:</strong></span>
                        <span class="text-lg text-gray-900">${weight ?? "Not provided"}</span>
                    </div>
                    
                    <div class="flex items-center border-b border-gray-200 pb-3">
                        <span class="font-bold text-gray-700 w-40"><strong>Operable Status:</strong></span>
                        <span class="px-4 py-2 rounded-full text-sm font-bold ${isOperable
            ? 'bg-green-100 text-green-800 border-2 border-green-300'
            : 'bg-red-100 text-red-800 border-2 border-red-300'
        }">
                            ${isOperable ? "✓ OPERABLE" : "✗ NOT OPERABLE"}
                        </span>
                    </div>
                    
                    <div class="flex items-center">
                        <span class="font-bold text-gray-700 w-40"><strong>Preferred Shipping Date:</strong></span>
                        <span class="text-lg text-gray-900">${preferredShippingDate ? new Date(preferredShippingDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : "Not specified"}</span>
                    </div>
                </div>
            </div>

            <!-- ADDITIONAL DETAILS SECTION -->
            <div class="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-8 border-gray-500">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <span class="text-3xl">📝</span>
                    ADDITIONAL DETAILS
                </h2>
                
                <div class="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                    <div class="text-lg text-gray-900 leading-relaxed">${message}</div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
                <div class="text-center">
                    <p class="text-gray-600 text-lg mb-2">This quote request was submitted through</p>
                    <p class="text-blue-600 text-xl font-bold mb-4">Royal Fast & Safe</p>
                    <p class="text-gray-500 text-sm">Website: royalfastandsafe.com</p>
                </div>
            </div>
            
        </div>
    </body>
    </html>
  `;
} 