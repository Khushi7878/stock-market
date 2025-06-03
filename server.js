const express = require("express")
const cors = require("cors")
const stockRoute = require("./route/stockRoute")
const dbConnection = require("./dbConnection")
const app = express()

app.use(express.json())
app.use(cors())

app.use("/stock", stockRoute)

dbConnection();
app.listen(8000, () => {
    console.log('server is running')
})