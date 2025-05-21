const mongoose = require('mongoose')

async function connectDB() {
  try {
    const connection = mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
    console.log('Connection Successful.')
    return connection
  } catch (err) {
    console.error('Connection Could Not Be Established:', err.stack)
    return null
  }
}

module.exports = connectDB
