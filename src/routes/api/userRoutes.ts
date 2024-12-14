import { Router } from 'express';
const router = Router();
import { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

router.route('/').get(getAllUsers).post(createUser);
router.route('/:UserId').get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;