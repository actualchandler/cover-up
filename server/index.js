// EXTERNAL MODULES
const express = require('express')
, session = require('express-session')
, bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, massive = require('massive')
, cors = require('cors')

// CONFIG
let config = require('./config')

// EXPRESS
let app = module.exports = express();

app.use(express.static(__dirname + '/../build'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// CONNETION
let port = config.PORT

const path = require('path')

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(port, () => {
   console.log(`Listening on ${port}`)
})