export interface Blog {
    blogId: number,
    title: string,
    authorName: string,
    description: string,
    year: number,
    image: string,
    author_authorId: number //Foreign key
}