import HandlingError from "../../midlleware/Error/HandlingError";
import Processes from "../model/Processes";



export default class ListProcesses {

  constructor(public numProcess: string | undefined, public court: string | undefined) { }

  async list() {

    const regexNumProcess = new RegExp(`.*${this.numProcess}.*`, "i")
    const regexCourt = new RegExp(`.*${this.court}.*`, "i")

    const filters = [];

    if (this.numProcess) {
      filters.push({
        $and: [
          {numProcess: regexNumProcess},
          {numProcess: {$eq: this.numProcess}}
        ]
      });
    }

    if (this.court) {
      filters.push({
        $and: [
          {court: regexCourt},
          {court: {$eq: this.court}}
        ]
      });
    }

    const processes = await Processes.find(filters.length ? {$or: filters} : {});

    if (!processes) {
      throw new HandlingError("Process not found! ", 404)
    }
    return processes
  }

}
