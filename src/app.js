const app = require('express')()
const auth = require('./middleware/auth')

app.use(auth)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app