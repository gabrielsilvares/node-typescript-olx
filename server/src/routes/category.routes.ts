import { Router } from 'express';

import { listCategoriesController } from '@useCases/Category/ListCategories';

const categoryRouter = Router();

categoryRouter.get('/', async (request, response) => listCategoriesController.handle(request, response));

export { categoryRouter };