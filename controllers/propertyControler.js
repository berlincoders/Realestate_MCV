const admin = (req, res, next) => {

  res.render('properties/admin', {
    page: 'My properties',
    barr: true
  })
}
export {
  admin
}
