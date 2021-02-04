import { StateRepository } from '@repositories/implementations/StateRepository';
import { ListStateUseCase } from './ListStateUseCase';
import { ListStateController } from './ListStateController';

const stateRepository = new StateRepository();

const listStateUsecase = new ListStateUseCase(stateRepository);

const listStateController = new ListStateController(listStateUsecase);

export { listStateController }