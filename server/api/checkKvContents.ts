import { kv } from '@vercel/kv';

async function checkEmailContents() {
    try {
        const keys = await kv.keys('*');
        const values = await Promise.all(keys.map(key => kv.get(key)));

        const emailContents: { [key: string]: any } = {};

        keys.forEach((key, index) => {
            emailContents[key] = values[index];
        });

        console.log('Email Contents:', emailContents);
    } catch (error) {
        console.error('Error retrieving email contents:', error);
    }
}

// checkEmailContents();