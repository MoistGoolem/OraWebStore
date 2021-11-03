import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./src/routers/userRouter.js";
import { environment } from "./src/environments/environment.js";
import productRouter from "./src/routers/productRouter.js";

dotenv.config();

//*Express setup
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//*Mongo environment variables
const mongo = environment.mongo;

//*Connect to MongoDB
mongoose.connect(`${mongo.protocol}://${mongo.user}:${mongo.pass}@${mongo.host}/${mongo.dbName}?${mongo.settings}`,
    {
        dbName: mongo.dbName,
    }
);

//******ROUTERS*******/
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

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