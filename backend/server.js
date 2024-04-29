const activitiesRoute = require('./routes/activities');
const recipeRoute = require('./routes/recipe')
const userRoute = require('./routes/user')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
require("dotenv").config()


connectDB();
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 4000
const corsOptions = {
  origin: ['http://localhost:3000', 'https://hamlicious-recipe.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


app.use("/api", activitiesRoute);
app.use("/data", recipeRoute);
app.use('/users', userRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});