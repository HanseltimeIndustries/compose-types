[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / ComposeSpecification

# Type Alias: ComposeSpecification\<CustomKeys\>

> **ComposeSpecification**\<`CustomKeys`\> = [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

The Compose file is a YAML file defining a multi-containers based application.

## Type declaration

### configs?

> `optional` **configs**: `object`

Configurations for services in the project

#### Index Signature

\[`k`: `string`\]: [`Config`](Config.md)\<`CustomKeys`\>

### include?

> `optional` **include**: [`Include`](Include.md)[]

compose sub-projects to be included.

### name?

> `optional` **name**: `string`

define the Compose project name, until user defines one explicitly.

### networks?

> `optional` **networks**: `object`

Networks that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

### secrets?

> `optional` **secrets**: `object`

Secrets that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: [`Secret`](Secret.md)\<`CustomKeys`\>

### services?

> `optional` **services**: `object`

The services in your project

#### Index Signature

\[`k`: `string`\]: [`Service`](Service.md)\<`CustomKeys`\>

### version?

> `optional` **version**: `string`

declared for backward compatibility, ignored.

### volumes?

> `optional` **volumes**: `object`

Named volumes that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
