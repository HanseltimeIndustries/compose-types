[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Development

# Type Alias: Development\<CustomKeys\>

> **Development**\<`CustomKeys`\> = `object` & [`Development1`](Development1.md)\<`CustomKeys`\> & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

## Type declaration

### watch?

> `optional` **watch**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>[]

#### Type declaration

##### action

> **action**: `"rebuild"` \| `"sync"` \| `"restart"` \| `"sync+restart"` \| `"sync+exec"`

##### exec?

> `optional` **exec**: [`ServiceHook`](ServiceHook.md)\<`CustomKeys`\>

##### ignore?

> `optional` **ignore**: [`StringOrList`](StringOrList.md)

##### include?

> `optional` **include**: [`StringOrList`](StringOrList.md)

##### path

> **path**: `string`

##### target?

> `optional` **target**: `string`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
