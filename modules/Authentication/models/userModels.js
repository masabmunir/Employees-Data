const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userInfo = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userInfo.pre("save",async function (next){

    if(this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next()
})

module.exports = mongoose.model('data',userInfo);
