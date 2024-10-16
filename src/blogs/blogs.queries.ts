import { readBlogsByBlogId, readBlogsByAuthor, readBlogsByDescriptionSearch } from "./blogs.dao";

export const blogQueries = {
    readBlogs: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM journey.blogs
        `,
    readBlogsByAuthor: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM journey.blogs
        WHERE journey.blogs.authorName = ?
        `,
    readBlogsByAuthorSearch: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM journey.blogs
        WHERE journey.blogs.authorName LIKE ?
        `,
    readBlogsByDescriptionSearch: `
        SELECT
             blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM journey.blogs
        WHERE journey.blogs.description LIKE ?
        `,
    readBlogsByBlogId: `
        SELECT
            blogId as blogId, title AS title, authorName AS authorName,
            description AS description, year AS year, image AS image
        FROM journey.blogs
        WHERE journey.blogs.blogId = ?
        `,
    createBlog: `
        INSERT INTO BLOGS(title, authorName, description, year, image) VALUES(?,?,?,?,?)
        `,
    updateBlog: `
        UPDATE journey.blogs
        SET title = ?, authorName = ?, year = ?, image = ?, description = ?
        WHERE blogId = ?
        `,
    deleteBlog: `
        DELETE FROM journey.blogs
        WHERE blogId = ?
        `,
}