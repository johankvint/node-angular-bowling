import { Matches, Match } from '@shared';

let matchCounter = 0;
const matches: Matches = {};

/**
 * Get all matches
 */
export const getAll = () => {
    return Object.keys(matches)
        .map(key => matches[key]);
}

/**
 * Create new match
 */
export const create = () => {
    const id = matchCounter++;

    const match: Match  = {
        id,
        frames: [],
        score: 0
    };

    matches[id] = match;

    return match;
}

/**
 * Get match
 */
export const get = (id) => {

    return matches[id];
}