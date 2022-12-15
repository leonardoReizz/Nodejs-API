import getError from "../../../../../util/Errors/getError";
import { ProductRepositoryInMemory } from "../../Repositories/InMemory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "./CreateProductUseCase";

describe('Create Product Use Case', () => {
  let productRepositoryInMemory: ProductRepositoryInMemory;
  let createProductUseCase: CreateProductUseCase;


  beforeAll(() => {
    productRepositoryInMemory = new ProductRepositoryInMemory();
    createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
  })

  it('should not be able to create user -> invalid name', async () => {
    const createProduct: Error = await getError(async () => 
      createProductUseCase.execute({
        name: '',
        salePrice: 22.2,
        purchasePrice: 10,
        codebar: '123456',
        description: ''
      })
    )

    expect(createProduct).toBeInstanceOf(Error);
    expect(createProduct.message).toEqual('Invalid name');
  })

  it('should be able to create user', async () => {
    const createProduct = await createProductUseCase.execute({
        name: 'Mouse',
        salePrice: 0,
        purchasePrice: 0,
        codebar: '',
        description: ''
    })

    expect(createProduct.status).toEqual(200);
  })
})