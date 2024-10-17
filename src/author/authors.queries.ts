export const authorQueries = {
    readAuthors: `
    SELECT 
        name AS name
    FROM tigercave.author;
    `,
    readAuthorsId:`
    SELECT
        authorId AS authorId 
        name AS name, 
        userName AS userName, 
        email AS email 
    FROM tigercave.author
    WHERE tigercave.author.authorId = ?;
    `,
    createAuthor:`
    INSERT INTO author (name, userName, email, password)
                VALUES (?, ?, ?, ?);
    `,
    updateAuthor:`
    UPDATE tigercave.author
    SET 
        name = ?, 
        userName = ?, 
        email = ?, 
        password = ?
    WHERE authorId = ?;
`,
    deleteAuthor:`
    DELETE FROM tigercave.author
    WHERE authorId = ?`,
}