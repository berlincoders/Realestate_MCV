import express from "express";
import { loginForm } from "../controllers/userController.js";

const router = express.Router();
//Routing  (Endpoint)

router.get('/login',loginForm)

export default router;
