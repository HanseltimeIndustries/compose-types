[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / XPrefixedKeys

# Type Alias: XPrefixedKeys\<T\>

> **XPrefixedKeys**\<`T`\> = `` { [K in T as `x-${string & K}`]?: any } ``

Docker compose allows x- prefixed keys

## Type Parameters

### T

`T` *extends* `string` = `never`
