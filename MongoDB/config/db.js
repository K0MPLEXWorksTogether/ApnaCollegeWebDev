const mongoose = require('mongoose')

async function connectDB() {
  try {
    const uri = 'mongodb://127.0.0.1:27017/test' // standard localhost IP
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connection established')
    return connection
  } catch (err) {
    console.error('Could not connect to MongoDB:', err.stack)
    return null
  }
}

module.exports = connectDB