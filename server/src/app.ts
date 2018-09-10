import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import bowlingRoute from './routes/bowling.route'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'test') {
    app.use(logger('combined'));
}

app.use(express.static('static'));

app.use('/api/bowling', bowlingRoute);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

export default app;