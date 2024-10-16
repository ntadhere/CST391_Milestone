export const authorQueries = {
    readAuthors: `
    SELECT
        DISTINCT author as author
    FROM journey.blogs
    `
}