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

(async() => {
  const sdk = new TicTacToeBackends();

  const res = await sdk.get();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetResponse](../../sdk/models/operations/getresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getVersion

<br/>Returns the package name and version.<br/><br/>

### Example Usage

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

(async() => {
  const sdk = new TicTacToeBackends();

  const res = await sdk.getVersion();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetVersionResponse](../../sdk/models/operations/getversionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## putGames

<br/>Accepts a GameState and Move.<br/><br/>Returns a Move including the before and after GameStates.<br/>

### Example Usage

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";
import { MoveParameterMove } from "tic-tac-toe-backend/dist/sdk/models/shared";

(async() => {
  const sdk = new TicTacToeBackends();

  const res = await sdk.putGames(new TextEncoder().encode("0x8BCDbF9B8f"));

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [Uint8Array](../../models/.md)                               | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutGamesResponse](../../sdk/models/operations/putgamesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
