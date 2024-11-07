import { Router } from 'express';
import * as AuthorsController from './authors.controller';

const router = Router();
router
    .route('/authors')
    .get(AuthorsController.readAuthors);
router
    .route('/authors/authorId/:authorId')
    .get(AuthorsController.readAuthorById);
router
    .route('/authors')
    .post(AuthorsController.createAuthor);
router
    .route('/authors')
    .put(AuthorsController.updateAuthor);
router
    .route('/authors/:authorId')
    .delete(AuthorsController.deleteAuthor);

export default router;