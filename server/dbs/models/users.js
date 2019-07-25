const mongoose = require('mongoose')
let usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
})
module.exports = mongoose.model('Users', usersSchema)
