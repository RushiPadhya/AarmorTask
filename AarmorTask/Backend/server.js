
// ************************** Using MySQL ********************************


// var connection=require('./connection');
// var express=require('express');
// var bodyparser=require('body-parser');


// var app=express();
// app.use(bodyparser.json())


// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
//   });

// app.get('/city',(req,res)=>{
//     connection.query('SELECT * FROM city',(err,rows)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             res.send(rows)
//         }
//     })
// })


// app.get('/blood',(req,res)=>{
//     connection.query('SELECT * FROM blood',(err,rows)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             res.send(rows)
//         }
//     })
// })

// app.get('/user',(req,res)=>{
//     connection.query('SELECT * FROM user',(err,rows)=>{
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             res.send(rows)
//         }
//     })
// })

// app.listen(5000,()=>
// {
//     console.log("Running...");
    
// })


// ************************** Using MongoDB ********************************

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { CityModel, BloodModel, UserModel } = require('./modules');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/demo1");

app.get('/city', (req, res) => {
    CityModel.find()
      .then(city => res.json(city))
      .catch(err => {
         console.error('Error fetching data:', err);
         res.status(500).json({ error: 'Internal Server Error' });
      });
});

app.get('/blood', (req, res) => {
    BloodModel.find()
       .then(blood => res.json(blood))
       .catch(err => {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
       });
 });


 app.get('/user', (req, res) => {
    UserModel.find()
       .then(user => res.json(user))
       .catch(err => {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
       });
 });

app.listen(5000, () => console.log("Server running on port 5000..."));
