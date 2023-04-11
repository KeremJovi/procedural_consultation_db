import mongoose from "mongoose"
import {IProcess} from "../../typeConf"
import ConnectionMongoose from '../utils/MongooseConcect'
import Processes from "../model/Processes"
import {makeSutCreate} from "../../../_mocks_/createProcesses"
import {processesArray} from '../services/DTO/populete-Bank';



describe('Create Processes', () => {
  let process: IProcess[]

  beforeAll(async () => {
    await ConnectionMongoose.connect()
    process = await Processes.create(processesArray)

  })
  afterAll(async () => {
    await Processes.deleteMany()
    await ConnectionMongoose.closeConnection()
  })


  it('Should return an array of the objects', async () => {
    const {sut} = makeSutCreate(process)

    const response = await sut.store()

    const findProcesses = await Processes.find()

    const jsonResult = JSON.stringify(response)
    const jsonFindProcess = JSON.stringify(findProcesses)

    expect(Array.isArray(response)).toBe(true)

    expect(jsonResult[0]).toBe(jsonFindProcess[0])
  })


})
