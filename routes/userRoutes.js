import express from "express";

const router = express.Router();
//Routing  (Endpoint)

router.get('/',function (req,res) {
  res.render('auth/login')
});

export default router;
