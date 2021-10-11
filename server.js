const express = require("express")
const app = express()
app.use(express.json())
const port = 5000
app.get('/', (req, res) => {
    return res.send({ status: true,statusCode: 200, message: "welcome aspra server",status: true  })
    console.log(' im not returning ')
})
app.listen(port, () => {
    console.log(` congratulation ! server is listening on ${port}`)
})