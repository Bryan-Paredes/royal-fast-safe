import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
    // Este archivo puede ser usado para verificación de Google Search Console
    // Puedes agregar aquí cualquier código de verificación que necesites

    const verificationContent = `google-site-verification: google-verification.html`;

    return new Response(verificationContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}; 