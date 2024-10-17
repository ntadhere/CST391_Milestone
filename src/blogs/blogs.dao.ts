import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Blog } from './blogs.model';
import { blogQueries } from './blogs.queries';

export const readBlogs = async () => {
    return execute <Blog[]>(blogQueries.readBlogs, []);
};

export const readBlogsByAuthor = async (authorName: string) => { 
    return execute<Blog []>(blogQueries.readBlogsByAuthor, [authorName]);
};

export const readBlogsByAuthorSearch = async (search: string) => {
    console. log('search param', search);
    return execute<Blog []>(blogQueries.readBlogsByAuthorSearch, [search]);
};

export const readBlogsByDescriptionSearch = async (search: string) => {
    console. log('search param', search);
    return execute<Blog[]>(blogQueries.readBlogsByDescriptionSearch, [search]);
};

export const readBlogsByBlogId = async (blogId: number) => {
     return execute<Blog[]>(blogQueries.readBlogsByBlogId, [blogId]);
};

export const createBlog = async (blog: Blog) => { 
    return execute<OkPacket>(blogQueries.createBlog,
    [blog. title, blog.authorName, blog.description, blog.year, blog.image]);
};

export const updateBlog = async (blog: Blog) => {
    return execute<OkPacket>(blogQueries.updateBlog,
    [blog.title, blog.authorName, blog.year, blog.image, blog.description, blog.blogId]);
};

export const deleteBlog = async (blogId: number) => {
    return execute<OkPacket>(blogQueries.deleteBlog, [blogId]);
};