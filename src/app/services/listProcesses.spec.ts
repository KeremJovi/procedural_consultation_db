import mongoose from "mongoose"
import {arrayProcesses, makeSutList, processMock} from "../../../_mocks_/listProcesses"
import {IProcess} from "../../typeConf"
import ConnectionMongoose from '../utils/MongooseConcect'
import Processes from "../model/Processes"



describe('List Processes', () => {
  let process: IProcess[]

  beforeAll(async () => {
    await ConnectionMongoose.connect()
    process = await Processes.create(arrayProcesses)

  })
  afterAll(async () => {
    await Processes.deleteMany()
    await ConnectionMongoose.closeConnection()
  })


  it('Should return an object', async () => {
    const {sut} = makeSutList(process[0].numProcess, process[0].court)
    const result = await sut.list()
    const findProcess = await Processes.findOne({numProcess: arrayProcesses[0].numProcess})

    const jsonResult = JSON.stringify(result[0])
    const jsonFindProcess = JSON.stringify(findProcess)

    expect(jsonResult).toBe(jsonFindProcess)
  })
  it('Should return an array of objects when given a partial string', async () => {
    const partialString = "100"
    const {sut} = makeSutList(partialString, '')
    const result = await sut.list()

    expect(Array.isArray(result)).toBe(true)

    for (const process of result) {
      expect(process.numProcess).toContain(partialString)
    }
  })
  it('Should return an array of objects when given a partial string', async () => {
    const partialString = "TJ"
    const {sut} = makeSutList('', partialString)
    const result = await sut.list()

    expect(Array.isArray(result)).toBe(true)

    for (const process of result) {
      expect(process.court).toContain(partialString)
    }
  })
  it('Should return an array of objects when given no string', async () => {
    const {sut} = makeSutList('', '')
    const result = await sut.list()
    const arrProcesses = await Processes.find()
    const jsonResult = JSON.stringify(result)
    const jsonFindProcess = JSON.stringify(arrProcesses)
    expect(jsonResult).toBe(jsonFindProcess)
  })
})

