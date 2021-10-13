const express = require("express")
const app = express()
app.use(express.json())
const port = 5000

//require mongodb connection
require('./config/mongo')

//require routes
require('./routes/index')(app)
app.listen(port, () => {
    console.log(`congratulation ! server is listening on ${port}`)
})