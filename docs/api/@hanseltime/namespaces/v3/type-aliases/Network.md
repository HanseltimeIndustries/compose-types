[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Network

# Type Alias: Network\<CustomKeys\>

> **Network**\<`CustomKeys`\> = `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & [`Network1`](Network1.md)\<`CustomKeys`\>

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

> `optional` **external**: `boolean` \| `string` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

### internal?

> `optional` **internal**: `boolean` \| `string`

### ipam?

> `optional` **ipam**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### config?

> `optional` **config**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>[]

##### driver?

> `optional` **driver**: `string`

##### options?

> `optional` **options**: `object`

###### Index Signature

\[`k`: `string`\]: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### name?

> `optional` **name**: `string`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
