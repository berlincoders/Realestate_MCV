
// to options , import sequelize , or import datatypes
import { dataTypes } from Sequelize
import db from '../config/db.js'

const User = db.define('users',{
  name: {
      type: dataTypes.STRING,
      allowNull: false,
  },
  email: {
      type: dataTypes.STRING,
      allowNull: false,
  },
  password:{
      type: dataTypes.STRING,
      allowNull: false,
  },
  token: dataTypes.STRING,
  confirm: dataTypes. BOOLEAN,
});

export default User;
