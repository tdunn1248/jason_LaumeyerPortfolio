const express = require('express')
const app = express()
const path = require('path')
const port = 3012

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`runnin on port: ${port}`))
