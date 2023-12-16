const admin = (req, res) => {

  res.render('properties/admin', {
    page: 'My properties',
    barr: true
  })
}
// Form to crate a new properties
const create = (req, res) => {

  res.render('properties/create', {
    page: 'Create Property',
    barr: true
  })

}


export {
  admin,
  create
}
