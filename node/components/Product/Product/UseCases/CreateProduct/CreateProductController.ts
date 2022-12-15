import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { ICreateProductRequestDTO } from "./ICreateProductRequestDTO";

class CreateProductController {
  constructor (private createProductUseCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response) {
    const data: ICreateProductRequestDTO = request.body;

    try {
      const create = await this.createProductUseCase.execute(data);

      return response.status(create.data).json({data: create.data});
    } catch(error) {
      return response.status(400).json({message: error.message});
    }
  }
}

export { CreateProductController };