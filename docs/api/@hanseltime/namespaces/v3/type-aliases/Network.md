[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Network

# Type Alias: Network

> **Network** = `object` & [`Network1`](Network1.md)

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Type declaration

### attachable?

> `optional` **attachable**: `boolean` \| `string`

### driver?

> `optional` **driver**: `string`

The driver used for this network

### driver\_opts?

> `optional` **driver\_opts**: `object`

#### Index Signature

\[`k`: `string`\]: `string` \| `number`

### enable\_ipv4?

> `optional` **enable\_ipv4**: `boolean` \| `string`

### enable\_ipv6?

> `optional` **enable\_ipv6**: `boolean` \| `string`

### external?

> `optional` **external**: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Type declaration

`boolean`

`string`

\{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Index Signature

\[`k`: `string`\]: `unknown`

### internal?

> `optional` **internal**: `boolean` \| `string`

### ipam?

> `optional` **ipam**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### ipam.config?

> `optional` **config**: `object`[]

##### Index Signature

\[`k`: `string`\]: `unknown`

#### ipam.driver?

> `optional` **driver**: `string`

#### ipam.options?

> `optional` **options**: `object`

##### Index Signature

\[`k`: `string`\]: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### name?

> `optional` **name**: `string`
