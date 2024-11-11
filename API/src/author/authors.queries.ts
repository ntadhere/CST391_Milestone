export const authorQueries = {
    readAuthors: `
    SELECT 
        authorId AS authorId,
        image AS image, 
        name AS name, 
        username AS username, 
        email AS email 
    FROM tigercave.author;
    `,
    readAuthorById:`
    SELECT
        authorId AS authorId,
        image AS image, 
        name AS name, 
        username AS username, 
        password AS password,
        email AS email 
    FROM tigercave.author
    WHERE tigercave.author.authorId = ?;
    `,
    createAuthor:`
    INSERT INTO author (name, image, username, email, password)
                VALUES (?, ?, ?, ?, ?);
    `,
    updateAuthor:`
    UPDATE tigercave.author
    SET 
        name = ?, 
        image = ?,
        username = ?, 
        email = ?, 
        password = ?
    WHERE authorId = ?;
`,
    deleteAuthor:`
    DELETE FROM tigercave.author
    WHERE authorId = ?`,
}