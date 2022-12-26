const express = require('express')
const cors = require('cors')


const mainRouter = require("./routes")

const app = express()

app.use('/api/v1',mainRouter)

app.listen(8000,()=>{
    console.log("Application Started......")
})