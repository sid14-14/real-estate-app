import express from "express";
import { deleteUser, test, updateUser, getUserListings, getUser } from "../controllers/user.controller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser) //if there is no error with id we next send to verifyToken then we update
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
{/* creating an api route to fetch the info of the user, to do this we need to be authenticated */}
router.get('/:id', verifyToken, getUser)

export default router;