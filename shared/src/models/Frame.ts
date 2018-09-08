export interface Frame {
    first: number;
    second?: number;
    third?: number;
    score?: number;
}

export enum FrameType {
    Open,
    Strike,
    Spare
}