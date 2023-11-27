
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
const register = (req,res) => {

  console.log(req.body)

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
