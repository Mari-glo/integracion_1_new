const { Schema, model } = require('mongoose')

const collection = 'users'

const userSchema = new Schema({ 
    first_name: {
        type: String,
        require: true
    },
    last_name:{
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

const userModel = model(collection, userSchema)
module.exports = { userModel }