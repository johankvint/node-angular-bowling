import { Match } from '../models/Match';
import { FrameType, Frame } from '../models/Frame';

export function getMatchScore(match: Match): number {
    return match.frames.reduce((total, frame) => total + frame.score, 0);
}

export function updateMatchFrameScores(match: Match) {
    for (let index = 0; index < match.frames.length; index++) {
        const currentFrame = getMatchFrame(match, index);
        const nextFrame = getMatchFrame(match, index + 1);

        currentFrame.score = calculateFrameScore(currentFrame, nextFrame, index);
    }
}

export function getMatchFrame(match: Match, index: number): Frame {
    if (index > match.frames.length) { return null; }

    return match.frames[index];
}

export function calculateFrameScore(current: Frame, next: Frame, index: number): number {
    const frameType = getFrameType(current);
    const isLastFrame = index === 10;
    const additionalFrame = isLastFrame ? current : next;

    switch (frameType) {
        case FrameType.Open:
            return current.first + current.second;
        case FrameType.Spare:
        case FrameType.Strike:
            return 10 + calculateAdditionalScore(additionalFrame, frameType, isLastFrame);
        default:
            return 0;
    }
}

export function calculateAdditionalScore(frame: Frame, frameType: FrameType, isLastFrame: boolean): number {
    if (!frame) { return 0; }

    if (frameType === FrameType.Spare) {
        return isLastFrame ? frame.third : frame.first;
    }
    else if (frameType === FrameType.Strike) {
        return isLastFrame ? (frame.second + frame.third) : (frame.first + frame.second);
    }
    else {
        return 0;
    }
}

export function getFrameType(frame: Frame): FrameType {
    if (frame.first == 9) { return FrameType.Strike }
    if ((frame.first + frame.second) == 9) { return FrameType.Spare }

    return FrameType.Open;
}