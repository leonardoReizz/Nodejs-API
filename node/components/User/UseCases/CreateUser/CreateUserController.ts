import { Request, Response } from 'express';
import { CreateUserUseCase } from "./CreateUserUseCase";
import { ICreateUserRequestDTO } from './ICreateUserRequestDTO';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase ) {}

  async handle(request: Request, response: Response) {
    const user: ICreateUserRequestDTO = request.body;

    try {
      const create = this.createUserUseCase.execute(user);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}