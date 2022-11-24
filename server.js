const express = require('express')
const usersrouter = require('./router/users')
const app = express()
const port = 3000
const connectDB = require('./config/db')


//fungsinya untuk aplikasi kita bisa membca inputan dari form
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.use(usersrouter)
connectDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})