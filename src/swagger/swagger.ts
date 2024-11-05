import swaggerJSDoc, { Options } from "swagger-jsdoc";

const swaggerOption: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PRODUCTS SERVICE",
      version: "1.0.0",
      description: "API para catalogo de productos",
    },
    severs: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis:[
  "./src/routers/productRoutes.ts"  
  ]
};

const swaggerSpec = swaggerJSDoc(swaggerOption);

export default swaggerSpec;
