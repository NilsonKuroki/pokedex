import { BaseDataBase } from "./BaseDatabase";
import { Ability } from "../model/Ability";

export class AbilityDatabase extends BaseDataBase {
  protected tableName: string = "Abilities";

  public async getAbility(abilityId: string): Promise<void> {
    await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE id=${abilityId};
    `);
  }
  public async getAbilitiesByPokemon(pokemonId: string): Promise<void> {
    await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE pokemonId=${pokemonId};
    `);
  }
  public async listAbilitys(): Promise<void> {
    await super.getConnection().raw(`
      SELECT * FROM ${this.tableName}
    `);
  }
}
