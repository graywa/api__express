import http from 'http'
import express from 'express'

const port = 8000
const app = express()

app.all('/hello', (req, res, next) => {
  console.log('All')
  next()
})

const cb = (req, res, next) => {
  console.log('cb')
  next()
}

app.get('/hello', cb, (req, res) => {
  res.send('Hello Node')
})


app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})




//const host = '127.0.0.1'
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello Node')
// })

// server.listen(port, host, () => {
//   console.log(`Server started on ${host}:${port}`)
// })