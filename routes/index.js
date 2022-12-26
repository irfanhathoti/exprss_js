const express = require('express')


const employeeRouter = require('./employee')


const mainRouter = express.Router()

mainRouter.use('/employee',employeeRouter)

module.exports = mainRouter