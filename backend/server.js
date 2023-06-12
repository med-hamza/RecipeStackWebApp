const activitiesRoute = require('./routes/activities');
const recipeRoute = require('./routes/recipe')
const express = require('express');



const mongoose = require("mongoose")
require("dotenv").config()


const cors = require('cors')

const app = express();
const PORT = process.env.PORT  | 4000;

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('mongoDB connected'))
.catch((err)=> console.log(err));



app.listen(PORT, () => {
    console.log('Server is running on port 4000');
  }); 
app.use("/api", activitiesRoute);
app.use("/data", recipeRoute );