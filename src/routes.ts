import {Router} from 'express';
import {processesCreateController, processesListCrontoller, processesShowCrontoller} from './app/controllers/processesController';


const routes = Router();

routes.post('/populating_bank', processesCreateController);
routes.get('/find', processesListCrontoller);
routes.get('/details/:idProcess', processesShowCrontoller);



export default routes;
