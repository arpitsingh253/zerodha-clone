require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;
const app = express();
  

   
app.listen(PORT,()=>{
    console.log('Server is running on port ');
    mongoose.connect(uri);
    console.log('MongoDB connected');
})