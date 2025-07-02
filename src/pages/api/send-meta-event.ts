// src/pages/api/send-meta-event.ts
import type { APIRoute } from 'astro';
import { SHA256, enc } from 'crypto-js';

const PIXEL_ID = import.meta.env.META_PIXEL_ID;
const ACCESS_TOKEN = import.meta.env.META_ACCESS_TOKEN;
const TEST_EVENT_CODE = 'TEST73250';


function hashSHA256(value: string) {
    return SHA256(value.trim().toLowerCase()).toString(enc.Hex);
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    const { email, phone } = body;

    const payload = {
        data: [
            {
                event_name: 'Lead',
                event_time: 1751424316,
                action_source: 'website',
                test_event_code: TEST_EVENT_CODE,
                user_data: {
                    em: [hashSHA256(email)],
                    ph: [hashSHA256(phone)],
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
                    event_time: 1751424316,
                }
            },
        ],
    };

    const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

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