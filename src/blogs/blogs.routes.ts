import { Router } from 'express';
import * as BlogsController from './blogs.controller';

const router = Router();
router
    .route('/blogs')
    .get(BlogsController.readBlogs);
router
    .route('/blogs/:author')
    .get(BlogsController.readBlogsByAuthor);
router
    .route('/blogs/search/author/:search')
    .get(BlogsController.readBlogsByAuthorSearch);
router
    .route('/blogs/search/description/:search')
    .get(BlogsController.readBlogsByDescriptionSearch);
router
    .route('/blogs/blogId/:blogId')
    .get(BlogsController.readBlogsByBlogId);
router
    .route('/blogs')
    .post(BlogsController.createBlog);
router
    .route('/blogs')
    .put(BlogsController.updateBlog);
router
    .route('/blogs/:blogId')
    .delete(BlogsController.deleteBlog);

export default router;