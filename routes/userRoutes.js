// const express = require("express");
const user_route = require("express").Router()
const control = require('../controllers/userController');
// const log = require('/login.html');



user_route.post('/login',control.login);
user_route.get('/login',control.get);





module.exports = user_route