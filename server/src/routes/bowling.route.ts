import * as express from 'express';
import * as handler from '../handlers/bowling.handlers';

const router = express.Router();

router.get('/matches', handler.getMatches);
router.post('/matches', handler.createMatch);

router.get('/matches/:matchId', handler.getMatch);
router.post('/matches/:matchId/frame', handler.addFrame);
router.put('/matches/:matchId/frame/:frameIndex', handler.updateFrame);
router.delete('/matches/:matchId', handler.deleteMatch);

export default router;