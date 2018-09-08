import { Request, Response, RequestHandler } from 'express';
import { Frame } from '@shared';
import * as repository from '../repository/match.repository';

/**
 * Get all matches
 */
export const getMatches: RequestHandler = (req: Request, res: Response) => {
  res.json(repository.getAll());
};

/**
 * Get match
 */
export const getMatch: RequestHandler = (req: Request, res: Response) => {
  const matchId = req.params.matchId;
  const match = repository.get(matchId);

  if (!match) {
    return res.sendStatus(404);
  }

  res.json(match);
}

/**
 * Create new match
 */
export const createMatch: RequestHandler = (req: Request, res: Response) => {
  const match = repository.create();

  res.status(201).json(match);
}

/**
 * Add new frame to match
 */
export const addFrame: RequestHandler = (req: Request, res: Response) => {
  const matchId = req.params.matchId;
  const frame = req.body as Frame;

  try {
    const match = repository.addFrame(matchId, frame);
    res.status(201).json(match);
  } catch (error) {
    res.sendStatus(404);
  }
}

/**
 * Update frame in match
 */
export const updateFrame: RequestHandler = (req: Request, res: Response) => {
  const matchId = req.params.matchId;
  const frameIndex = req.params.frameIndex;
  const frame = req.body as Frame;

  try {
    const match = repository.updateFrame(matchId, frameIndex, frame);
    res.json(match);
  } catch (error) {
    res.sendStatus(404);
  }
}

/**
 * Delete match
 */
export const deleteMatch: RequestHandler = (req: Request, res: Response) => {
  const matchId = req.params.matchId;
  repository.deleteMatch(matchId);

  res.sendStatus(204);
}