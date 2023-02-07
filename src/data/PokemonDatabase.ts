import { BaseDataBase } from "./BaseDatabase";
import { Pokemon } from "../model/Pokemon";

export class PokemonDatabase extends BaseDataBase {
  protected tableName: string = "Pokemons";

  public async getPokemon(id:string): Promise<void> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE id=${id};
    `);
    return result[0][0]
  }

  public async getPokemonsByTeam(pokemon: Pokemon): Promise<any> {
    const result = await super.getConnection().raw(`
      SELECT * FROM ${this.tableName} WHERE teamId=${pokemon.teamId}
    `);
    return result[0]
  }

  public async addPokemonByTeam(pokemon: Pokemon): Promise<void> {
    const result = await super.getConnection().raw(`
      INSERT INTO ${this.tableName} (name, teamId)
      VALUES (
        '${pokemon.name}',
        ${pokemon.teamId}
    )`)
    const pokemonId = result[0].insertId

    if(!!pokemon.abilities && !!pokemon.abilities.length){
      const query = pokemon.abilities.map((ability: any, index: number) => {
        return (!index ? "('" + ability.name +"', "+ pokemonId+ ")" : ",('" + ability.name +"', "+ pokemonId+ ")") 
      }).join("")
      await super.getConnection().raw(`
        INSERT INTO Abilities (name, pokemonId)
        VALUES ` + query
      )
    }

  }
  
  public async removePokemon(pokemon: Pokemon): Promise<void> {
    //para apagar o pokemon, é necessário apagar todas as habilidades relacionadas com aquele pokemon, devido a foreign key
    await super.getConnection().raw(`
      DELETE FROM Abilities WHERE pokemonId=${pokemon.id};  
    `);
    await super.getConnection().raw(`
      DELETE FROM ${this.tableName} WHERE id=${pokemon.id} AND teamId=${pokemon.teamId};   
    `);
    
  }
}
