import { Request, Response } from "express";
import * as matchService from '../services/match.service';

/**
 * Get all matches
 */
export const getMatches = (req: Request, res: Response) => {
  res.json(matchService.getAll());
};

/**
 * Get match
 */
export const getMatch = (req: Request, res: Response) => {
  const matchId = req.params['matchId'];
  const match = matchService.get(matchId);

  if (!match) {
    return res.send(404);
  }

  res.json(match);
}