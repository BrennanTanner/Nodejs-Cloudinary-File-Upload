require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const userRoutes = require('./routes/user');
const PORT = process.env.PORT || 3030;

//Connect to database
mongoose.connect(mongoString);
const database = mongoose.connection;


database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

app.use("/user", userRoutes);

app.listen(PORT, () => {
   console.log(`Server Started at ${PORT}`)
})
