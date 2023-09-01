const mongoose = require('mongoose');
const bodyparser = require('body-parser')
const cors = require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/Bridgeon_Project")
const express = require('express');
const app = express();
const port = 3000;
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser())
app.use(cors())
//for user routes

const userRoute = require('./routes/userRoutes');
app.use('/',userRoute)

//for admin routes

const adminRoute =require('./routes/adminRoutes');
app.use('/admin',adminRoute);

const reg = require('./register');
app.use('/',reg)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });
  app.get('/admin',(req,res)=>{
    res.sendFile(__dirname+'/dashboard.html');
    res.send('admin Logged')
  })


app.listen(port,()=>{
    console.log('server running on port:'+port);
})

