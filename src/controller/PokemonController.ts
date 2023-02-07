import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { PokemonDatabase } from "../data/PokemonDatabase";
import { Pokemon } from "../model/Pokemon";
import { IdGenerator } from "../services/IdGenerator";

export class PokemonController {
  private static PokemonBusiness = new PokemonBusiness(
    new PokemonDatabase(),
    new IdGenerator()
  )

  public async getPokemonsByTeam(req: Request, res: Response) {
    try {
      const params:any = req.params
      const result = await PokemonController.PokemonBusiness.getPokemonsByTeam(params)
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }

  public async addPokemonByTeam(req: Request, res: Response) {
    try {
      const body:any = req.body
      const result = await PokemonController.PokemonBusiness.addPokemonByTeam(body)
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }

  public async removePokemon(req: Request, res: Response) {
    try {
      const id = req.params.id
      const teamId: number = req.body.teamId
      const result = await PokemonController.PokemonBusiness.removePokemon({id, teamId});
      
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }
}

