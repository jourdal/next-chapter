export interface ContentItem {
    type: 'podcast' | 'blog';
    title: string;
    body?: string;
    publishDate: string;
}

export interface Episode {
    title: string;
    contentSnippet?: string;
    content?: string;
    description?: string;
    publishDate: string;
}