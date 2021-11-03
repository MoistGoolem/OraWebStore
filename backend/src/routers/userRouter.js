import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../testData/data.js';
import User from '../database/models/userModel.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
    '/seed', 

    expressAsyncHandler(async(req, res) => {
        //await User.deleteMany({}); //!This line removes all users before createing the new ones
        const createdUsers = await User.insertMany(data.users); //*Inserts users from data.js file
        res.send({ createdUsers });
    })
);

userRouter.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                });
                return;
            }
        } 
        res.status(401).send({ message: "Invalid email of password" });
    })
);

export default userRouter;