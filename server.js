require('dotenv').config()
const PORT = process.env.PORT

const express = require('express')
const app = express()

app.use(require('cors')())
app.use(express.json())

app.use(require('./routes/index'))

app.use(require("./middlewares/errors.middleware"));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})