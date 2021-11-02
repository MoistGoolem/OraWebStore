import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../testData/data.js';
import User from '../database/models/userModel.js';

const userRouter = express.Router();

userRouter.get(
    '/seed', 

    expressAsyncHandler(async(req, res) => {
        await User.remove({}); //!This line removes all users before createing the new ones
        const createdUsers = await User.insertMany(data.users); //*Inserts users from data.js file
        res.send({ createdUsers });
    })
);

export default userRouter;