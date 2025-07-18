// src/pages/api/send-meta-event.ts
import type { APIRoute } from 'astro';
import { createHash } from 'crypto';

export const prerender = false;

const PIXEL_ID = import.meta.env.META_PIXEL_ID;
const ACCESS_TOKEN = import.meta.env.META_ACCESS_TOKEN;

//Entorno de pruebas el codigo debe de ir a nivel de data
// const TEST_EVENT_CODE = 'TEST73250';

function hashSHA256(value: string) {
    return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    const { email, phone, fbp, fbc } = body;

    // Obtener IP y user agent
    const client_ip_address = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? '';
    const client_user_agent = request.headers.get('user-agent') ?? '';

    const payload = {
        data: [
            {
                event_name: 'Lead',
                event_time: Math.floor(Date.now() / 1000),
                action_source: 'website',
                user_data: {
                    em: [hashSHA256(email)],
                    ph: [hashSHA256(phone)],
                    client_ip_address,
                    client_user_agent,
                    fbp: fbp ? [fbp] : undefined,
                    fbc: fbc ? [fbc] : undefined,
                    external_id: [hashSHA256(email)],
                },
                custom_data: {
                    currency: 'USD',
                    value: '0.00',
                },
                attribution_data: {
                    attribution_share: '0.3',
                },
                original_event_data: {
                    event_name: 'Lead',
                    event_time: Math.floor(Date.now() / 1000),
                }
            },
        ],
        // test_event_code: TEST_EVENT_CODE,
    };

    const url = `https://graph.facebook.com/v23.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        return new Response(JSON.stringify({ success: true, data }), { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
    }
};