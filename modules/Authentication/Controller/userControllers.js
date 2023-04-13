let express = require('express');
let userdata  = require('../models/userModels')


const getUser = (req,res)=>{
    userdata.find((err,doc)=>{
        if(err){
            console.log("Error in getting data ", err)
        } else {
            console.log(doc)
        }
    })
}

const addUser = async (req,res)=>{
    try {
        let user  = new userdata({
            name: req.body.name,
            password: req.body.password
        })


        await user.save();

        return res.status(200).json
        ({
            Message : "Success",
            user:user
        })
    }
    catch (err){
      console.log(err)
        return res.status(400).json
        ({
            Message: "Error",
            err:err
        })
    }
}


module.exports = {getUser,addUser}
