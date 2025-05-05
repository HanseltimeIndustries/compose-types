[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / ComposeSpecification

# Interface: ComposeSpecification

The Compose file is a YAML file defining a multi-containers based application.

## Indexable

\[`k`: `string`\]: `unknown`

## Properties

### configs?

> `optional` **configs**: `object`

Configurations for services in the project

#### Index Signature

\[`k`: `string`\]: [`Config`](Config.md)

***

### include?

> `optional` **include**: [`Include`](../type-aliases/Include.md)[]

compose sub-projects to be included.

***

### name?

> `optional` **name**: `string`

define the Compose project name, until user defines one explicitly.

***

### networks?

> `optional` **networks**: `object`

Networks that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: `object` & `object`

***

### secrets?

> `optional` **secrets**: `object`

Secrets that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: [`Secret`](Secret.md)

***

### services?

> `optional` **services**: `object`

The services in your project

#### Index Signature

\[`k`: `string`\]: [`Service`](Service.md)

***

### version?

> `optional` **version**: `string`

declared for backward compatibility, ignored.

***

### volumes?

> `optional` **volumes**: `object`

Named volumes that are shared among multiple services

#### Index Signature

\[`k`: `string`\]: `object` & `object`
