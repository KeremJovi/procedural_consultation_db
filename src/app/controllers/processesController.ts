import {Request, Response} from 'express';
import CreateProcesses from '../services/CreateProcesses';
import ListProcesses from '../services/ListProcesses';
import {processesArray} from '../services/DTO/populete-Bank';
import ShowProcesses from '../services/ShowProcesses';

export const processesCreateController = async (req: Request, res: Response) => {

  const createProcess = new CreateProcesses(processesArray);

  await createProcess.store()

  return res.status(200).send('Ok')
}

export const processesListCrontoller = async (req: Request, res: Response) => {

  try {
    const numProcess = typeof req.query.numProcess === 'string' ? req.query.numProcess : undefined
    const court = typeof req.query.court === 'string' ? req.query.court : undefined

    const listProcesses = new ListProcesses(numProcess, court)

    const showProcesses = await listProcesses.list()

    return res.status(200).send(showProcesses)

  } catch (error) {
    console.log(error)
    return res.send(error)
  }
}

export const processesShowCrontoller = async (req: Request, res: Response) => {
  try {
    const {idProcess} = req.params

    const showProcesses = new ShowProcesses()

    const result = await showProcesses.execute(idProcess)

    return res.status(200).send(result)

  } catch (error) {
    console.log(error)
    return res.send(error)
  }
}
