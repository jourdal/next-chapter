import { eventHandler, readBody, H3Event, createError, send } from 'h3';
import sgMail from '@sendgrid/mail';
import { kv } from '@vercel/kv';

const sendGridApiKey = process.env.SENDGRID_API_KEY;
const kvRestApiUrl = process.env.KV_REST_API_URL;
const kvRestApiToken = process.env.KV_REST_API_TOKEN;

sgMail.setApiKey(sendGridApiKey);

export default eventHandler(async (event: H3Event) => {
    if (event.node.req.method === 'POST') {
        const { email } = await readBody(event);

        if (!email) {
            throw createError({ statusCode: 400, statusMessage: 'Email is required' });
        }

        // Save the email to Vercel KV
        try {
            await kv.set(email, true);
        } catch (error) {
            throw createError({ statusCode: 500, statusMessage: 'Error storing email' });
        }

        // Send a confirmation email
        const msg = {
            to: email,
            from: 'contact@nextchapter.space',
            subject: 'Påmeldingsbekreftelse',
            text: 'Velkommen til eventyret og takk for at du meldte deg på!',
        };

        try {
            await sgMail.send(msg);
            return send(event, JSON.stringify({ message: 'Subscription successful' }));
        } catch (error) {
            throw createError({ statusCode: 500, statusMessage: 'Error sending email' });
        }
    } else {
        throw createError({ statusCode: 405, statusMessage: 'Method not allowed' });
    }
});