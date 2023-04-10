import CreateProcesses from "../src/app/services/CreateProcesses"
import {IProcess} from "../src/typeConf"

export const makeSutCreate = (body: IProcess[]) => {
  const sut = new CreateProcesses(body)

  return {
    sut
  }
}
