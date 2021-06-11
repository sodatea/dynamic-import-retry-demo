const express = require('express')
const bodyParser = require('body-parser')
const sirv = require('sirv')

const app = express()
app.use(bodyParser.json())

let isLazyChunkAvailable = false
app.get('/lazy.js', (req, res, next) => {
  if (!isLazyChunkAvailable) {
    res.sendStatus(404)
  } else {
    next()
  }
})

app.post('/api/availability', (req, res, next) => {
  if (req.body.action === 'toggle') {
    isLazyChunkAvailable = req.body.payload
  }
  res.json({ success: true })
})

app.use(
  '/',
  sirv(__dirname, { etag: true, single: true })
)


app.listen(3000, () => {
  console.log(`
View http://localhost:3000/ to see the demo;
View http://localhost:3000/index-polyfilled.html to see the demo running with dynamic import polyfill
View http://localhost:3000/index-fixed.html to see a workaround with preload`)
})

