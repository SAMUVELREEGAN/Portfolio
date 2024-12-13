const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require('nodemailer')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

// MiddleWare

app.use(cors())
app.use(bodyParser.json())


app.use(require("./Routers/Mailer"))

app.listen(8000, () => {
    console.log('Server is running on 8000');
  });
