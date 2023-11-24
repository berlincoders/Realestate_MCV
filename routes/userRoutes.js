import express from "express";
import { loginForm,signinForm } from "../controllers/userController.js";

const router = express.Router();
//Routing  (Endpoint)

router.get('/login',loginForm);   //login endpoint
router.get('/signin',signinForm);   //Signin endpoint

export default router;
