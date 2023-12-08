import express from "express";
import { loginForm,authenticate,signinForm,register,confirmUser,resetPasswordForm,resetPassword,checkToken,newPassword } from "../controllers/userController.js";

const router = express.Router();
//Routing  (Endpoint)

router.get('/login',loginForm);   //login endpoint
router.post('/login',authenticate);   //login endpoint

router.get('/signin',signinForm);   //Signin endpoint
router.post('/signin',register);   //Signin endpoint
router.get('/confirm/:token',confirmUser); // Confirm endpoint, & dinamic routing

router.get('/reset-password',resetPasswordForm);   // reset password endpoint
router.post('/reset-password',resetPassword);


//save the new password
router.get('/reset-password/:token',checkToken);
router.post('/reset-password/:token',newPassword);


export default router;
