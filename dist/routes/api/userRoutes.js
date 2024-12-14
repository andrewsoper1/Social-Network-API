import { Router } from 'express';
const router = Router();
import { getAllUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } from '../../controllers/userController.js';
router.route('/').get(getAllUsers).post(createUser);
router.route('/:UserId').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/:UserId/friends/:friendId').post(addFriend).delete(deleteFriend);
export default router;
