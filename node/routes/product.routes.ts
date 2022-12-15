import { Request, Response, Router } from "express";
import { createProductController } from "../components/Product/Product/UseCases/CreateProduct";


const productRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Product:
 *    type: object
  *    required: 
  *      -name
  *    properties:
  *      id:
  *        type: string
  *      name:
  *        type: string
  *      description:
  *        type: string
  *      salePrice: 
  *        type: number
  *      purchasePrice:
  *        type: number
  */

  /**
   * @swagger
   * /product/:
   *  post:
   *    summary: Create new product
   *    tags: [ ]
   *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *      responses:
 *        200:
 *          description: Product created
 *        400:
 *          description: Field invalid or undefined
 *        500:
 *          description: Database error
 *      
 * 
 */

productRouter.post('/', (request: Request, response: Response) => {
  return createProductController.handle(request, response);
});