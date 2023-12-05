
import express from 'express'  //ESModule
import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import userRoutes from "./routes/userRoutes.js"
import db from "./config/db.js"
import { cookie } from 'express-validator'

// create the App
const app = express()

//Allows to read  data from form fields

app.use(express.urlencoded({extended: true}))

// Allows Cookie parxer
app.use(cookieParser())

// Allows CSRF protection
app.use(csrf({cookie:true}))

// db conexion

try {
  await db.authenticate();
  db.sync()  //create table if not exist
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Enable pug
app.set('view engine','pug')
app.set('views','./views')

//Public folder
app.use(express.static('public'))



//Routing  midelware routes
app.use('/auth', userRoutes)

// Define the port and run the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
