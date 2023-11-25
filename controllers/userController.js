const loginForm = (req,res) => {
  res.render('auth/login',{

  })
}
const signinForm = (req,res) => {
  res.render('auth/signin',{
    page: 'Please Sign in'
  })
}

export {
    loginForm,
    signinForm
}
