import express from "express";
import { TeamController } from "../controller/TeamController";

//linha responsável por criar um módulo de rotas no express
export const teamRouter = express.Router();

teamRouter.post("/", new TeamController().createTeam);
teamRouter.get("/:id", new TeamController().getTeam);
teamRouter.get("/", new TeamController().listTeams);
teamRouter.put("/:id", new TeamController().updateTeam);
teamRouter.delete("/:id", new TeamController().removeTeam);