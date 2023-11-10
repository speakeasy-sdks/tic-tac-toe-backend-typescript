<!-- Start SDK Example Usage -->
```typescript
import { TicTacToeBackends } from "tic-tac-toe-backend";

(async () => {
    const sdk = new TicTacToeBackends();

    const res = await sdk.get();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->