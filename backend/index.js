const express = require("express");
const app = express()
const apiRouter = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/api/v1' ,apiRouter)

app.listen(3000)

