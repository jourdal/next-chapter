import { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import { kv } from '@vercel/kv';

const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey) {
    throw new Error('SENDGRID_API_KEY is not defined');
}

sgMail.setApiKey(sendGridApiKey);

export default async (req: VercelRequest, res: VercelResponse) => {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Save the email to Vercel KV
        try {
            await kv.set(email, true);
        } catch (error) {
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
            res.status(200).json({ message: 'Subscription successful' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
};