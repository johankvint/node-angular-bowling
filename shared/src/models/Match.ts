import { Frame } from './Frame';

export interface Match {
    id: number,
    frames: Array<Frame>;
    score: number;
}

export type Matches = { [key:number]: Match }