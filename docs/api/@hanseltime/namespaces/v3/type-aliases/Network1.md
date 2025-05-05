[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Network1

# Type Alias: Network1

> **Network1** = \{ `[k: string]`: `unknown`;  `attachable`: `boolean` \| `string`; `driver`: `string`; `driver_opts`: \{\}; `enable_ipv4`: `boolean` \| `string`; `enable_ipv6`: `boolean` \| `string`; `external`: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}; `internal`: `boolean` \| `string`; `ipam`: \{ `[k: string]`: `unknown`;  `config`: `object`[]; `driver`: `string`; `options`: \{\}; \}; `labels`: [`ListOrDict`](ListOrDict.md); `name`: `string`; \} \| `null`

## Type declaration

\{ `[k: string]`: `unknown`;  `attachable`: `boolean` \| `string`; `driver`: `string`; `driver_opts`: \{\}; `enable_ipv4`: `boolean` \| `string`; `enable_ipv6`: `boolean` \| `string`; `external`: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}; `internal`: `boolean` \| `string`; `ipam`: \{ `[k: string]`: `unknown`;  `config`: `object`[]; `driver`: `string`; `options`: \{\}; \}; `labels`: [`ListOrDict`](ListOrDict.md); `name`: `string`; \}

## Index Signature

\[`k`: `string`\]: `unknown`

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

> `optional` **external**: `boolean` \| `string` \| \{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Type declaration

`boolean`

`string`

\{ `[k: string]`: `unknown`;  `name`: `string`; \}

#### Index Signature

\[`k`: `string`\]: `unknown`

### internal?

> `optional` **internal**: `boolean` \| `string`

### ipam?

> `optional` **ipam**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### ipam.config?

> `optional` **config**: `object`[]

##### Index Signature

\[`k`: `string`\]: `unknown`

#### ipam.driver?

> `optional` **driver**: `string`

#### ipam.options?

> `optional` **options**: `object`

##### Index Signature

\[`k`: `string`\]: `string`

### labels?

> `optional` **labels**: [`ListOrDict`](ListOrDict.md)

### name?

> `optional` **name**: `string`

`null`
