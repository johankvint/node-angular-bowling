import { Frame } from './Frame';

export interface Match {
    id: string,
    frames: Array<Frame>;
}

export interface MatchListItem {
    id: string;
    score: number;
}

export type Matches = { [key:number]: Match }