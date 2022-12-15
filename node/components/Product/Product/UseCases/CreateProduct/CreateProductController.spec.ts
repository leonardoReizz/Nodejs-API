import request from 'supertest';
import { DBPRODUCT } from "../../Model/Product";
import { app } from '../../../../../server';

describe('Create Product Controller', () => {
  let productId: string;


  afterAll(async () => {
    await DBPRODUCT.findByIdAndDelete({_id: productId});
  })


  it('should be able to register user', async () => {
    const createProduct = await request(app)
      .post('/product/')
      .send({
        name: 'Teclado',
        purchasePrice: 22,
        salePrice: 22,
        description: 'Teclado novo',
    })
    expect(createProduct.status).toEqual(200);
    expect(JSON.parse(createProduct.text).msg).toHaveProperty('_id');

    productId = JSON.parse(createProduct.text).msg._id;
  })
})