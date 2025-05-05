[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Deployment

# Type Alias: Deployment

> **Deployment** = `object` & [`Deployment1`](Deployment1.md)

## Type declaration

### endpoint\_mode?

> `optional` **endpoint\_mode**: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### mode?

> `optional` **mode**: `string`

### placement?

> `optional` **placement**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### placement.constraints?

> `optional` **constraints**: `string`[]

#### placement.max\_replicas\_per\_node?

> `optional` **max\_replicas\_per\_node**: `number` \| `string`

#### placement.preferences?

> `optional` **preferences**: `object`[]

##### Index Signature

\[`k`: `string`\]: `unknown`

### replicas?

> `optional` **replicas**: `number` \| `string`

### resources?

> `optional` **resources**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### resources.limits?

> `optional` **limits**: `object`

##### Index Signature

\[`k`: `string`\]: `unknown`

#### resources.limits.cpus?

> `optional` **cpus**: `number` \| `string`

#### resources.limits.memory?

> `optional` **memory**: `string`

#### resources.limits.pids?

> `optional` **pids**: `number` \| `string`

#### resources.reservations?

> `optional` **reservations**: `object`

##### Index Signature

\[`k`: `string`\]: `unknown`

#### resources.reservations.cpus?

> `optional` **cpus**: `number` \| `string`

#### resources.reservations.devices?

> `optional` **devices**: [`Devices`](Devices.md)

#### resources.reservations.generic\_resources?

> `optional` **generic\_resources**: [`GenericResources`](GenericResources.md)

#### resources.reservations.memory?

> `optional` **memory**: `string`

### restart\_policy?

> `optional` **restart\_policy**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### restart\_policy.condition?

> `optional` **condition**: `string`

#### restart\_policy.delay?

> `optional` **delay**: `string`

#### restart\_policy.max\_attempts?

> `optional` **max\_attempts**: `number` \| `string`

#### restart\_policy.window?

> `optional` **window**: `string`

### rollback\_config?

> `optional` **rollback\_config**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### rollback\_config.delay?

> `optional` **delay**: `string`

#### rollback\_config.failure\_action?

> `optional` **failure\_action**: `string`

#### rollback\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `number` \| `string`

#### rollback\_config.monitor?

> `optional` **monitor**: `string`

#### rollback\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

#### rollback\_config.parallelism?

> `optional` **parallelism**: `number` \| `string`

### update\_config?

> `optional` **update\_config**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### update\_config.delay?

> `optional` **delay**: `string`

#### update\_config.failure\_action?

> `optional` **failure\_action**: `string`

#### update\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `number` \| `string`

#### update\_config.monitor?

> `optional` **monitor**: `string`

#### update\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

#### update\_config.parallelism?

> `optional` **parallelism**: `number` \| `string`
