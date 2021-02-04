import { Router } from 'express';
import { listStateController } from '@useCases/State/ListStates';

const stateRouter = Router();

stateRouter.get('/', async (request, response) => listStateController.handle(request, response))

export { stateRouter };