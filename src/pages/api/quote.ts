export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);


export const POST: APIRoute = async ({ request }) => {
    const { name, phone, email, message, shipFrom, shipTo, agreeToSMS } = await request.json();

    if (!name || !shipFrom || !email || !phone || !message || !shipTo || !agreeToSMS) {
        return new Response(JSON.stringify({
            message: 'Missing required fields',
        }), { status: 400 });
    }

    const emailContent = `
        <h1>🙎🏻‍♂️ ${name} ${email}</h1>
        <h3>🔤 Message:</h3>
        <p>${message}</p>
        <h3>📞 Phone Number:</h3>
        <p>${phone}</p>
        <h3>📧 Email:</h3>
        <p>${email}</p>
        `;

    try {
        const { data, error } = await resend.emails.send({
            from: "Royal Fast & Safe <onboarding@resend.dev>",
            to: ["info@royalfastandsafe.com"],
            subject: "New Quote Request",
            html: emailContent,
            text: emailContent,
        });

        if (error) {
            return new Response("Error sending email", { status: 400 });
        }

        return new Response(JSON.stringify(data), { status: 200, statusText: "Email sent successfully" });
    } catch (error) {
        return new Response("Error sending email", { status: 500 });
    }
}