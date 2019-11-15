const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:9220',
  optionsSuccessStatus: 200
}
app.use(cors())

let themeRouter = require('./app/routes/theme.routes.js');
app.use('/', themeRouter);

// Create a Server
let server = app.listen(9090, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("正在监听 http://%s:%s", host, port)
});