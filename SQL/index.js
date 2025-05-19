const express = require('express')
const path = require("path")

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/view/count', (req, res) => res.render('count'))
app.get('/view/users', (req, res) => res.render('users'))
app.get('/view/create', (req, res) => res.render('create'))
app.get('/view/update', (req, res) => res.render('update'))
app.get('/view/delete', (req, res) => res.render('delete'))

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))
