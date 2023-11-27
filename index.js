
import express from 'express'  //ESModule
import userRoutes from "./routes/userRoutes.js"
import db from "./config/db.js"

// create the App
const app = express()

//Allows to read  data from form fields

app.use(express.urlencoded({extended: true}))
// db conexion

try {
  await db.authenticate();
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
const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
