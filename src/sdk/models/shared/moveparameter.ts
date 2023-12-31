/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum MoveParameterMove {
    Human = "human",
    Random = "random",
    Minimax = "minimax",
}

export class MoveParameter extends SpeakeasyBase {
    @SpeakeasyMetadata()
    cellIndex?: number;

    @SpeakeasyMetadata()
    move?: MoveParameterMove;
}
