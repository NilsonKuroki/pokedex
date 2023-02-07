export class Pokemon{
  constructor(
    private body: any
  ) {
    this._id = body.id
    this._name = body.name
    this._teamId = body.teamId
    this._abilities = body.abilities
  }
  public _id:number
  public _name:string
  public _teamId:number
  public _abilities:Array<any>

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
  
  get teamId(): number {
    return this._teamId
  }

  set teamId(_teamId) {
    this._teamId = _teamId
  }

  get abilities(): any {
    return this._abilities
  }

  set abilities(_abilities) {
    this._abilities = _abilities
  }
}