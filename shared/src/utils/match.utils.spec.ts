import { expect } from 'chai';
import 'mocha';
import { Frame, FrameType } from '../models/Frame';
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
});