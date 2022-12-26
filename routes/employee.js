const express = require('express')
const  employeeControler  = require('../controller/employee')

const employeeRouter = express.Router()


employeeRouter.route("/employeeDetail")
.get(employeeControler.employeeGet)


module.exports = employeeRouter