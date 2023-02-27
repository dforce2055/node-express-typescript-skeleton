/* eslint-disable no-console */
import * as dotenv from 'dotenv'
dotenv.config()
const mongoose = require('mongoose')

export class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env['MONGO_URI'],
      { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch((err: unknown) => {
        console.error('Database connection error')
        console.log(err)
      })
  }
}