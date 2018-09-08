import { Matches, Match, Frame, MathUtils } from '@shared';

let matchCounter = 1;
let matches: Matches = {};

/**
 * Get all matches
 */
export function getAll(): Array<Match> {
    return Object.keys(matches)
        .map(key => matches[key]);
}

/**
 * Create new match
 */
export function create() {
    const id = matchCounter++;

    const match: Match  = {
        id,
        frames: []
    };

    matches[id] = match;

    return match;
}

/**
 * Get match from id
 */
export function get(id: number): Match {
    return matches[id];
}

/**
 * Add frame to match and recalculate score for all frames
 */
export function addFrame(matchId: number, frame: Frame): Match {
    const match = get(matchId);

    if (!match) { throw new Error("Match not found"); }

    // create a copy of the frame and add
    match.frames.push({...frame});

    MathUtils.updateMatchFrameScores(match);

    return match;
}

/**
 * Update frame in Match and recalculate score for all frames
 */

export function updateFrame(matchId: number, frameIndex: number, frame: Frame): Match {
    const match = get(matchId);

    if (!match) { throw new Error("Match not found"); }

    const existingFrame = MathUtils.getMatchFrame(match, frameIndex);

    if (!existingFrame) { throw new Error("Frame not found"); }

    // Update frame
    match.frames[frameIndex] = {...frame};

    MathUtils.updateMatchFrameScores(match);

    return match;
}

/**
 * Delete match
 */
 export function deleteMatch(id: number) {
     delete matches[id];
 }