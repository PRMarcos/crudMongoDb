require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./router');

const app = express();


mongoose.connect(process.env.DB_URL_CONNCTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);


const dbConnection = mongoose.connection;

dbConnection.on("open", ()=>{console.log("Connected to the database successfully")})

app.listen(3000,()=>{console.log("server listen on port 3000")});