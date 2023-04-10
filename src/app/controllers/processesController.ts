import {Request, Response, response} from 'express';
import CreateProcesses from '../services/CreateProcesses';
import ListProcesses from '../services/ListProcesses';
import {processesArray} from '../services/DTO/populete-Bank';

export const processesCreateController = async (req: Request, res: Response) => {

  const createProcess = new CreateProcesses(processesArray);

  await createProcess.store()

  return res.status(200).send('Ok')
}

export const processesListCrontoller = async (req: Request, res: Response) => {

  const numProcess = typeof req.query.numProcess === 'string' ? req.query.numProcess : undefined
  const court = typeof req.query.court === 'string' ? req.query.court : undefined


  const listProcesses = new ListProcesses(numProcess, court)

  const showProcesses = await listProcesses.list()

  console.log(showProcesses)
  return res.send("Processos Encontrados")
}
