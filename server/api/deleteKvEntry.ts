import { kv } from '@vercel/kv';

async function deleteKvEntry(email: string): Promise<void> {
    try {
        await kv.del(email);
        console.log(`Entry for ${email} deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting entry for ${email}:`, error);
    }
}

// deleteKvEntry('j_urdal@hotmail.no');
// deleteKvEntry('jourdal@outlook.com');
// deleteKvEntry('urdaljo@gmail.com');