process.env.NODE_ENV = 'test';
import { Frame } from '@shared';
import app from '../app';
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const apiPath = '/api/bowling';

chai.use(chaiHttp);

describe('Bowling', () => {
    describe('GET /matches', () => {
        it('should should get no matches', (done) => {
            chai.request(app)
                .get(`${apiPath}/matches`)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);

                    done();
                });
        });
    });

    describe('POST /matches', () => {
        it('should should create a match', (done) => {
            chai.request(app)
                .post(`${apiPath}/matches`)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('frames');
                    res.body.frames.should.be.a('array');

                    done();
                });
        });
    });

    describe('POST /matches/:id/frame', () => {
        it('should should add a frame', (done) => {
            const frame: Frame = {
                first: 2,
                second: 4
            }

            chai.request(app)
                .post(`${apiPath}/matches/1/frame`)
                .send(frame)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('frames');

                    const { frames } = res.body;
                    frames.length.should.be.equal(1);
                    frames[0].first.should.equal(frame.first);
                    frames[0].second.should.equal(frame.second);

                    done();
                });
        });


        it('should should add a second frame', (done) => {
            const frame: Frame = {
                first: 5,
                second: 2
            }

            chai.request(app)
                .post(`${apiPath}/matches/1/frame`)
                .send(frame)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('frames');

                    const { frames } = res.body;
                    frames.length.should.be.equal(2);
                    frames[1].first.should.equal(frame.first);
                    frames[1].second.should.equal(frame.second);

                    done();
                });
        });

        it('should not be able to add to non-exsisting match', (done) => {
            const frame: Frame = {
                first: 5,
                second: 2
            }

            chai.request(app)
                .post(`${apiPath}/matches/7/frame`)
                .send(frame)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(404);

                    done();
                });
        });
    });

    describe('PUT /matches/:id/frame/:frameId', () => {
        it('should should update first frame', (done) => {
            const frame: Frame = {
                first: 1,
                second: 2
            }

            chai.request(app)
                .put(`${apiPath}/matches/1/frame/0`)
                .send(frame)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('frames');

                    const { frames } = res.body;
                    frames.length.should.be.equal(2);
                    frames[0].first.should.equal(frame.first);
                    frames[0].second.should.equal(frame.second);

                    done();
                });
        });

        it('should should not be able to update non-exsisting frame', (done) => {
            const frame: Frame = {
                first: 1,
                second: 2
            }

            chai.request(app)
                .put(`${apiPath}/matches/1/frame/7`)
                .send(frame)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(404);

                    done();
                });
        });
    });

    describe('GET /matches', () => {
        it('should get all matches', (done) => {
            chai.request(app)
                .get(`${apiPath}/matches`)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);

                    done();
                });
        });
    });

    describe('DELETE /matches/:id', () => {
        it('should delete match', (done) => {
            chai.request(app)
                .delete(`${apiPath}/matches/1`)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(204);

                    done();
                });
        });

        it('should not find deleted match', (done) => {
            chai.request(app)
                .get(`${apiPath}/matches/1`)
                .end((err, res: ChaiHttp.Response) => {
                    res.should.have.status(404);

                    done();
                });
        });
    });
});