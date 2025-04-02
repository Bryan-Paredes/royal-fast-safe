export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);


export const POST: APIRoute = async ({ request }) => {

    try {

        const body = await request.json();


        const {
            name,
            phone,
            email,
            message,
            shipFrom = {},
            shipTo = {},
            weight,
            agreeToSMS,
        } = body


        if (!name || !email || !message) {
            return new Response(JSON.stringify({
                message: 'Missing required fields',
            }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const emailContent = `
            <h1>🙎🏻‍♂️ ${name} ${email}</h1>
            <h3>🔤 Ship From:</h3>
            <p>Postal Code: ${shipFrom?.postalCode ? shipFrom.postalCode : "No postal code provided"}</p>
            <p>City: ${shipFrom.city}</p>
            <p>State: ${shipFrom.state}</p>
            <h3>🔤 Ship To:</h3>
            <p>Postal Code: ${shipTo?.postalCode ? shipTo.postalCode : "No postal code provided"}</p>
            <p>City: ${shipTo.city}</p>
            <p>State: ${shipTo.state}</p>
            <h3>💎 Weight:</h3>
            <p>${weight ? weight : "No weight provided"}</p>
            <h3>📝 Message:</h3>
            <p>${message}</p>
            <h3>📞 Phone Number:</h3>
            ${phone ? `<p>${phone}</p>` : `<p>No phone number provided</p>`
            }
            <h3>📧 Email:</h3>
            <p>${email}</p>
            <h3>📞 Agree to SMS:</h3>
            <p>${agreeToSMS ? "Yes" : "No"}</p>
            `;


        const { data, error } = await resend.emails.send({
            from: "Royal Fast & Safe <info@royalfastandsafe.com>",
            to: ["royalfastandsafe@gmail.com"],
            subject: "New Quote Request",
            html: emailContent,
            text: emailContent,
        });


        if (error) {
            return new Response(JSON.stringify({
                error: error.message,
                message: 'Error sending email',
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response(JSON.stringify(data), { status: 200, statusText: "Email sent successfully", headers: { "Content-Type": "application/json" } });
    }
    catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
}