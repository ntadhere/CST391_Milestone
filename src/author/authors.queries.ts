export const authorQueries = {
    readAuthors: `
    SELECT 
        name AS name
    FROM tigercave.author;
    `,
    readAuthorById:`
    SELECT
        authorId AS authorId, 
        name AS name, 
        username AS username, 
        email AS email 
    FROM tigercave.author
    WHERE tigercave.author.authorId = ?;
    `,
    createAuthor:`
    INSERT INTO author (name, username, email, password)
                VALUES (?, ?, ?, ?);
    `,
    updateAuthor:`
    UPDATE tigercave.author
    SET 
        name = ?, 
        username = ?, 
        email = ?, 
        password = ?
    WHERE authorId = ?;
`,
    deleteAuthor:`
    DELETE FROM tigercave.author
    WHERE authorId = ?`,
}