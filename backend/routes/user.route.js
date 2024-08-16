import express from "express";
import { deleteUser, test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser) //if there is no error with id we next send to verifyToken then we update
router.delete('/delete/:id', verifyToken, deleteUser)
export default router;