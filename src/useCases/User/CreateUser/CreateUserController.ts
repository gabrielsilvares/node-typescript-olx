import { CreateUserUseCase } from './CreateUserUseCase';
import { Request, Response } from 'express';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, state_id, password } = request.body;
    const user = await this.createUserUseCase.execute({ name, email, state_id, password })
    
    delete user.password

    return response.status(201).send({user});
  }
}