import { eventHandler, readBody, H3Event, createError, send } from 'h3';
import sgMail from '@sendgrid/mail';
import { kv } from '@vercel/kv';

const sendGridApiKey = process.env.SENDGRID_API_KEY;
const kvRestApiUrl = process.env.KV_REST_API_URL;
const kvRestApiToken = process.env.KV_REST_API_TOKEN;

if (!sendGridApiKey) {
    console.error('SENDGRID_API_KEY is not defined');
    throw new Error('SENDGRID_API_KEY is not defined');
}

if (!kvRestApiUrl || !kvRestApiToken) {
    console.error('KV_REST_API_URL or KV_REST_API_TOKEN is not defined');
    throw new Error('KV_REST_API_URL or KV_REST_API_TOKEN is not defined');
}

sgMail.setApiKey(sendGridApiKey);

export default eventHandler(async (event: H3Event) => {
    console.log('Handler invoked');
    console.log('Request method:', event.node.req.method);

    if (event.node.req.method === 'POST') {
        const { email } = await readBody(event);
        console.log('Request body:', { email });

        if (!email) {
            console.error('Email is missing in the request body');
            throw createError({ statusCode: 400, statusMessage: 'Email is required' });
        }

        // Save the email to Vercel KV
        try {
            await kv.set(email, true);
            console.log('Email stored successfully:', email);
        } catch (error) {
            console.error('Error storing email:', error);
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
            console.log('Confirmation email sent successfully:', email);
            return send(event, JSON.stringify({ message: 'Subscription successful' }));
        } catch (error) {
            console.error('Error sending email:', error);
            throw createError({ statusCode: 500, statusMessage: 'Error sending email' });
        }
    } else {
        throw createError({ statusCode: 405, statusMessage: 'Method not allowed' });
    }
});