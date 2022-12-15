import { DBPRODUCT, ProductProps } from "../../Model/Product";
import { IProductRepository } from "../IProductRepository";
import { ApiResultType } from '../../../../../types/IApiResult';

class ProductRepositoryInMemory implements IProductRepository {
  public products: Omit<ProductProps, "_id">[]  = [];
  
  async create(product: Omit<ProductProps, "_id">): ApiResultType {
    this.products.push(product);
    return {
      status: 200,
      data: product,
    }
  }
}

export { ProductRepositoryInMemory };