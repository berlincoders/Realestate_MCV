import  Sequelize  from "sequelize";

//create a new instance of sequelize
const db = new Sequelize('realestate_mvc','root','prometheus!',{

  host:'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    timestamps: true,
  },
  // conexion pool to the db
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;
