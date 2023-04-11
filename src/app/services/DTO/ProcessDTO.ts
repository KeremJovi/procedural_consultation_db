

export default class ProcessDTO {

  constructor(
    public numProcess: string,
    public court: string,
    public description: string,
    public startDate: string,
    public movements: object[],
    public statusProcess: object[],
    public creditor: Object,
    public appellant: Object,
    public attorney: Object[]
  ) { }
}
