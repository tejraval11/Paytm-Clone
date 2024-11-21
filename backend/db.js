const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ravaltej11:359cr8YrMASafNHS@cluster0.frcpa.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
})

const accountSchema = new mongoose.Schema({
    userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'User',
         required:true
    }, 
    balance:{
        type:number,
        required:true
    } 
})

const User = mongoose.model('User' , userSchema)
const Account = mongoose.model('Account' , accountSchema)
module.exports = {
    User,
    Account
}

