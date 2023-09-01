const express = require('express');
const schema = require('./models/userModel');

const route = express.Router();
route.post("/register",async(req,res)=>{
    console.log(req.body);
    await schema.insertMany({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    res.send('User Registred')      
    
})


module.exports = route;