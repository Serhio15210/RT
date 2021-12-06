const {Schema, model} = require('mongoose')

const User = new Schema({
    name: {type: String, required: true},
    surname: {type: String},
    country: {type: String},
    phone: {type: String},
    email: {type: String, unique: true, required: true},
    nickname: {type: String, required: true},
    themes:  [],
    roles: [{type: String, ref: 'Role'}],
    password: {type: String, required: true}
})

module.exports = model('User', User)