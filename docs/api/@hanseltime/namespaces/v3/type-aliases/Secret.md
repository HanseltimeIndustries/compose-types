[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Secret

# Type Alias: Secret\<CustomKeys\>

> **Secret**\<`CustomKeys`\> = [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Type declaration

### driver?

> `optional` **driver**: `string`

### driver\_opts?

> `optional` **driver\_opts**: `object`

#### Index Signature

\[`k`: `string`\]: `string` \| `number`

### environment?

> `optional` **environment**: `string`

### external?

> `optional` **external**: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}

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
