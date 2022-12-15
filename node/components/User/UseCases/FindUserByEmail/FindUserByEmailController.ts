import { Request, Response } from "express";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";

class FindUserByEmailController {
  constructor(private listUserUseCase: FindUserByEmailUseCase) {}

  async handle(request: Request, response: Response) {
    const email = request.params.email;
    try {
      const list = await this.listUserUseCase.execute(email);

      return response.status(list.status).json({data: list.data});
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}

export { FindUserByEmailController };