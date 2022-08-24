const { setupRoutes } = require('./routes')
const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

setupRoutes(app)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
