const express = require('express')
const app = express()
const path = require('path')
const instaData = require('./data.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/dice', (req, res) => {
  let value = Math.floor(Math.random() * 6) + 1
  res.render('rolldice', { value })
})

app.get('/ig/:username', (req, res) => {
  let username = req.params.username
  if (instaData[username]) {
    res.render('instagram', { data: instaData[username] })
  } else {
    res.render("notfound", {username})
  }
})

PORT = 3000
app.listen(PORT, () => {
  console.log('Server is listening at port 3000.')
})
