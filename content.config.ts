import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export const blogCollection = defineCollection({
    type: 'page',
    source: 'blog/*.md',
    schema: z.object({
        type: z.string(),
        date: z.string()
    })
})

export default defineContentConfig({
    collections: {
        blog: blogCollection
    }
})