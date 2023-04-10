import { Types } from "mongoose"

export interface IProcess {
  _id?: Types.ObjectId
  numProcess: string;
  court: string;
  description: string;
  startDate: string;
  movements: IMovement[];
  statusProcess: IStatusProcess[];
  creditor: ICreditor;
  appellant: IAppellant;
  attorney: IAttorney[];
}

interface IMovement {
  updateDate: string;
  updateDescription: string;
}

interface IStatusProcess {
  status: string;
}

interface ICreditor {
  name: string;
  link: string;
}

interface IAppellant {
  name: string;
  link: string;
}

interface IAttorney {
  name: string;
  link: string;
}
