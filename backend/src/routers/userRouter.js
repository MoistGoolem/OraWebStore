import express from 'express';
import data from '../testData/data.js';
import User from '../database/models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
});

export default userRouter;