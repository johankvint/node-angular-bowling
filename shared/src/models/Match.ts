import { Frame } from './Frame';

export interface Match {
    id: number,
    frames: Array<Frame>;
}

export type Matches = { [key:number]: Match }