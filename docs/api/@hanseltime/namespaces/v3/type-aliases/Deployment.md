[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Deployment

# Type Alias: Deployment\<CustomKeys\>

> **Deployment**\<`CustomKeys`\> = `object` & [`Deployment1`](Deployment1.md)\<`CustomKeys`\> & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

## Type declaration

### endpoint\_mode?

> `optional` **endpoint\_mode**: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### mode?

> `optional` **mode**: `string`

### placement?

> `optional` **placement**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### constraints?

> `optional` **constraints**: `string`[]

##### max\_replicas\_per\_node?

> `optional` **max\_replicas\_per\_node**: `number` \| `string`

##### preferences?

> `optional` **preferences**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>[]

### replicas?

> `optional` **replicas**: `number` \| `string`

### resources?

> `optional` **resources**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### limits?

> `optional` **limits**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

###### Type declaration

###### cpus?

> `optional` **cpus**: `number` \| `string`

###### memory?

> `optional` **memory**: `string`

###### pids?

> `optional` **pids**: `number` \| `string`

##### reservations?

> `optional` **reservations**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

###### Type declaration

###### cpus?

> `optional` **cpus**: `number` \| `string`

###### devices?

> `optional` **devices**: [`Devices`](Devices.md)\<`CustomKeys`\>

###### generic\_resources?

> `optional` **generic\_resources**: [`GenericResources`](GenericResources.md)\<`CustomKeys`\>

###### memory?

> `optional` **memory**: `string`

### restart\_policy?

> `optional` **restart\_policy**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### condition?

> `optional` **condition**: `string`

##### delay?

> `optional` **delay**: `string`

##### max\_attempts?

> `optional` **max\_attempts**: `number` \| `string`

##### window?

> `optional` **window**: `string`

### rollback\_config?

> `optional` **rollback\_config**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### delay?

> `optional` **delay**: `string`

##### failure\_action?

> `optional` **failure\_action**: `string`

##### max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `number` \| `string`

##### monitor?

> `optional` **monitor**: `string`

##### order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

##### parallelism?

> `optional` **parallelism**: `number` \| `string`

### update\_config?

> `optional` **update\_config**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### delay?

> `optional` **delay**: `string`

##### failure\_action?

> `optional` **failure\_action**: `string`

##### max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `number` \| `string`

##### monitor?

> `optional` **monitor**: `string`

##### order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

##### parallelism?

> `optional` **parallelism**: `number` \| `string`

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
