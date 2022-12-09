import { Router, Request, Response } from "express";
import { listUserContoller } from "../components/User/UseCases/ListUser";


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
 * /user/:id:
 *  get:
 *    summary: Busca usuario
 *    tags: [User]
 *    responses:
 *      200:
 *        description: Lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
*                 $ref: '#/components/schemas/User'
 *   
 */
userRoutes.get('/user' , (request: Request, response: Response) => {
  return listUserContoller.handle(request, response);
})


/**
 * @swagger
 * /user:
 *  post:
 *    summary: Criar novo usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: Lista de usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 *      400:
 *        description: Campo indefinido ou invalido
 *   
 */
userRoutes.post('/user' , (request: Request, response: Response) => {
  return listUserContoller.handle(request, response);
})


export { userRoutes };