export interface INewsArticle {
    id: number;
    headline: string;
    abstract: string;
    body: string;
    author: string;
    section: string;
    date: string; // You might consider using Date type, but it's stored as a string in the JSON.
    article_uri: string;
    pfd_uri: string;
}