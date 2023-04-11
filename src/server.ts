import app from './app'
import 'express-async-errors';
import HandlingError from './midlleware/Error/HandlingError';
import {NextFunction, Request, Response, response} from 'express';

const port = process.env.PORT || 3030;


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof HandlingError) {
    return res.status(error.statusCode).send({
      statusCode: error.statusCode,
      message: error.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})


app.listen(port, () => {
  console.log(`Server runs on port: ${port}`);
})
