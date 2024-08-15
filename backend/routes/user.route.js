import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser) //if there is no error with id we next send to verifyToken then we update
export default router;