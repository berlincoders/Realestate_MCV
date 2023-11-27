import {check, validationResult } from 'express-validator'
import User from '../models/User.js';

const loginForm = (req,res) => {
  res.render('auth/login',{
    page: 'Please Login'
  })
}
const signinForm = (req,res) => {
  res.render('auth/signin',{
    page: 'Please Sign in'
  })
}
const register = async (req,res) => {

  //validation
  await check('name').notEmpty().withMessage('Required field').run(req)
  await check('email').isEmail().withMessage('it must be an email adress').run(req)


  let result = validationResult(req)


  res.json(result.array());

  const user = await User.create(req.body)

  res.json(user)

}

const resetPasswordForm = (req,res) => {
  res.render('auth/reset-password',{
    page: 'Please Reset Password'
  })
}

export {
    loginForm,
    signinForm,
    register,
    resetPasswordForm
}
