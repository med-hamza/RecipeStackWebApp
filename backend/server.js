const activitiesRoute = require('./routes/activities');
const recipeRoute = require('./routes/recipe')
const userRoute = require('./routes/user')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser')
require("dotenv").config()



connectDB();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});
app.use("/api", activitiesRoute);
app.use("/data", recipeRoute);
app.use('/users', userRoute);
app.use(notFound);
app.use(errorHandler);