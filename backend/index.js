const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT||3000

app.use(express.static(path.join(__dirname, "public")))
app.use('/', require('./routes/index'))
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}...`)
})