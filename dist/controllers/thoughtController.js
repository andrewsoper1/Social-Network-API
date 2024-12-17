import { User, Thought } from '../models/index.js';
export const getAllThoughts = async (_req, res) => {
    try {
        const thoughts = await Thought.find();
        return res.json(thoughts);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const getSingleThought = async (req, res) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found!' });
        }
        return res.json(thought);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const createThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: thought._id } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found!' });
        }
        return res.json(thought);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const updateThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, { new: true, runValidators: true });
        if (!thought) {
            res.status(404).json({ message: 'No thought found!' });
        }
        return res.json(thought);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const deleteThought = async (req, res) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!thought) {
            return res.status(404).json({ message: 'No thought found!' });
        }
        const user = await User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } }, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'No user found!' });
        }
        return res.json({ message: 'Thought has successfully been deleted!' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const addReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $push: { reactions: req.body } }, { new: true, runValidators: true });
        if (!reaction) {
            res.status(404).json({ message: 'No thought found!' });
        }
        return res.json(reaction);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const deleteReaction = async (req, res) => {
    try {
        const reaction = await Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: { reactionId: req.params.reactionId } } }, { new: true });
        if (!reaction) {
            res.status(404).json({ message: 'No thought found!' });
        }
        return res.json({ message: 'Reaction has been deleted!' });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
