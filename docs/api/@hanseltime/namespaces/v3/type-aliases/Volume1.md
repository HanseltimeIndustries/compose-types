[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Volume1

# Type Alias: Volume1

> **Volume1** = \{ `[k: string]`: `unknown`;  `driver`: `string`; `driver_opts`: \{\}; `external`: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}; `labels`: [`ListOrDict`](ListOrDict.md); `name`: `string`; \} \| `null`

## Type declaration

\{ `[k: string]`: `unknown`;  `driver`: `string`; `driver_opts`: \{\}; `external`: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}; `labels`: [`ListOrDict`](ListOrDict.md); `name`: `string`; \}

## Index Signature

\[`k`: `string`\]: `unknown`

### driver?

> `optional` **driver**: `string`

The driver used for this volume

### driver\_opts?

> `optional` **driver\_opts**: `object`

#### Index Signature

\[`k`: `string`\]: `string` \| `number`

### external?

> `optional` **external**: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Type declaration

`boolean`

`string`

\{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Index Signature

\[`k`: `string`\]: `unknown`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### name?

> `optional` **name**: `string`

`null`
