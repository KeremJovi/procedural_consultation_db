import HandlingError from "../../midlleware/Error/HandlingError";
import Processes from "../model/Processes";


export default class ShowProcesses {

  async execute(idProcess: string) {
    console.log(idProcess)
    const findProcessForId = await Processes.findById({_id: idProcess})

    if (!findProcessForId) {
      throw new HandlingError('Process not found! ', 404)
    }


    return findProcessForId
  }
}
