import { ProductRepository } from "../../Repositories/ProductRepository";
import { ICreateProductRequestDTO } from "./ICreateProductRequestDTO";

class CreateProductUseCase {
  constructor(private productRepository: ProductRepository){}

  async execute(product: ICreateProductRequestDTO) {
    if(!product.name)
      throw new Error('Invalid name');

    return this.productRepository.create(product);
  }
}

export { CreateProductUseCase };