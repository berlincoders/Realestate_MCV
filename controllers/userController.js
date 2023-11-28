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
const resetPasswordForm = (req,res) => {
  res.render('auth/reset-password',{
    page: 'Please Reset Password'
  })
}

// create a new recod
const register = async (req,res) => {

  //validation
  await check('name').notEmpty().withMessage('Name field can not be empty').run(req)
  await check('email').isEmail().withMessage('Please enter a valid email address').run(req)
  await check('password').isLength({ min:6}).withMessage('Password  must be at least 6 chars!').run(req)
  await check('confirm_password').equals('password').withMessage('Passwords do NOT match!').run(req)


  let result = validationResult(req)


 // return res.json({errors: result.array()})

  // verify the result is empty.
  if (!result.isEmpty()) {
// if result it is not empty, means that there are some errors
      return res.render('auth/signin',{
        page: 'Please Sign in',
        errors: result.array()
      })
  }


  const user = await User.create(req.body)

  res.json(user)

}




export {
    loginForm,
    signinForm,
    register,
    resetPasswordForm
}
