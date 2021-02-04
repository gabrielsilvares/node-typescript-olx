import { CategoryRepository } from '@repositories/implementations/CategoryRepository';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';

const categoryRepository = new CategoryRepository();

const listCategoriesUsecase = new ListCategoriesUseCase(categoryRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUsecase);

export { listCategoriesController }