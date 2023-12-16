import  express  from "express";
import { admin,create } from "../controllers/propertyControler.js";

const router = express.Router();


router.get('/my-properties',admin)
router.get('/properties/create',create)

export default router
