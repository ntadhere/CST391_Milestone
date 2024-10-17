import { execute } from '../services/mysql.connector';
import { Author } from '../author/authors.model';
import { authorQueries } from '../author/authors.queries';

export const readAuthors = async () => {
    return execute<Author[]>(authorQueries.readAuthors, []);
};