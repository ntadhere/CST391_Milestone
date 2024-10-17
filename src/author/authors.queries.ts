export const authorQueries = {
    readAuthors: `
    SELECT 
        name AS authorName
    FROM tigercave.author;
    `
}