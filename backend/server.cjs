/* eslint-disable no-undef */
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

const url = 'mongodb://127.0.0.1:27017'
const dbName = 'kitsu'

mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
  console.log('MongoDB connected')

  // db.collection(dbName).insertOne({ name: 'test' }, (err, res) => {
  //   if (err) {
  //     return console.log(err)
  //   }

  //   console.log(res)
  // })
})

app.use('/api', require('./routes/api.cjs'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
