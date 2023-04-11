class HandlingError {
  constructor(public message: string, public statusCode = 400) {
    this.message = message
    this.statusCode = statusCode
  }
}


export default HandlingError
