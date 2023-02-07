import {IdGenerator} from '../services/IdGenerator'
import { AbilityDatabase } from "../data/AbilityDatabase"

export class AbilityBusiness {
  constructor(
    private abilityDatabase: AbilityDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async getAbility(abilityId:string){
    const id = this.idGenerator.generate()
    const pokemonId = this.idGenerator.generate()

    await this.abilityDatabase.getAbility(abilityId);
  }

  public async getAbilitiesByPokemon(pokemonId:string){
    await this.abilityDatabase.getAbilitiesByPokemon(pokemonId);
  }

  public async listAbilitys(){
    await this.abilityDatabase.listAbilitys();
  }
}
