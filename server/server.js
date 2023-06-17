const express = require("express")
const dotenv = require("dotenv")

const app = express()
dotenv.config()
app.use(express.json())


const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})