import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { MongoClientOptions } from 'mongodb';

import routes from './routes';

require('dotenv').config({ path: '.env' });

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    mongoose.connect(process.env.MONGODB as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongoClientOptions);

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

export default new App().server;
