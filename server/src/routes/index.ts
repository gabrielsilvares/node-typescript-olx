import { Router } from 'express';
import { usersRouter } from './users.routes';
import { authRouter } from './auth.routes';
import { stateRouter } from './state.routes';
import { categoryRouter } from './category.routes';
import { adRouter } from './ad.routes';

const routes = Router();
const prefixRoutes = '/api/v1'

routes.use(`${prefixRoutes}/ads`, adRouter);
routes.use(`${prefixRoutes}/states`, stateRouter);
routes.use(`${prefixRoutes}/categories`, categoryRouter);
routes.use(`${prefixRoutes}/auth`, authRouter);
routes.use(`${prefixRoutes}/users`, usersRouter);

export default routes;
