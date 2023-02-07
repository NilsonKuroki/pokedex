import express from "express";
import cors from 'cors'
import {AddressInfo} from "net";
import { teamRouter } from "./router/TeamRouter";
import { pokemonRouter } from "./router/PokemonRouter";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/team", teamRouter);
app.use("/pokemon", pokemonRouter);

const server = app.listen(3333, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});