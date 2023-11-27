import express from "express";
import { loginForm,signinForm,register,resetPasswordForm } from "../controllers/userController.js";

const router = express.Router();
//Routing  (Endpoint)

router.get('/login',loginForm);   //login endpoint

router.get('/signin',signinForm);   //Signin endpoint
router.post('/signin',register);   //Signin endpoint

router.get('/reset-password',resetPasswordForm);   // reset password endpoint


export default router;
