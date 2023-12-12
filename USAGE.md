<!-- Start SDK Example Usage [usage] -->
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