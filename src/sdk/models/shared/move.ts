/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum CurrentMark {
    X = "X",
    O = "O",
}

export class Grid extends SpeakeasyBase {
    @SpeakeasyMetadata()
    cells?: string;
}

export class MoveGrid extends SpeakeasyBase {
    @SpeakeasyMetadata()
    cells?: string;
}

export enum MoveSchemasStartingMark {
    X = "X",
    O = "O",
}

export class MoveAfterState extends SpeakeasyBase {
    @SpeakeasyMetadata()
    grid?: MoveGrid;

    @SpeakeasyMetadata()
    startingMark?: MoveSchemasStartingMark;
}

export class MoveSchemasGrid extends SpeakeasyBase {
    @SpeakeasyMetadata()
    cells?: string;
}

export enum MoveStartingMark {
    X = "X",
    O = "O",
}

export class BeforeState extends SpeakeasyBase {
    @SpeakeasyMetadata()
    grid?: MoveSchemasGrid;

    @SpeakeasyMetadata()
    startingMark?: MoveStartingMark;
}

export enum Mark {
    X = "X",
    O = "O",
}

export class PossibleMoves extends SpeakeasyBase {
    @SpeakeasyMetadata()
    afterState?: MoveAfterState;

    @SpeakeasyMetadata()
    beforeState?: BeforeState;

    @SpeakeasyMetadata()
    cellIndex?: number;

    @SpeakeasyMetadata()
    mark?: Mark;
}

export enum StartingMark {
    X = "X",
    O = "O",
}

export enum Winner {
    X = "X",
    O = "O",
}

export class AfterState extends SpeakeasyBase {
    @SpeakeasyMetadata()
    currentMark?: CurrentMark;

    @SpeakeasyMetadata()
    gameNotStarted?: boolean;

    @SpeakeasyMetadata()
    gameOver?: boolean;

    @SpeakeasyMetadata()
    grid?: Grid;

    @SpeakeasyMetadata({ elemType: PossibleMoves })
    possibleMoves?: PossibleMoves[];

    @SpeakeasyMetadata()
    startingMark?: StartingMark;

    @SpeakeasyMetadata()
    tie?: boolean;

    @SpeakeasyMetadata()
    winner?: Winner;

    @SpeakeasyMetadata()
    winningCells?: number[];
}

export class Move extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AfterState })
    afterState?: AfterState[];
}
