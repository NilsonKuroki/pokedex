import { Request, Response } from "express";
import { TeamBusiness } from "../business/TeamBusiness";
import { TeamDatabase } from "../data/TeamDatabase";
import { Team } from "../model/Team";
import { IdGenerator } from "../services/IdGenerator";

export class TeamController {
  private static TeamBusiness = new TeamBusiness(
    new TeamDatabase(),
    new IdGenerator()
  );

  public async createTeam(req: Request, res: Response) {
    try {
      const result = await TeamController.TeamBusiness.createTeam(
        req.body
      );
      
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }

  public async getTeam(req: Request, res: Response) {
    try {
      const params:any = req.params
      const result = await TeamController.TeamBusiness.getTeam(params);
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({ message: error})
    }
  }

  public async listTeams(req: Request, res: Response) {
    try {
      const result = await TeamController.TeamBusiness.listTeams();
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send({ message: error})
    }
  }

  public async updateTeam(req: Request, res: Response) {
    try {
      const id = req.params.id
      const newName = req.body.name
      
      const result = await TeamController.TeamBusiness.updateTeam({id, name:newName})
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }

  public async removeTeam(req: Request, res: Response) {
    try {
      const id = req.params.id
      const result = await TeamController.TeamBusiness.removeTeam({id})
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error});
    }
  }
}
