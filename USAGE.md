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