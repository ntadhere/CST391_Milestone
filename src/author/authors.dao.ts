import { OkPacket } from 'mysql';
import { execute } from '../services/mysql.connector';
import { Author } from '../author/authors.model';
import { authorQueries } from '../author/authors.queries';

export const readAuthors = async () => {
    return execute<Author[]>(authorQueries.readAuthors, []);
};
export const readAuthorById = async (authorId: number) => {
    return execute<Author[]>(authorQueries.readAuthorById, [authorId]);
};

export const createAuthor = async (author: Author) => { 
   return execute<OkPacket>(authorQueries.createAuthor,
   [author.name, author.userName, author.password, author.email]);
};

export const updateAuthor = async (author: Author) => {
   return execute<OkPacket>(authorQueries.updateAuthor,
   [author.name, author.userName, author.password, author.email, author.authorId]);
};

export const deleteAuthor = async (authorId: number) => {
   return execute<OkPacket>(authorQueries.deleteAuthor, [authorId]);
};