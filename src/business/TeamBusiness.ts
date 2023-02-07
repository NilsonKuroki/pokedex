import {IdGenerator} from '../services/IdGenerator'
import { TeamDatabase } from "../data/TeamDatabase"
import { Team } from "../model/Team"

export class TeamBusiness {
  constructor(
    private teamDatabase: TeamDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async createTeam(body: any){
    if(!body.name){
      throw new Error("É necessário informar um nome")
    }
    const team = new Team(body)
    await this.teamDatabase.createTeam(team);
  }

  public async getTeam(params:any){
    if(!params.id){
      throw new Error("É necessário informar o id do time")
    }
    const team = new Team(params)
    return await this.teamDatabase.getTeam(team);
  }

  public async listTeams(){
    return await this.teamDatabase.listTeams();
  }
  public async updateTeam(body:any){
    if(!body.name){
      throw new Error("É necessário informar um nome")
    }
    if(!body.id){
      throw new Error("É necessário informar um id")
    }
    const team = new Team(body)
    return await this.teamDatabase.updateTeam(team);
  }
  public async removeTeam(params:any){
    if(!params.id){
      throw new Error("É necessário informar o id do time")
    }
    const team = new Team(params)
    return await this.teamDatabase.removeTeam(team);
  }
}
