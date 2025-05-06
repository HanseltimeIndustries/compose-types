[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Config

# Type Alias: Config\<CustomKeys\>

> **Config**\<`CustomKeys`\> = [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Type declaration

### content?

> `optional` **content**: `string`

### environment?

> `optional` **environment**: `string`

### external?

> `optional` **external**: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Type declaration

`boolean`

`string`

\{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Index Signature

\[`k`: `string`\]: `unknown`

### file?

> `optional` **file**: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### name?

> `optional` **name**: `string`

### template\_driver?

> `optional` **template\_driver**: `string`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
