import HandlingError from "../../midlleware/Error/HandlingError";
import {IProcess} from "../../typeConf";
import Processes from "../model/Processes";
import ProcessDTO from "./DTO/ProcessDTO";

export default class CreateProcesses {
  constructor(public body: IProcess[]) {
    this.body = body
  }

  async store(): Promise<IProcess[]> {
    const processDTOs = this.body.map(process => {
      return new ProcessDTO(
        process.numProcess,
        process.court,
        process.description,
        process.startDate,
        process.movements,
        process.statusProcess,
        process.creditor,
        process.appellant,
        process.attorney
      )
    })

    const createProcesses = await Processes.insertMany(processDTOs)

    if (!createProcesses) {
      throw new HandlingError("Unable to create process", 400)
    }
    return createProcesses
  }
}

