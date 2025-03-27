const express = require('express')
const path = require('path')
const { v4 } = require('uuid')
const methodOverride = require('method-override')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  return res.send('Server Working Well!')
})

let posts = [
  {
    id: v4(),
    username: '@k0mplex',
    content: 'I am working on a RESTful service.',
  },
  {
    id: v4(),
    username: '@shraddhadidi',
    content: 'I am teaching a RESTful services.',
  },
  {
    id: v4(),
    username: '@apnacollege',
    content: 'I am servicing a class teaching RESTful services.',
  },
]

app.get('/posts', (req, res) => {
  res.render('index', { posts })
})

app.get('/posts/new', (req, res) => {
  res.render('post')
})

app.post('/posts', (req, res) => {
  const uniqueID = v4()
  const { username, content } = req.body
  const object = { username: username, content: content, id: uniqueID }
  posts.push(object)

  res.redirect('/posts')
})

app.get('/posts/:id', (req, res) => {
  let id = req.params.id
  let post = posts.find((post) => id == post.id)
  if (post) {
    res.render('show', { post })
  } else {
    res.render('error')
  }
})

app.patch('/posts/:id', (req, res) => {
  const id = req.params.id
  let newContent = req.body.content

  let post = posts.find((post) => id === post.id)
  if (post) {
    post.content = newContent
    res.redirect('/posts')
  } else {
    res.render('error')
  }
})

app.get('/posts/:id/edit', (req, res) => {
  let id = req.params.id
  let post = posts.find((post) => id === post.id)
  res.render('edit', { post })
})

app.delete('/posts/:id', (req, res) => {
  let id = req.params.id
  let index = 0
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id == id) {
      index = i
      break
    }
  }

  posts.splice(index, 1)
  res.redirect('/posts')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
