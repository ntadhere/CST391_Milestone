import { Router } from 'express';
import * as AuthorsController from './authors.controller';

const router = Router();
router
    .route('/authors')
    .get(AuthorsController.readAuthors);

export default router;