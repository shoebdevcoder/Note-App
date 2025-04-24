import express from 'express';
import { loginUser, registerUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/register', registerUser);
router.get('/login', loginUser);


export default router;