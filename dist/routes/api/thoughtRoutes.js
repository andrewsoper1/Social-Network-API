import { Router } from 'express';
const router = Router();
import { getAllThoughts, getSingleThought, createThought, updateThought, deleteThought, addReaction, deleteReaction } from '../../controllers/thoughtController.js';
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);
export default router;
