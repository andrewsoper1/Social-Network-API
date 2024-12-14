import { ObjectId } from "mongoose";
import { User, Reaction, Thought } from '../models/index.js'
import { Request, Response } from 'express';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
