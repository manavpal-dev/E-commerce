import express from 'express'
import { getProducts } from '../controllers/productController.js'

const productRouter = express.Router();

// Routes ---> api/..

//prdouctFetch api
productRouter.get("/",getProducts);


export default productRouter;