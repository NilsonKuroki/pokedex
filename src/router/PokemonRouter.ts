import express from "express";
import { PokemonController } from "../controller/PokemonController";
//linha responsável por criar um módulo de rotas no express
export const pokemonRouter = express.Router();

// pokemonRouter.get("/:id", new PokemonController().getPokemon); Não precisamos já que os pokemons estão vindo da PokeApi
pokemonRouter.get("/team/:teamId", new PokemonController().getPokemonsByTeam);
pokemonRouter.post("/", new PokemonController().addPokemonByTeam);
pokemonRouter.delete("/:id", new PokemonController().removePokemon);