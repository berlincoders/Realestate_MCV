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
