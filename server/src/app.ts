import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import bowlingRoute from './routes/bowling.route'

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/bowling', bowlingRoute);

export default app;