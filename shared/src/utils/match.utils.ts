import { Match } from '../models/Match';
import { FrameType, Frame } from '../models/Frame';

/**
 * Get the total score of the match
 */
export function getMatchScore(match: Match): number {
    return match.frames.reduce((total, frame) => total + frame.score, 0);
}

/**
 * Calculate and update score of each frame in match
 */
export function updateMatchFrameScores(match: Match) {
    for (let index = 0; index < match.frames.length; index++) {
        const currentFrame = getMatchFrame(match, index);
        const nextFrame = getMatchFrame(match, index + 1);

        currentFrame.score = calculateFrameScore(currentFrame, nextFrame, index);
    }
}

/**
 * Get frame at index, null if out of bounds
 */
export function getMatchFrame(match: Match, index: number): Frame {
    if (index > match.frames.length) { return null; }

    return match.frames[index];
}

/**
 * Calculate score of a frame
 * Use next frame as well if Spare or Strike
 */
export function calculateFrameScore(current: Frame, next: Frame, index: number): number {
    const frameType = getFrameType(current);
    const isLastFrame = index === 9;
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

/**
 * Helper to calculate additional score for Spare or Strike
 */
export function calculateAdditionalScore(frame: Frame, frameType: FrameType, isLastFrame: boolean): number {
    if (!frame) { return 0; }

    if (frameType === FrameType.Spare) {
        return isLastFrame ? normalizeScore(frame.third) : normalizeScore(frame.first);
    }
    else if (frameType === FrameType.Strike) {
        return isLastFrame
            ? (normalizeScore(frame.second) + normalizeScore(frame.third))
            : (normalizeScore(frame.first) + normalizeScore(frame.second));
    }
    else {
        return 0;
    }
}

/**
 * Get FrameType of frame based on pin count in frame
 */
export function getFrameType(frame: Frame): FrameType {
    if (frame.first == 9) { return FrameType.Strike }
    if ((frame.first + frame.second) == 9) { return FrameType.Spare }

    return FrameType.Open;
}

/**
 * Helper function to normalize score to a number
 */
function normalizeScore(score: number): number {
    return score ? score : 0;
}