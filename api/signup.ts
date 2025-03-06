import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import { kv } from '@vercel/kv';

const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey) {
    console.error('SENDGRID_API_KEY is not defined');
    throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(sendGridApiKey);

const handler = async (req: VercelRequest, res: VercelResponse) => {
    console.log('Handler invoked');
    console.log('Request method:', req.method);

    if (req.method === 'POST') {
        const { email } = req.body;
        console.log('Request body:', req.body);

        if (!email) {
            console.error('Email is missing in the request body');
            return res.status(400).json({ error: 'Email is required' });
        }

        // Save the email to Vercel KV
        try {
            await kv.set(email, true);
            console.log('Email stored successfully:', email);
        } catch (error) {
            console.error('Error storing email:', error);
            return res.status(500).json({ error: 'Error storing email' });
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
            res.status(200).json({ message: 'Subscription successful' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};

export default handler;