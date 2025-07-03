export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";
import { generateQuoteEmailTemplate } from "@/templates/quoteEmailTemplate";

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
            year,
            make,
            model,
            isOperable,
            preferredShippingDate,
            agreeToSMS,
        } = body


        if (!name || !email || !message || !year || !make || !model) {
            return new Response(JSON.stringify({
                message: 'Missing required fields: name, email, message, year, make, and model are required',
            }), { status: 400, headers: { "Content-Type": "application/json" } });
        }

        const emailContent = generateQuoteEmailTemplate({
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
        });


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