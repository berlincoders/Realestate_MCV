const admin = (req, res, next) => {

  res.render('properties/admin', {
    page: ('My properties')
  })
}

export {
  admin
}
