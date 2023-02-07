export class Team{
  constructor(
    private body: any
  ) {
    this._id = body.id
    this._name = body.name
  }
  public _name:string
  public _id:number

  get id(): number {
    return this._id
  }

  set id(_id) {
    this._id = _id
  }

  get name(): string {
    return this._name
  }

  set name(_name) {
    this._name = _name
  }
}