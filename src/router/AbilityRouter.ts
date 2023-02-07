import express from "express";
import { AbilityController } from "../controller/AbilityController";
//linha responsável por criar um módulo de rotas no express
export const abilityRouter = express.Router();

abilityRouter.get("/:id", new AbilityController().getAbility);
abilityRouter.get("/pokemon/:pokemonId", new AbilityController().getAbilitiesByPokemon);
abilityRouter.get("/", new AbilityController().listAbilitys);
