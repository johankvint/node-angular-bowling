import { expect } from 'chai';
import 'mocha';
import { Frame, FrameType } from '../models/Frame';
import { Match } from '../models/Match';
import * as MatchUtils from './match.utils';

describe('MatchUtils', () => {

    describe('getFrameType', () => {
        it('should return FrameType.Open', () => {
            const frame: Frame = { first: 2, second: 4 };
            const result = MatchUtils.getFrameType(frame);

            expect(result).to.equal(FrameType.Open);
        });

        it('should return FrameType.Spare', () => {
            const frame: Frame = { first: 7, second: 2 };
            const result = MatchUtils.getFrameType(frame);

            expect(result).to.equal(FrameType.Spare);
        });

        it('should return FrameType.Strike', () => {
            const frame: Frame = { first: 9, second: 0 };
            const result = MatchUtils.getFrameType(frame);

            expect(result).to.equal(FrameType.Strike);
        });
    });

    describe('calculateAdditionalScore', () => {
        it('should return 0 for Open frame', () => {
            const frame: Frame = { first: 2, second: 4 };
            const type = FrameType.Open;
            const isLast = false;
            const result = MatchUtils.calculateAdditionalScore(frame, type, isLast);

            expect(result).to.equal(0);
        });

        it('should return only use first score for Spare', () => {
            const frame: Frame = { first: 7, second: 1, third: 4 };
            const type = FrameType.Spare;
            const isLast = false;
            const result = MatchUtils.calculateAdditionalScore(frame, type, isLast);

            expect(result).to.equal(7);
        });

        it('should return first and second score for Strike', () => {
            const frame: Frame = { first: 7, second: 1, third: 4 };
            const type = FrameType.Strike;
            const isLast = false;
            const result = MatchUtils.calculateAdditionalScore(frame, type, isLast);

            expect(result).to.equal(8);
        });

        it('should return only use thrid score for Spare in last frame', () => {
            const frame: Frame = { first: 7, second: 2, third: 6 };
            const type = FrameType.Spare;
            const isLast = true;
            const result = MatchUtils.calculateAdditionalScore(frame, type, isLast);

            expect(result).to.equal(6);
        });

        it('should return second and third score for Strike in last frame', () => {
            const frame: Frame = { first: 9, second: 1, third: 4 };
            const type = FrameType.Strike;
            const isLast = true;
            const result = MatchUtils.calculateAdditionalScore(frame, type, isLast);

            expect(result).to.equal(5);
        });
    });

    describe('calculateFrameScore', () => {
        it('should return correct score for Open', () => {
            const frame: Frame = { first: 3, second: 3 };
            const nextFrame = { first: 3, second: 6 };
            const index = 0;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(6);
        });

        it('should return correct for Spare frame', () => {
            const frame: Frame = { first: 3, second: 6 };
            const nextFrame = { first: 3, second: 6 };
            const index = 0;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(13);
        });

        it('should return correct for Strike frame', () => {
            const frame: Frame = { first: 9 };
            const nextFrame = { first: 3, second: 6 };
            const index = 0;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(19);
        });

        it('should return correct for last Spare frame', () => {
            const frame: Frame = { first: 3, second: 6, third: 4 };
            const nextFrame = null;
            const index = 9;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(14);
        });

        it('should return correct for last Strike frame', () => {
            const frame: Frame = { first: 9, second: 2, third: 5 };
            const nextFrame = null;
            const index = 9;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(17);
        });

        it('should return correct for 2 Strikes in a row', () => {
            const frame: Frame = { first: 9 };
            const nextFrame = { first: 9 };
            const index = 0;
            const result = MatchUtils.calculateFrameScore(frame, nextFrame, index);

            expect(result).to.equal(19);
        });
    });

    describe('getMatchFrame', () => {
        it('should return correct frame', () => {
            const frame1: Frame = { first: 9 };
            const frame2: Frame = { first: 9 };

            const match: Match = {
                id: 1,
                frames: [
                    frame1,
                    frame2
                ]
            }
            const result = MatchUtils.getMatchFrame(match, 0);

            expect(result).to.equal(frame1);
        });

        it('should return null for index out of bound', () => {
            const frame1: Frame = { first: 9 };
            const frame2: Frame = { first: 9 };

            const match: Match = {
                id: 1,
                frames: [
                    frame1,
                    frame2
                ]
            }
            const result = MatchUtils.getMatchFrame(match, 4);

            expect(result).to.null;
        });
    });

    describe('updateMatchFrameScores', () => {
        it('should update frame score correct', () => {
            const frame1: Frame = { first: 9 };
            const frame2: Frame = { first: 9 };
            const frame3: Frame = { first: 2, second: 4 };

            const match: Match = {
                id: 1,
                frames: [
                    frame1,
                    frame2,
                    frame3
                ]
            }

            MatchUtils.updateMatchFrameScores(match);

            expect(frame1.score).to.equal(19);
            expect(frame2.score).to.equal(16);
            expect(frame3.score).to.equal(6);
        });
    });

    describe('getMatchScore', () => {
        it('should sum match score correct', () => {
            const frame1: Frame = { first: 9 }; // 19
            const frame2: Frame = { first: 9 }; // 16
            const frame3: Frame = { first: 2, second: 4 }; // 6
            const frame4: Frame = { first: 2, second: 4 }; // 6
            const frame5: Frame = { first: 2, second: 4 }; // 6
            const frame6: Frame = { first: 2, second: 4 }; // 6
            const frame7: Frame = { first: 2, second: 4 }; // 6
            const frame8: Frame = { first: 2, second: 4 }; // 6
            const frame9: Frame = { first: 2, second: 4 }; // 6
            const frame10: Frame = { first: 2, second: 7, third: 5 }; // 15

            const match: Match = {
                id: 1,
                frames: [
                    frame1,
                    frame2,
                    frame3,
                    frame4,
                    frame5,
                    frame6,
                    frame7,
                    frame8,
                    frame9,
                    frame10
                ]
            }

            MatchUtils.updateMatchFrameScores(match);

            const result = MatchUtils.getMatchScore(match);

            expect(result).to.equal(92);
        });
    });

});