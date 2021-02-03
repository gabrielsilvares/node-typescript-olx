import { AdRepository } from '@repositories/implementations/AdRepository';
import { CreateAdUseCase } from './CreateAdUseCase';
import { CreateAdController } from './CreateAdController';
import { SearchProvider } from '@providers/implementations/SearchProvider';

const searchProvider = new SearchProvider();
const adRepository = new AdRepository();

const createAdUsecase = new CreateAdUseCase(adRepository, searchProvider);

const createAdController = new CreateAdController(createAdUsecase);

export { createAdController }