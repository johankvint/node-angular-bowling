import * as express from 'express';
import * as controller from '../controllers/bowling.controller';

const router = express.Router();

router.get('/matches', controller.getMatches);
router.get('/match/:matchId', controller.getMatch);

export default router;