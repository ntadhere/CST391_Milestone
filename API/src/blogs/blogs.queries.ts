import {
  readBlogsByBlogId,
  readBlogsByAuthor,
  readBlogsByDescriptionSearch,
} from "./blogs.dao";

export const blogQueries = {
  readBlogs: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM tigercave.blog
        `,
  //   readBlogsByAuthor: `
  //         SELECT
  //             b.blogId AS blogId,
  //             b.title AS title,
  //             a.name AS authorName,
  //             b.description AS description,
  //             b.year AS year,
  //             b.image AS image
  //         FROM tigercave.blog b
  //         JOIN tigercave.author a ON b.author_authorId = a.authorId
  //         WHERE a.name = ?;
  //         `,
  readBlogsByAuthor: `
            SELECT 
                  blogId AS blogId, 
                  title AS title, 
                  authorName AS authorName, 
                  description AS description, 
                  year AS year, 
                  image AS image
            FROM tigercave.blog 
            WHERE tigercave.blog.authorName = ?;
`,
  readBlogsByAuthorSearch: `
        SELECT 
            b.blogId AS blogId, 
            b.title AS title, 
            a.name AS authorName, 
            b.description AS description, 
            b.year AS year, 
            b.image AS image
        FROM tigercave.blog b
        JOIN tigercave.author a ON b.author_authorId = a.authorId
        WHERE a.name LIKE ?;
        `,
  readBlogsByDescriptionSearch: `
        SELECT
             blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM tigercave.blog
        WHERE tigercave.blog.description LIKE ?
        `,
  readBlogsByTitleSearch: `
        SELECT
             blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM tigercave.blog
        WHERE tigercave.blog.title LIKE ?
        `,
  readBlogsByBlogId: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM tigercave.blog
        WHERE tigercave.blog.blogId = ?
        `,
  createBlog: `
        INSERT INTO BLOG(title, authorName, description, year, image, author_authorId) VALUES(?,?,?,?,?,?)
        `,
  updateBlog: `
        UPDATE tigercave.blog
        SET title = ?, authorName = ?, description = ?, year = ?, image = ?, author_authorId = ?
        WHERE blogId = ?
        `,
  deleteBlog: `
        DELETE FROM tigercave.blog
        WHERE blogId = ?
        `,
};
