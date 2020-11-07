const validator = require('validator') ;
const mongoose = require('mongoose') ;
const bcrypt = require('bcryptjs') ;
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('this is not valid email')
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('not valid password') ;
            }
        }
    },
    age: {
        type: Number
    }
}) ;

schema.pre('save',async function(next){
    const user = this ;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8) ;
    }
    next() ;
})

const User = mongoose.model('User',schema) ;

module.exports = User ;