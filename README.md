# tic-tac-toe-backend

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add tic-tac-toe-backend
```

### Yarn

```bash
yarn add tic-tac-toe-backend
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

async function run() {
    const sdk = new TicTacToeBackends();

    const res = await sdk.get();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [TicTacToeBackends SDK](docs/sdks/tictactoebackends/README.md)

* [get](docs/sdks/tictactoebackends/README.md#get) - Root endpoint.
* [getVersion](docs/sdks/tictactoebackends/README.md#getversion) - Root endpoint.
* [putGames](docs/sdks/tictactoebackends/README.md#putgames) - Games endpoint. Creates the next game state from the previous game state.
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

async function run() {
    const sdk = new TicTacToeBackends();

    let res;
    try {
        res = await sdk.get();
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost:5000/` | None |
| 1 | `https://localhost:5000/` | None |

#### Example

```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

async function run() {
    const sdk = new TicTacToeBackends({
        serverIdx: 1,
    });

    const res = await sdk.get();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

async function run() {
    const sdk = new TicTacToeBackends({
        serverURL: "http://localhost:5000/",
    });

    const res = await sdk.get();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { tic-tac-toe-backend } from "TicTacToeBackends";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new TicTacToeBackends({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
