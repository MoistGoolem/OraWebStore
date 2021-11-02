import express from "express";
import mongoose from 'mongoose';
import data from "./src/testData/data.js";
import userRouter from "./src/routers/userRouter.js";
import { environment } from "./src/environments/environment.js";

const app = express()

//*Mongo environment variables
const mongo = environment.mongo;

//*Connect to MongoDB
mongoose.connect(`${mongo.protocol}://${mongo.user}:${mongo.pass}@${mongo.host}/${mongo.dbName}?${mongo.settings}`,
    {
        dbName: mongo.dbName,
    }
);

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( x => x._id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found'});
    }
});

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const SERVER_PORT = process.env.SERVER_PORT || 3001;

app.listen(SERVER_PORT, () => {
    console.log("Running on port: " + SERVER_PORT);
});