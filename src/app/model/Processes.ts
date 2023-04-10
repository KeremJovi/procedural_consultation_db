import { Schema, model } from "mongoose";
import { IProcess } from '../../typeConf'

const ProcessesSchema = new Schema<IProcess>({
  numProcess: {
    type: String,
    required: true
  },
  court: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },

  movements: [ {
    updateDate: { type: String, required: true },
    updateDescription: { type: String, required: true }
  } ],

  statusProcess: [ { status: { type: String, required: true } } ],

  creditor: {
    name: { type: String, required: true },
    link: { type: String, required: true }
  },
  appellant: {
    name: { type: String, required: true },
    link: { type: String, required: true }
  },
  attorney: [ {
    name: { type: String, required: true },
    link: { type: String, required: true }
  } ]

})


export default model<IProcess>('Process', ProcessesSchema);
