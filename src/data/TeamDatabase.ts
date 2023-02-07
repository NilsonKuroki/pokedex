import { BaseDataBase } from "./BaseDatabase";
import { Team } from "../model/Team";

export class TeamDatabase extends BaseDataBase {
  protected tableName: string = "Teams";

  public async createTeam(team: Team): Promise<void> {
    await super.getConnection().raw(`
      INSERT INTO ${this.tableName} (name)
      VALUES (
        '${team.name}'
    )`);
  }
  public async getTeam(team: Team): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE id=${team.id};
    `);
    return result[0][0]
  }
  public async listTeams(): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${this.tableName};
    `);
    return result[0]
  }
  public async updateTeam(team: Team): Promise<void> {
    await super.getConnection().raw(`
      UPDATE ${this.tableName} SET name='${team.name}' WHERE id=${team.id}
    `);
  }
  public async removeTeam(team: Team): Promise<void> {
    await super.getConnection().raw(`
      DELETE FROM ${this.tableName} WHERE id=${team.id};
    `);
  }
}
