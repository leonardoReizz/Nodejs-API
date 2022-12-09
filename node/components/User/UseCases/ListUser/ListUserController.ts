import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const list = await this.listUserUseCase.execute();

      return response.status(list.status).json(list.data);
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { ListUserController };