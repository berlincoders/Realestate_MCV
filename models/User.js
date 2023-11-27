
// to options , import sequelize , or import datatypes
import { DataTypes } from 'Sequelize'
import db from '../config/db.js'

const User = db.define('users',{
  name: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  email: {
      type: DataTypes.STRING,
      allowNull: false,
  },
  password:{
      type: DataTypes.STRING,
      allowNull: false,
  },
  token: DataTypes.STRING,
  confirm: DataTypes. BOOLEAN,
});

export default User;
