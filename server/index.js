require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT ||  5000
const authRouter = require('./routes/authRouter')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)


const start = async () => {
  try {
      await mongoose.connect(process.env.mongo)
      app.listen(PORT, () => console.log('server started on 5000 port'))
  } catch (e) {
      console.log(e)
  }
}

start()