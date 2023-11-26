
import express from 'express'  //ESModule
import userRoutes from "./routes/userRoutes.js"
import db from "./config/db.js"

// create the App
const app = express()

// db conexion
try{
  await db.authenticate();
  console.log("  conexion authenticated")
} catch (error) {
  console.log(error)
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
