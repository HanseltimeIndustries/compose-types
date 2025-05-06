[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Healthcheck

# Type Alias: Healthcheck\<CustomKeys\>

> **Healthcheck**\<`CustomKeys`\> = [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

A command for checking if the container is healthy

## Type declaration

### disable?

> `optional` **disable**: `boolean` \| `string`

### interval?

> `optional` **interval**: `string`

### retries?

> `optional` **retries**: `number` \| `string`

### start\_interval?

> `optional` **start\_interval**: `string`

### start\_period?

> `optional` **start\_period**: `string`

### test?

> `optional` **test**: `string` \| `string`[]

### timeout?

> `optional` **timeout**: `string`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
