# TicTacToeBackends SDK

## Overview

Game Engine API for Tic Tac Toe: Game Engine API for Tic Tac Toe

### Available Operations

* [get](#get) - Root endpoint.
* [getVersion](#getversion) - Root endpoint.
* [putGames](#putgames) - Games endpoint. Creates the next game state from the previous game state.

## get

<br/>Returns the package name and version.<br/><br/>

### Example Usage

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";
import { GetResponse } from "tic-tac-toe-backend/dist/sdk/models/operations";

const sdk = new TicTacToeBackends();

sdk.ticTacToeBackends.get().then((res: GetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetResponse](../../models/operations/getresponse.md)>**


## getVersion

<br/>Returns the package name and version.<br/><br/>

### Example Usage

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";
import { GetVersionResponse } from "tic-tac-toe-backend/dist/sdk/models/operations";

const sdk = new TicTacToeBackends();

sdk.ticTacToeBackends.getVersion().then((res: GetVersionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVersionResponse](../../models/operations/getversionresponse.md)>**


## putGames

<br/>Accepts a GameState and Move.<br/><br/>Returns a Move including the before and after GameStates.<br/>

### Example Usage

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";
import { PutGamesResponse } from "tic-tac-toe-backend/dist/sdk/models/operations";
import { MoveParameterMove } from "tic-tac-toe-backend/dist/sdk/models/shared";

const sdk = new TicTacToeBackends();

sdk.ticTacToeBackends.putGames("corrupti".encode()).then((res: PutGamesResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models//.md)                              | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutGamesResponse](../../models/operations/putgamesresponse.md)>**

