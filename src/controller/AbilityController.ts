import { Request, Response } from "express";
import { AbilityBusiness } from "../business/AbilityBusiness";
import { AbilityDatabase } from "../data/AbilityDatabase";
import { Ability } from "../model/Ability";
import { IdGenerator } from "../services/IdGenerator";

export class AbilityController {
  private static AbilityBusiness = new AbilityBusiness(
    new AbilityDatabase(),
    new IdGenerator()
  );

  public async getAbility(req: Request, res: Response) {
    try {
      const id = req.body.id
      const result = await AbilityController.AbilityBusiness.getAbility(
        id
      );
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }

  public async getAbilitiesByPokemon(req: Request, res: Response) {
    try {
      const pokemonId = req.body.id
      const result = await AbilityController.AbilityBusiness.getAbilitiesByPokemon(
        pokemonId
      );
      res.status(200).send();
    } catch (err) {
      // res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
  public async listAbilitys(req: Request, res: Response) {
    try {
      const result = await AbilityController.AbilityBusiness.listAbilitys();
      res.status(200).send();
    } catch (err) {
      // res.status(err.errorCode || 400).send({ message: err.message });
    }
  }
}
