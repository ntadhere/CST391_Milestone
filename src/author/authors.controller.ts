import { Request, RequestHandler, Response } from "express";
import * as AuthorDAO from './authors.dao';
import { OkPacket } from 'mysql';


export const readAuthors: RequestHandler = async (req: Request, res: Response) => {
    try {
        const authors = await AuthorDAO.readAuthors();

        res.status(200).json(
            authors 
        );
    } catch (error) {
        console.error('[author.controller][readAuthors][Error] ', error);
        res.status(500).json ({
            message: 'There was an error when fetching authors'
        });
    }
};
/** READ AUTHOR BY ID **********
 * *********************
 */
export const readAuthorById: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Extract the authorId parameter from the request and convert it to a number
        const authorId = Number(req.params.authorId);  // Assuming 'authorId' is the param name

        // Check if the authorId is a valid number
        if (isNaN(authorId)) {
            res.status(400).json({
                message: 'Invalid author ID. It must be a valid number.'
            });
            return;
        }

        // If authorId is valid, proceed to query the database
        const authors = await AuthorDAO.readAuthorById(authorId);

        // Read tracks associated with the albums (assuming this modifies or extends the albums data)
        // await readTracks(albums, res);

        // Return the authors in the response
        res.status(200).json(authors);

    } catch (error) {
        // Handle any errors
        console.error('[author.controller][readAuthorById][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching authors'
        });
    }
};
/** CREATE AUTHOR**********
 * *********************
 */
export const createAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        // Step 1: Insert the author into the database
        const okPacket: OkPacket = await AuthorDAO.createAuthor(req.body);
       
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
            message: 'Author created successfully',
            authorId: okPacket.insertId
        });
    } catch (error) {
        console.error('[authors.controller][createAuthor][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing blogs'
        });
    }
};
/** UPDATE AUTHOR**********
 * *********************
 */
export const updateAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await AuthorDAO.updateAuthor(req.body);
       
        console.log('req.body', req.body);

        console.log('author', okPacket);

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
        console.error('[authors.controller][updateAuthor][Error] ', error);
        res.status(500).json({
            message: 'There was an error when updating author'
        });
    }
};

/** DELETE AUTHOR**********
 * *********************
 */
export const deleteAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        let authorId = parseInt(req.params.authorId as string);

        console.log('authorId', authorId);
        if (!Number.isNaN(authorId))
        {
            const response = await AuthorDAO.deleteAuthor(authorId);
            res.status(200).json(
                response
            );
        } else{
            throw new Error("Integer expected for authorId");
        }
    } catch (error) {
        console.error('[authors.controller][deleteAuthor][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting author'
        });
    }
};
