import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {
  constructor(
    private listCategoriesUseCase: ListCategoriesUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    try {
      const categories = await this.listCategoriesUseCase.execute();

      return response.status(200).send({ categories })
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}