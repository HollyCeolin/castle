const express = require('express')
const cors = require ('cors')
const app = express()


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

let Rollbar = require("rollbar");
let rollbar = new Rollbar({
  accessToken: '8bb12022f045415d82c9edbc6abb2482',
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");
rollbar.log('test')
const {getHTML, getCSS, getJS,} = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

const port = process.env.PORT || 4000

app.listen(port, console.log(`Server running on ${port}`))

