import { eventHandler, readBody, H3Event, createError, send } from 'h3';
import { kv } from '@vercel/kv';

const sparkPostApiKey = process.env.SPARKPOST_API_KEY;
const kvRestApiUrl = process.env.KV_REST_API_URL;
const kvRestApiToken = process.env.KV_REST_API_TOKEN;

export default eventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        const { email } = await readBody(event);

        if (!email) {
            throw createError({ statusCode: 400, statusMessage: 'Email is required' });
        }

        // Check if the email is already signed up
        const isSignedUp = await kv.get(email);
        if (isSignedUp) {
            throw createError({ statusCode: 422, statusMessage: 'Email is already registered' });
        }

        // Save the email to Vercel KV
        try {
            await kv.set(email, true);
        } catch (error) {
            throw createError({ statusCode: 500, statusMessage: 'Error storing email' });
        }

        // Send a confirmation email using SparkPost
        const sparkPostUrl = 'https://api.eu.sparkpost.com/api/v1/transmissions';
        const emailData = {
            content: {
                from: 'contact@nextchapter.space',
                subject: 'Påmeldingsbekreftelse',
                text: 'Velkommen til eventyret og takk for at du meldte deg på!',
            },
            recipients: [{ address: email }],
        };

        try {
            await fetch(sparkPostUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `${sparkPostApiKey}`,
                    'Content-Type': 'application/json',
                } as HeadersInit,
                body: JSON.stringify(emailData),
            });

            return send(event, JSON.stringify({ message: 'Subscription successful' }));
        } catch (error) {
            throw createError({ statusCode: 500, statusMessage: 'Error sending email' });
        }
    } else {
        throw createError({ statusCode: 405, statusMessage: 'Method not allowed' });
    }
});