const express = require('express')
const MailerController = require('../Controllers/MailerController')

const Mailer = express.Router()

Mailer.post("/sendemail",MailerController.insert)


module.exports = Mailer