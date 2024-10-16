import { Request, RequestHandler, Response } from "express";
import * as AuthorDAO from './authors.dao';

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