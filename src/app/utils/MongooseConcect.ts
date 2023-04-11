import mongoose from "mongoose"
require('dotenv').config();

class ConnectionMongoose {
  private hasConectived: boolean

  constructor() {
    this.hasConectived = false
  }

  async connect() {
    const MONGODB = process.env.MONGODB_TEST || ''

    if (this.hasConectived) return

    await mongoose.connect(MONGODB)
    console.log("MongoDB connected")

    this.hasConectived = true
  }

  async closeConnection() {
    if (!this.hasConectived) return

    await mongoose.connection.close()
    console.log("MongoDB disconnected")

    this.hasConectived = false
  }
}

export default new ConnectionMongoose()
