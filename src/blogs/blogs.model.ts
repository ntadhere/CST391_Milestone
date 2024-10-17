export interface Blog {
    blogId: number,
    title: string,
    authorName: string,
    description: string,
    year: string,
    image: string,
    author_authorId:number, //Foreign key
}