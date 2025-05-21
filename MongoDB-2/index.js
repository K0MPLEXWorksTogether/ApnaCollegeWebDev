const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const path = require('path')
const Chat = require('./models/Chat')
const connectDB = require('./config/db')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  res.status(200).send('Pooling Route: API Active')
})

connectDB()

app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find()
    res.status(200).render('index.ejs', { chats })
  } catch (err) {
    console.error('Error While Displaying All Chats:', err.stack)
    res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

app.get('/chats/new', (req, res) => {
  try {
    res.render('new.ejs')
  } catch (err) {
    console.error('Error While Displaying New Chat Form:', err.stack)
    res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

app.post('/chats', async (req, res) => {
  try {
    const { from, to, msg } = req.body
    await Chat.insertOne({ from, to, msg })
    console.log('Data Inserted Successfully')
    res.redirect('/chats')
  } catch (err) {
    console.error('Error while adding data:', err.stack)
    return res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

app.get('/chats/:id/edit', async (req, res) => {
  try {
    const { id: updateId } = req.params
    const chat = await Chat.findById(updateId)
    res.render('edit.ejs', { chat })
  } catch (err) {
    console.error('Error While Displaying Edit Chat Form:', err.stack)
    res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

app.put('/chats/:id', async (req, res) => {
  try {
    const { id: updateId } = req.params
    const { newMessage } = req.body

    await Chat.findByIdAndUpdate(updateId, { msg: newMessage })
    res.status(200).redirect('/chats')
  } catch (err) {
    console.error('Error while updating data:', err.stack)
    return res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

app.delete('/chats/:id', async (req, res) => {
  try {
    const { id: deleteId } = req.params
    await Chat.findByIdAndDelete(deleteId)
    res.status(200).redirect('/chats')
  } catch (err) {
    console.error('Error while deleting data:', err.stack)
    return res
      .status(500)
      .render('error.ejs', { message: `Internal Server Error: ${err.stack}` })
  }
})

PORT = 9090
app.listen(PORT, () => {
  console.log(`Server Running At http://localhost:${PORT}`)
})
