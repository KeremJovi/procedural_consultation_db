import {Router} from 'express';
import {processesCreateController, processesListCrontoller} from './app/controllers/processesController';


const routes = Router();

routes.post('/populating_bank', processesCreateController);
routes.get('/', processesListCrontoller);


export default routes;
