import { User, Thought } from '../models/index.js';
export const getAllUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.UserId })
            .populate('thoughts')
            .populate('friends');
        if (!user) {
            return res.status(404).json({ message: 'No user found!' });
        }
        return res.json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
};
export const updateUser = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.UserId }, { $set: req.body }, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found!' });
        }
        return res.json(user);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.UserId });
        if (!user) {
            return res.status(404).json({ message: 'No user found!' });
        }
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        return res.json({ message: 'User and their thoughts have been deleted!' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
