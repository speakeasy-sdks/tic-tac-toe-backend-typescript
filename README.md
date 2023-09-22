# tic-tac-toe-backend

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add tic-tac-toe-backend
```

### Yarn

```bash
yarn add tic-tac-toe-backend
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";
import { GetResponse } from "tic-tac-toe-backend/dist/sdk/models/operations";

const sdk = new TicTacToeBackends();

sdk.get().then((res: GetResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [TicTacToeBackends SDK](docs/sdks/tictactoebackends/README.md)

* [get](docs/sdks/tictactoebackends/README.md#get) - Root endpoint.
* [getVersion](docs/sdks/tictactoebackends/README.md#getversion) - Root endpoint.
* [putGames](docs/sdks/tictactoebackends/README.md#putgames) - Games endpoint. Creates the next game state from the previous game state.
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->



<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:


<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
