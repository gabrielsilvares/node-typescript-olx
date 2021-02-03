import { CreateAdUseCase } from './CreateAdUseCase';
import { Request, Response } from 'express';

export class CreateAdController {
  constructor(
    private createAdUseCase: CreateAdUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      state_id,
      category_id,
      title,
      description,
      price,
      price_negociable,
    } = request.body;

    const { id } = request.user;

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    try {
      const client = await this.createAdUseCase.execute({
        user_id: id,
        state_id,
        category_id,
        title,
        description,
        price,
        price_negociable,
        images
      })

      return response.status(201).send({client});
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}