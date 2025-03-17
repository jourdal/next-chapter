export interface ContentItem {
    type: Podcast | 'blog';
    title: string;
    summary: string;
    publishDate: string;
}

export interface Episode {
    title: string;
    contentSnippet?: string;
    content?: string;
    description?: string;
    publishDate: string;
}