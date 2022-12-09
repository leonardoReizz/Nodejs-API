import { Router } from 'express';
import { userRoutes } from './user.routes';

import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api",
      version: "0.0.1",
      description: "Api Portifolio"
    },
    servers: [
      {
        url: "http://localhost:3333"
      }
    ],
  },
  apis: ["./node/routes/*.routes.ts"]
}

const specs = swaggerJsDoc(options);


const routes = Router()

routes.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
routes.use('/user', userRoutes);
export default routes;