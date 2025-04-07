import { kv } from '@vercel/kv';

async function checkKvContents() {
    try {
        const keys = await kv.keys('*');
        const values = await Promise.all(keys.map(key => kv.get(key)));

        const kvContents: { [key: string]: any } = {};

        keys.forEach((key, index) => {
            kvContents[key] = values[index];
        });

        // console.log(kvContents);
    } catch (error) {

    }
}

// checkKvContents();