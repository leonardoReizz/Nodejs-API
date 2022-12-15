import { DBPRODUCT, ProductProps } from "../Model/Product";
import { IProductRepository } from "./IProductRepository";
import { ApiResultType } from '../../../../types/IApiResult';

class ProductRepository implements IProductRepository {
  async create(product: Omit<ProductProps, "_id">): ApiResultType {
    const createProduct = await DBPRODUCT.create(product)
    return createProduct.save()
    .then((result) => {
      return {
        status: 200,
        data: result,
      }
    })
    .catch((error) => {
      console.log(error, ' ERROR DATABASE CREATE PRODUCT');
      return {
        status: 500,
        data: 'Internal error'
      }
    })
  }
}

export { ProductRepository };