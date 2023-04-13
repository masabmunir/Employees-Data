let express = require('express');
let Userroutes = express.Router();
let userController  = require('../Controller/userControllers')


Userroutes.get('/',userController.getUser);
Userroutes.post('/',userController.addUser);


module.exports = Userroutes
