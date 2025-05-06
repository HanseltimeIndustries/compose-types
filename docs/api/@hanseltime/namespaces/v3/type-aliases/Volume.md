[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Volume

# Type Alias: Volume\<CustomKeys\>

> **Volume**\<`CustomKeys`\> = `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & [`Volume1`](Volume1.md)\<`CustomKeys`\>

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Type declaration

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

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
