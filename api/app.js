const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"5",
      "title":"Cope: Good clg but wtf"
    },
    {
      "id":"2",
      "title":"Vit Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Viit: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})