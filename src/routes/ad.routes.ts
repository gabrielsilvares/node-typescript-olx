import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import { createAdController } from '@useCases/Ad/CreateAd';

import Authenticated from '@middlewares/Authenticated';

const adRouter = Router();

const upload = multer(uploadConfig);

adRouter.use(Authenticated);

adRouter.post('/', upload.array('images'), (request, response) => createAdController.handle(request, response));

export { adRouter };