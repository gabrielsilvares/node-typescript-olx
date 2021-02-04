import { Request, Response } from "express";
import { ListStateUseCase } from "./ListStateUseCase";

export class ListStateController {
  constructor(
    private listStateUseCase: ListStateUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    
    try {
      const states = await this.listStateUseCase.execute();

      return response.status(200).send({ states })
    } catch (error) {
      console.log(`Error >> ${error}`);
      return response.status(400).json({
        message: 'Unexpected error'
      })
    }
  }
}