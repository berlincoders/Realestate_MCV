import {check, validationResult } from 'express-validator'
import User from '../models/User.js'
import { generateId } from '../helpers/tokens.js'
import { emailRecord } from '../helpers/emails.js'


const loginForm = (req,res) => {
  res.render('auth/login',{
    page: 'Please Login'
  })
}
const signinForm = (req,res) => {
  res.render('auth/signin',{
    page: 'Please Sign in',
    user: {} // Ensure that the user object is defined, even if it's empty
  })
}
const resetPasswordForm = (req,res) => {
  res.render('auth/reset-password',{
    page: 'Please Reset Password'
  })
}

// create a new recod
const register = async (req,res) => {


// Validation
await check('name').notEmpty().withMessage('Name field can not be empty').run(req);
await check('email').isEmail().withMessage('Please enter a valid email address').run(req);
await check('password')
  .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  .matches(/\d/).withMessage('Password must contain a number') // Add any additional password requirements here
  .run(req);

await check('confirm_password')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match');
    }
    return true;
  })
  .run(req);

  let result = validationResult(req)


 // return res.json({errors: result.array()})

  // verify the result is empty.
  if (!result.isEmpty()) {
// if result it is not empty, means that there are some errors
      return res.render('auth/signin',{
        page: 'Please Sign in',
        errors: result.array(),
        user: {
          name: req.body.name,
          email: req.body.email
        }
      })
  }


 // verify not  duplicate users

 const userExists = await User.findOne({ where : {email : req.body.email}})
 if (userExists) {
    return res.render('auth/signin',{
      page: 'Please Sign in',
      errors:[{msg: 'The user already exists'}],
      user: {
        name: req.body.name,
        email: req.body.email
    }
  })
 }


// Generate or create the user
const user = await User.create({
  name: req.body.name,
  email: req.body.email,
  password: req.body.password,
  token: generateId()
});

// send confirmation email
emailRecord ({
  name: user.name,
  email: user.email,
  token: user.token
})


 // show confirmation message
res.render('templates/message',{
  page: ' Your account has been successfully created',
  message: 'We have sent you a confirmation email, click on the link.'
})

}
// function that checks if the user is valid
const confirmUser = async (req, res) => {

  const { token } = req.params;
  console.log(token);

  // verify if the oken is valid

  const user = await User.findOne({ where: {token}})
    if (!user) {
      return  res.render('auth/confirm-account',{
        page: ' We are sorry, we could not confirm it is you',
        message: 'couldn not verify this account belongs to you. Try again later',
        error: true
      })
  // confirm the account
}
  }

  export {
    loginForm,
    signinForm,
    register,
    confirmUser,
    resetPasswordForm
  };
