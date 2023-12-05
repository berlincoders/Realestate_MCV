import express from "express";
import { loginForm,signinForm,register,confirmUser,resetPasswordForm,resetPassword } from "../controllers/userController.js";

const router = express.Router();
//Routing  (Endpoint)

router.get('/login',loginForm);   //login endpoint

router.get('/signin',signinForm);   //Signin endpoint
router.post('/signin',register);   //Signin endpoint
router.get('/confirm/:token',confirmUser); // Confirm endpoint, & dinamic routing

router.get('/reset-password',resetPasswordForm);   // reset password endpoint
router.post('/reset-password',resetPassword);


export default router;
