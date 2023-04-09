import { Router } from 'express';
import { Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

routes.get('/populating_bank', (req: Request, res: Response) => {
  res.send('Populating Bank');
});

export default routes;
