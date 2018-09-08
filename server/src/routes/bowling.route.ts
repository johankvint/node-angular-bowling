import * as express from 'express';
import * as handler from '../handlers/bowling.handlers';

const router = express.Router();

router.get('/matches', handler.getMatches);
router.post('/match', handler.createMatch);

router.get('/match/:matchId', handler.getMatch);
router.post('/match/:matchId/frame', handler.addFrame);
router.put('/match/:matchId/frame/:frameIndex', handler.updateFrame);
router.delete('/match/:matchId', handler.deleteMatch);

export default router;