import { eventHandler, createError } from 'h3';
import Parser from 'rss-parser';
import { Episode } from '~/types/content';

const parser = new Parser();

export default eventHandler(async (event) => {
    if (event.node.req.method === 'GET') {
        try {
            // Parse the RSS feed
            const feed = await parser.parseURL('https://anchor.fm/s/101b68238/podcast/rss');

            // Return just the episodes
            return feed.items.map((episode): Episode => {
                if (!episode.title || !episode.pubDate) {
                    throw createError({ statusCode: 400, statusMessage: 'Missing required fields: title or pubDate' });
                }

                return {
                    title: episode.title,
                    description: episode.contentSnippet || episode.content || episode.description,
                    publishDate: episode.pubDate,
                }
            });
        } catch (error) {
            throw createError({ statusCode: 500, statusMessage: 'Error parsing RSS feed' });
        }
    } else {
        throw createError({ statusCode: 405, statusMessage: 'Method not allowed' });
    }
});