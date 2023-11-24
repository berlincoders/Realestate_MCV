const loginForm = (req,res) => {
  res.render('auth/login',{
    auntenticado: false
  })
}

export { loginForm
}
