import { Router, Request, Response } from "express";
import { findUserByEmailController } from "../components/User/UseCases/FindUserByEmail";


const userRoutes = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - fullname
 *        - email
 *        - password
 *      properties:
 *        id:
 *          type: string
 *            id gerado automaticamente pelo MongoDB
 *        fullname:
 *          type: string
 *          description: Nome completo do usuario
 *        password:
 *          type: string
 *          description: Senha criptografada com MD5
 *      example: 
 *        fullname: Leonardo Reis
 *        email: leonardoo.reis@hotmail.com
 *        password: leonardo123
 *        
 */


/**
 * @swagger
 * /user/{email}:
 *  get:
 *    summary: Get user or
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: email
 *        required: true
 *        schema:
 *          type: string
 *        description: The user email
 *    responses:
 *      200:
 *        description: Get your user
 *      400: 
 *        description: Email undefined or invalid
 */
userRoutes.get('/:email' , (request: Request, response: Response) => {
  return findUserByEmailController.handle(request, response);
})


/**
 * @swagger
 * /user:
 *  post:
 *    summary: Create new user
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Create user success
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      400:
 *        description: Field undefined or invalid
 *   
 */

userRoutes.post('/user' , (request: Request, response: Response) => {
  return findUserByEmailController.handle(request, response);
})



export { userRoutes };