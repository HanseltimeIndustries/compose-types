# Typescript definitions for docker compose

Simple package that exposes the v3 compose specification as transformed by 
[json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript).

Usage:

```typescript
import { v3 } from '@hanseltime/compose-types'

const spec: v3.ComposeSpecification = {
    services: [
        // your services, etc.
    ]
}
```

[Typedoc](./docs/api)



