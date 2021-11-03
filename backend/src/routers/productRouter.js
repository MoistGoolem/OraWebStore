import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../database/models/productModel.js';
import data from '../testData/data.js';

const productRouter = express.Router();

productRouter.get(
    '/', 
    expressAsyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.send(products);
    })
);

//*Endpoint for seeding test data to db
productRouter.get(
    '/seed', 
    expressAsyncHandler(async(req, res) => {
        //await Product.deleteMany({});  //!This line removes all users before createing the new ones
        const createdProducts = await Product.insertMany(data.products);
        res.send({ createdProducts });
    })
);

productRouter.get(
    '/:id', 
    expressAsyncHandler (async(req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.send(product);
        } else {
            res.send(404).send({ message: 'Product Not Found' });
        }
    })
);

export default productRouter;