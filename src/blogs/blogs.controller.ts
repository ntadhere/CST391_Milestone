import { Request, RequestHandler, Response } from "express";
import { Blog } from './blogs.model';
import * as BlogDao from './blogs.dao';
import { OkPacket } from 'mysql';

/** READ BLOG**********
 * *********************
 */
export const readBlogs: RequestHandler = async (req: Request, res: Response) => {
    try {
        let blogs;
        let blogId = parseInt(req.query.blogId as string);

        console.log('albumId', blogId);
        if (Number.isNaN(blogId)) {
            blogs = await BlogDao.readBlogs();
        }   else {
            blogs = await BlogDao.readBlogsByBlogId(blogId);
        }
        // await readTracks(blogs, res);

        res.status(200).json(
            blogs
        );

    } catch (error) {
        console.error('[blogs.controller][readBlogs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** READ BLOG BY AUTHOR **********
 * *********************
 */
export const readBlogsByAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const blogs = await BlogDao.readBlogsByAuthor(req.params.author);

        // await readTracks(albums, res);

        res.status(200).json(
            blogs
        );
    } catch (error) {
        console.error('[blogs.controller][readBlogs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** READ BLOG BY ID **********
 * *********************
 */
export const readBlogsByBlogId: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Extract the albumId parameter from the request and convert it to a number
        const blogId = Number(req.params.blogId);  // Assuming 'albumId' is the param name

        // Check if the albumId is a valid number
        if (isNaN(blogId)) {
            res.status(400).json({
                message: 'Invalid blog ID. It must be a valid number.'
            });
            return;
        }

        // If albumId is valid, proceed to query the database
        const blogs = await BlogDao.readBlogsByBlogId(blogId);

        // Read tracks associated with the albums (assuming this modifies or extends the albums data)
        // await readTracks(albums, res);

        // Return the albums in the response
        res.status(200).json(blogs);

    } catch (error) {
        // Handle any errors
        console.error('[blog.controller][readBlogsByBlogId][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** READ BLOG BY AUTHOR NAME SEARCH**********
 * *********************
 */
export const readBlogsByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const blogs = await BlogDao.readBlogsByAuthorSearch('%' + req.params.search + '%');

        // await readTracks(albums, res);

        res.status(200).json(
            blogs
        );
    } catch (error) {
        console.error('[blogs.controller][readBlogs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** READ BLOG BY DESCRIPTION SEARCH**********
 * *********************
 */
export const readBlogsByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const blogs = await BlogDao.readBlogsByDescriptionSearch('%' + req.params.search + '%');

        // await readTracks(albums, res);

        res.status(200).json(
            blogs
        );
    } catch (error) {
        console.error('[blogs.controller][readBlogs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** READ BLOG BY TITLE SEARCH**********
 * *********************
 */
export const readBlogsByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const blogs = await BlogDao.readBlogsByTitleSearch('%' + req.params.search + '%');

        // await readTracks(albums, res);

        res.status(200).json(
            blogs
        );
    } catch (error) {
        console.error('[blogs.controller][readBlogs][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching blogs'
        });
    }
};

/** CREATE BLOG**********
 * *********************
 */
export const createBlog: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Step 1: Insert the blog into the database
        const okPacket: OkPacket = await BlogDao.createBlog(req.body);
       
        console.log('req.body', req.body);  // For debugging

        // // Check if tracks exist in the request body
        // if (!req.body.tracks || !Array.isArray(req.body.tracks)) {
        //     console.error('[albums.controller][createAlbum][Error] No tracks provided or tracks is not an array');
        //     res.status(400).json({
        //         message: 'Tracks must be provided and should be an array.'
        //     });
        //     return;
        // }

        // console.log('album', okPacket);

        // // Step 2: Insert tracks using a for...of loop to handle async/await properly
        // for (const [index, track] of req.body.tracks.entries()) {
        //     try {
        //         await TracksDao.createTrack(track, index, okPacket.insertId);  // Associate track with album ID
        //     } catch (error) {
        //         console.error('[albums.controller][createAlbumTracks][Error] ', error);
        //         res.status(500).json({
        //             message: 'There was an error when writing album tracks'
        //         });
        //         return;
        //     }
        // }

         // Step 3: Respond with success after all tracks have been inserted
         res.status(200).json({
            message: 'Blog created successfully',
            blogId: okPacket.insertId
        });
    } catch (error) {
        console.error('[blogs.controller][createBlog][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing blogs'
        });
    }
};
/** UPDATE BLOG**********
 * *********************
 */
export const updateBlog: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BlogDao.updateBlog(req.body);
       
        console.log('req.body', req.body);

        console.log('blog', okPacket);

        // req.body.tracks.forEach(async (track: Track, index: number) => {
        //     try {
        //         await TracksDao.updateTrack(track);
        //     } catch (error) {
        //         console.error('[albums.controller][updateAlbum][Error] ', error);
        //         res.status(500).json({
        //          message: 'There was an error when updating album tracks'
        //         });
        //     }
        // });;

        res.status(200).json(
            okPacket
        );
    } catch (error) {
        console.error('[blogs.controller][updateBlog][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating blogs'
        });
    }
};

/** READ TRACKS**********
 * *********************
 */
// async function readTracks(albums:Album[], res: Response<any, Record<string, any>>) {
//     for (let i = 0; i < albums.length; i++) {
//         try {
//             const tracks = await TracksDao.readTracks(albums[i].albumId);
//             albums[i].tracks = tracks;

//         } catch (error) {
//             console.error('[albums.controller][readTracks][Error] ', error);
//             res.status(500).json({
//                 message: 'There was an error when fetching album tracks'
//             });
//         }
//     }
// }

/** DELETE BLOG**********
 * *********************
 */
export const deleteBlog: RequestHandler = async (req: Request, res: Response) => {
    try {
        let blogId = parseInt(req.params.blogId as string);

        console.log('blogId', blogId);
        if (!Number.isNaN(blogId))
        {
            const response = await BlogDao.deleteBlog(blogId);
            res.status(200).json(
                response
            );
        } else{
            throw new Error("Integer expected for blogId");
        }
    } catch (error) {
        console.error('[blogs.controller][deleteBlog][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting blogs'
        });
    }
};
