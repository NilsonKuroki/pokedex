import {IdGenerator} from '../services/IdGenerator'
import { PokemonDatabase } from "../data/PokemonDatabase"
import { Pokemon } from '../model/Pokemon';

export class PokemonBusiness {
  constructor(
    private pokemonDatabase: PokemonDatabase,
    private idGenerator: IdGenerator
  ) {}

  public async getPokemonsByTeam(params: any){
    if(!params.teamId){
      throw new Error("É necessário informar o id do time")
    }
    const pokemon = new Pokemon(params)
    return await this.pokemonDatabase.getPokemonsByTeam(pokemon);
  }

  public async addPokemonByTeam(body: any){
    if(!body.teamId){
      throw new Error("É necessário informar o id do time")
    }
    if(!body.abilities){
      throw new Error("É necessário informar as habilidades do pokemon")
    }
    const pokemon = new Pokemon(body)
    return await this.pokemonDatabase.addPokemonByTeam(pokemon);
  }
  
  public async removePokemon(params: any){
    if(!params.id){
      throw new Error("É necessário informar o id do pokemon")
    }
    if(!params.teamId){
      throw new Error("É necessário informar o id do time")
    }
    const pokemon = new Pokemon(params)

    await this.pokemonDatabase.removePokemon(pokemon);
  }
}
