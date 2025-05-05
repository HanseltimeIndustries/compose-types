[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Service

# Interface: Service

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Indexable

\[`k`: `string`\]: `unknown`

## Properties

### annotations?

> `optional` **annotations**: [`ListOrDict`](../type-aliases/ListOrDict.md)

***

### attach?

> `optional` **attach**: `string` \| `boolean`

***

### blkio\_config?

> `optional` **blkio\_config**: `object`

#### device\_read\_bps?

> `optional` **device\_read\_bps**: [`BlkioLimit`](BlkioLimit.md)[]

#### device\_read\_iops?

> `optional` **device\_read\_iops**: [`BlkioLimit`](BlkioLimit.md)[]

#### device\_write\_bps?

> `optional` **device\_write\_bps**: [`BlkioLimit`](BlkioLimit.md)[]

#### device\_write\_iops?

> `optional` **device\_write\_iops**: [`BlkioLimit`](BlkioLimit.md)[]

#### weight?

> `optional` **weight**: `string` \| `number`

#### weight\_device?

> `optional` **weight\_device**: [`BlkioWeight`](BlkioWeight.md)[]

***

### build?

> `optional` **build**: `string` \| \{ `[k: string]`: `unknown`;  `additional_contexts`: [`ListOrDict`](../type-aliases/ListOrDict.md); `args`: `string`[] \| \{\}; `cache_from`: `string`[]; `cache_to`: `string`[]; `context`: `string`; `dockerfile`: `string`; `dockerfile_inline`: `string`; `entitlements`: `string`[]; `extra_hosts`: [`ExtraHosts`](../type-aliases/ExtraHosts.md); `isolation`: `string`; `labels`: [`ListOrDict`](../type-aliases/ListOrDict.md); `network`: `string`; `no_cache`: `string` \| `boolean`; `platforms`: `string`[]; `privileged`: `string` \| `boolean`; `pull`: `string` \| `boolean`; `secrets`: [`ServiceConfigOrSecret`](../type-aliases/ServiceConfigOrSecret.md); `shm_size`: `string` \| `number`; `ssh`: [`ListOrDict`](../type-aliases/ListOrDict.md); `tags`: `string`[]; `target`: `string`; `ulimits`: [`Ulimits`](Ulimits.md); \}

#### Type declaration

`string`

\{ `[k: string]`: `unknown`;  `additional_contexts`: [`ListOrDict`](../type-aliases/ListOrDict.md); `args`: `string`[] \| \{\}; `cache_from`: `string`[]; `cache_to`: `string`[]; `context`: `string`; `dockerfile`: `string`; `dockerfile_inline`: `string`; `entitlements`: `string`[]; `extra_hosts`: [`ExtraHosts`](../type-aliases/ExtraHosts.md); `isolation`: `string`; `labels`: [`ListOrDict`](../type-aliases/ListOrDict.md); `network`: `string`; `no_cache`: `string` \| `boolean`; `platforms`: `string`[]; `privileged`: `string` \| `boolean`; `pull`: `string` \| `boolean`; `secrets`: [`ServiceConfigOrSecret`](../type-aliases/ServiceConfigOrSecret.md); `shm_size`: `string` \| `number`; `ssh`: [`ListOrDict`](../type-aliases/ListOrDict.md); `tags`: `string`[]; `target`: `string`; `ulimits`: [`Ulimits`](Ulimits.md); \}

#### Index Signature

\[`k`: `string`\]: `unknown`

#### additional\_contexts?

> `optional` **additional\_contexts**: [`ListOrDict`](../type-aliases/ListOrDict.md)

#### args?

> `optional` **args**: `string`[] \| \{\}

Arguments used during the image build process

##### Type declaration

`string`[]

\{\}

##### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number` \| `boolean`

#### cache\_from?

> `optional` **cache\_from**: `string`[]

#### cache\_to?

> `optional` **cache\_to**: `string`[]

#### context?

> `optional` **context**: `string`

The context used for building the image

#### dockerfile?

> `optional` **dockerfile**: `string`

The Dockerfile used for building the image

#### dockerfile\_inline?

> `optional` **dockerfile\_inline**: `string`

#### entitlements?

> `optional` **entitlements**: `string`[]

#### extra\_hosts?

> `optional` **extra\_hosts**: [`ExtraHosts`](../type-aliases/ExtraHosts.md)

#### isolation?

> `optional` **isolation**: `string`

#### labels?

> `optional` **labels**: [`ListOrDict`](../type-aliases/ListOrDict.md)

#### network?

> `optional` **network**: `string`

#### no\_cache?

> `optional` **no\_cache**: `string` \| `boolean`

#### platforms?

> `optional` **platforms**: `string`[]

#### privileged?

> `optional` **privileged**: `string` \| `boolean`

#### pull?

> `optional` **pull**: `string` \| `boolean`

#### secrets?

> `optional` **secrets**: [`ServiceConfigOrSecret`](../type-aliases/ServiceConfigOrSecret.md)

#### shm\_size?

> `optional` **shm\_size**: `string` \| `number`

#### ssh?

> `optional` **ssh**: [`ListOrDict`](../type-aliases/ListOrDict.md)

#### tags?

> `optional` **tags**: `string`[]

#### target?

> `optional` **target**: `string`

#### ulimits?

> `optional` **ulimits**: [`Ulimits`](Ulimits.md)

***

### cap\_add?

> `optional` **cap\_add**: `string`[]

***

### cap\_drop?

> `optional` **cap\_drop**: `string`[]

***

### cgroup?

> `optional` **cgroup**: `"host"` \| `"private"`

***

### cgroup\_parent?

> `optional` **cgroup\_parent**: `string`

***

### command?

> `optional` **command**: `null` \| `string` \| `string`[]

The command that will be run in the container

***

### configs?

> `optional` **configs**: [`ServiceConfigOrSecret`](../type-aliases/ServiceConfigOrSecret.md)

***

### container\_name?

> `optional` **container\_name**: `string`

The name that will be given to the container

***

### cpu\_count?

> `optional` **cpu\_count**: `string` \| `number`

***

### cpu\_percent?

> `optional` **cpu\_percent**: `string` \| `number`

***

### cpu\_period?

> `optional` **cpu\_period**: `string` \| `number`

***

### cpu\_quota?

> `optional` **cpu\_quota**: `string` \| `number`

***

### cpu\_rt\_period?

> `optional` **cpu\_rt\_period**: `string` \| `number`

***

### cpu\_rt\_runtime?

> `optional` **cpu\_rt\_runtime**: `string` \| `number`

***

### cpu\_shares?

> `optional` **cpu\_shares**: `string` \| `number`

***

### cpus?

> `optional` **cpus**: `string` \| `number`

***

### cpuset?

> `optional` **cpuset**: `string`

***

### credential\_spec?

> `optional` **credential\_spec**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### config?

> `optional` **config**: `string`

#### file?

> `optional` **file**: `string`

#### registry?

> `optional` **registry**: `string`

***

### depends\_on?

> `optional` **depends\_on**: [`ListOfStrings`](../type-aliases/ListOfStrings.md) \| \{\}

Other services that this service depends on, which will be started before this one

#### Type declaration

[`ListOfStrings`](../type-aliases/ListOfStrings.md)

\{\}

#### Index Signature

\[`k`: `string`\]: `object`

***

### deploy?

> `optional` **deploy**: `object` & `object`

#### Type declaration

##### endpoint\_mode?

> `optional` **endpoint\_mode**: `string`

##### labels?

> `optional` **labels**: [`ListOrDict`](../type-aliases/ListOrDict.md)

##### mode?

> `optional` **mode**: `string`

##### placement?

> `optional` **placement**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### placement.constraints?

> `optional` **constraints**: `string`[]

###### placement.max\_replicas\_per\_node?

> `optional` **max\_replicas\_per\_node**: `string` \| `number`

###### placement.preferences?

> `optional` **preferences**: `object`[]

###### Index Signature

\[`k`: `string`\]: `unknown`

##### replicas?

> `optional` **replicas**: `string` \| `number`

##### resources?

> `optional` **resources**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.limits?

> `optional` **limits**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.limits.cpus?

> `optional` **cpus**: `string` \| `number`

###### resources.limits.memory?

> `optional` **memory**: `string`

###### resources.limits.pids?

> `optional` **pids**: `string` \| `number`

###### resources.reservations?

> `optional` **reservations**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.reservations.cpus?

> `optional` **cpus**: `string` \| `number`

###### resources.reservations.devices?

> `optional` **devices**: [`Devices`](../type-aliases/Devices.md)

###### resources.reservations.generic\_resources?

> `optional` **generic\_resources**: [`GenericResources`](../type-aliases/GenericResources.md)

###### resources.reservations.memory?

> `optional` **memory**: `string`

##### restart\_policy?

> `optional` **restart\_policy**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### restart\_policy.condition?

> `optional` **condition**: `string`

###### restart\_policy.delay?

> `optional` **delay**: `string`

###### restart\_policy.max\_attempts?

> `optional` **max\_attempts**: `string` \| `number`

###### restart\_policy.window?

> `optional` **window**: `string`

##### rollback\_config?

> `optional` **rollback\_config**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### rollback\_config.delay?

> `optional` **delay**: `string`

###### rollback\_config.failure\_action?

> `optional` **failure\_action**: `string`

###### rollback\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `string` \| `number`

###### rollback\_config.monitor?

> `optional` **monitor**: `string`

###### rollback\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

###### rollback\_config.parallelism?

> `optional` **parallelism**: `string` \| `number`

##### update\_config?

> `optional` **update\_config**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### update\_config.delay?

> `optional` **delay**: `string`

###### update\_config.failure\_action?

> `optional` **failure\_action**: `string`

###### update\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `string` \| `number`

###### update\_config.monitor?

> `optional` **monitor**: `string`

###### update\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

###### update\_config.parallelism?

> `optional` **parallelism**: `string` \| `number`

#### Type declaration

##### endpoint\_mode?

> `optional` **endpoint\_mode**: `string`

##### labels?

> `optional` **labels**: [`ListOrDict`](../type-aliases/ListOrDict.md)

##### mode?

> `optional` **mode**: `string`

##### placement?

> `optional` **placement**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### placement.constraints?

> `optional` **constraints**: `string`[]

###### placement.max\_replicas\_per\_node?

> `optional` **max\_replicas\_per\_node**: `string` \| `number`

###### placement.preferences?

> `optional` **preferences**: `object`[]

###### Index Signature

\[`k`: `string`\]: `unknown`

##### replicas?

> `optional` **replicas**: `string` \| `number`

##### resources?

> `optional` **resources**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.limits?

> `optional` **limits**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.limits.cpus?

> `optional` **cpus**: `string` \| `number`

###### resources.limits.memory?

> `optional` **memory**: `string`

###### resources.limits.pids?

> `optional` **pids**: `string` \| `number`

###### resources.reservations?

> `optional` **reservations**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### resources.reservations.cpus?

> `optional` **cpus**: `string` \| `number`

###### resources.reservations.devices?

> `optional` **devices**: [`Devices`](../type-aliases/Devices.md)

###### resources.reservations.generic\_resources?

> `optional` **generic\_resources**: [`GenericResources`](../type-aliases/GenericResources.md)

###### resources.reservations.memory?

> `optional` **memory**: `string`

##### restart\_policy?

> `optional` **restart\_policy**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### restart\_policy.condition?

> `optional` **condition**: `string`

###### restart\_policy.delay?

> `optional` **delay**: `string`

###### restart\_policy.max\_attempts?

> `optional` **max\_attempts**: `string` \| `number`

###### restart\_policy.window?

> `optional` **window**: `string`

##### rollback\_config?

> `optional` **rollback\_config**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### rollback\_config.delay?

> `optional` **delay**: `string`

###### rollback\_config.failure\_action?

> `optional` **failure\_action**: `string`

###### rollback\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `string` \| `number`

###### rollback\_config.monitor?

> `optional` **monitor**: `string`

###### rollback\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

###### rollback\_config.parallelism?

> `optional` **parallelism**: `string` \| `number`

##### update\_config?

> `optional` **update\_config**: `object`

###### Index Signature

\[`k`: `string`\]: `unknown`

###### update\_config.delay?

> `optional` **delay**: `string`

###### update\_config.failure\_action?

> `optional` **failure\_action**: `string`

###### update\_config.max\_failure\_ratio?

> `optional` **max\_failure\_ratio**: `string` \| `number`

###### update\_config.monitor?

> `optional` **monitor**: `string`

###### update\_config.order?

> `optional` **order**: `"start-first"` \| `"stop-first"`

###### update\_config.parallelism?

> `optional` **parallelism**: `string` \| `number`

***

### develop?

> `optional` **develop**: `object` & `object`

#### Type declaration

##### watch?

> `optional` **watch**: `object`[]

###### Index Signature

\[`k`: `string`\]: `unknown`

#### Type declaration

##### watch?

> `optional` **watch**: `object`[]

###### Index Signature

\[`k`: `string`\]: `unknown`

***

### device\_cgroup\_rules?

> `optional` **device\_cgroup\_rules**: [`ListOfStrings`](../type-aliases/ListOfStrings.md)

***

### devices?

> `optional` **devices**: (`string` \| \{ `[k: string]`: `unknown`;  `permissions`: `string`; `source`: `string`; `target`: `string`; \})[]

***

### dns?

> `optional` **dns**: [`StringOrList`](../type-aliases/StringOrList.md)

***

### dns\_opt?

> `optional` **dns\_opt**: `string`[]

***

### dns\_search?

> `optional` **dns\_search**: [`StringOrList`](../type-aliases/StringOrList.md)

***

### domainname?

> `optional` **domainname**: `string`

***

### entrypoint?

> `optional` **entrypoint**: `null` \| `string` \| `string`[]

The entrypoint to the application in the container

***

### env\_file?

> `optional` **env\_file**: `string` \| (`string` \| \{ `format`: `string`; `path`: `string`; `required`: `string` \| `boolean`; \})[]

Files containing environment variables that will be included

***

### environment?

> `optional` **environment**: `string`[] \| \{\}

Environment variables that will be included

#### Type declaration

`string`[]

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number` \| `boolean`

***

### expose?

> `optional` **expose**: (`string` \| `number`)[]

Ports exposed to the other services but not to the host machine

***

### extends?

> `optional` **extends**: `string` \| \{ `file`: `string`; `service`: `string`; \}

***

### external\_links?

> `optional` **external\_links**: `string`[]

***

### extra\_hosts?

> `optional` **extra\_hosts**: [`ExtraHosts`](../type-aliases/ExtraHosts.md)

***

### gpus?

> `optional` **gpus**: [`Gpus`](../type-aliases/Gpus.md)

***

### group\_add?

> `optional` **group\_add**: (`string` \| `number`)[]

***

### healthcheck?

> `optional` **healthcheck**: [`Healthcheck`](Healthcheck.md)

***

### hostname?

> `optional` **hostname**: `string`

***

### image?

> `optional` **image**: `string`

The image that will be pulled for the service. If `build` is specified, the built image will be given this tag.

***

### init?

> `optional` **init**: `string` \| `boolean`

***

### ipc?

> `optional` **ipc**: `string`

***

### isolation?

> `optional` **isolation**: `string`

***

### label\_file?

> `optional` **label\_file**: [`LabelFile`](../type-aliases/LabelFile.md)

***

### labels?

> `optional` **labels**: `string`[] \| \{\}

Labels that will be given to the container

#### Type declaration

`string`[]

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number` \| `boolean`

***

### links?

> `optional` **links**: `string`[]

***

### logging?

> `optional` **logging**: `object`

Settings for logging for this service

#### Index Signature

\[`k`: `string`\]: `unknown`

#### driver?

> `optional` **driver**: `string`

#### options?

> `optional` **options**: `object`

##### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number`

***

### mac\_address?

> `optional` **mac\_address**: `string`

***

### mem\_limit?

> `optional` **mem\_limit**: `string` \| `number`

***

### mem\_reservation?

> `optional` **mem\_reservation**: `string` \| `number`

***

### mem\_swappiness?

> `optional` **mem\_swappiness**: `string` \| `number`

***

### memswap\_limit?

> `optional` **memswap\_limit**: `string` \| `number`

***

### network\_mode?

> `optional` **network\_mode**: `string`

***

### networks?

> `optional` **networks**: [`ListOfStrings`](../type-aliases/ListOfStrings.md) \| \{\}

The service will be included in these networks, allowing it to reach other containers on the same network

#### Type declaration

[`ListOfStrings`](../type-aliases/ListOfStrings.md)

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| \{ `[k: string]`: `unknown`;  `aliases`: [`ListOfStrings`](../type-aliases/ListOfStrings.md); `driver_opts`: \{\}; `gw_priority`: `number`; `interface_name`: `string`; `ipv4_address`: `string`; `ipv6_address`: `string`; `link_local_ips`: [`ListOfStrings`](../type-aliases/ListOfStrings.md); `mac_address`: `string`; `priority`: `number`; \}

***

### oom\_kill\_disable?

> `optional` **oom\_kill\_disable**: `string` \| `boolean`

***

### oom\_score\_adj?

> `optional` **oom\_score\_adj**: `string` \| `number`

***

### pid?

> `optional` **pid**: `null` \| `string`

***

### pids\_limit?

> `optional` **pids\_limit**: `string` \| `number`

***

### platform?

> `optional` **platform**: `string`

***

### ports?

> `optional` **ports**: (`string` \| `number` \| \{ `[k: string]`: `unknown`;  `app_protocol`: `string`; `host_ip`: `string`; `mode`: `string`; `name`: `string`; `protocol`: `string`; `published`: `string` \| `number`; `target`: `string` \| `number`; \})[]

Ports that will be exposed to the host

***

### post\_start?

> `optional` **post\_start**: [`ServiceHook`](ServiceHook.md)[]

***

### pre\_stop?

> `optional` **pre\_stop**: [`ServiceHook`](ServiceHook.md)[]

***

### privileged?

> `optional` **privileged**: `string` \| `boolean`

***

### profiles?

> `optional` **profiles**: [`ListOfStrings1`](../type-aliases/ListOfStrings1.md)

***

### provider?

> `optional` **provider**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

#### options?

> `optional` **options**: `object`

##### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number`

#### type?

> `optional` **type**: `string`

***

### pull\_policy?

> `optional` **pull\_policy**: `string`

***

### pull\_refresh\_after?

> `optional` **pull\_refresh\_after**: `string`

***

### read\_only?

> `optional` **read\_only**: `string` \| `boolean`

***

### restart?

> `optional` **restart**: `string`

***

### runtime?

> `optional` **runtime**: `string`

***

### scale?

> `optional` **scale**: `string` \| `number`

***

### secrets?

> `optional` **secrets**: [`ServiceConfigOrSecret1`](../type-aliases/ServiceConfigOrSecret1.md)

***

### security\_opt?

> `optional` **security\_opt**: `string`[]

***

### shm\_size?

> `optional` **shm\_size**: `string` \| `number`

***

### stdin\_open?

> `optional` **stdin\_open**: `string` \| `boolean`

***

### stop\_grace\_period?

> `optional` **stop\_grace\_period**: `string`

***

### stop\_signal?

> `optional` **stop\_signal**: `string`

***

### storage\_opt?

> `optional` **storage\_opt**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

***

### sysctls?

> `optional` **sysctls**: [`ListOrDict`](../type-aliases/ListOrDict.md)

***

### tmpfs?

> `optional` **tmpfs**: [`StringOrList`](../type-aliases/StringOrList.md)

***

### tty?

> `optional` **tty**: `string` \| `boolean`

***

### ulimits?

> `optional` **ulimits**: [`Ulimits`](Ulimits.md)

***

### user?

> `optional` **user**: `string`

The username under which the app in the container will be started

***

### userns\_mode?

> `optional` **userns\_mode**: `string`

***

### uts?

> `optional` **uts**: `string`

***

### volumes?

> `optional` **volumes**: (`string` \| \{ `[k: string]`: `unknown`;  `bind`: \{ `[k: string]`: `unknown`;  `create_host_path`: `string` \| `boolean`; `propagation`: `string`; `recursive`: `"enabled"` \| `"disabled"` \| `"writable"` \| `"readonly"`; `selinux`: `"z"` \| `"Z"`; \}; `consistency`: `string`; `image`: \{ `[k: string]`: `unknown`;  `subpath`: `string`; \}; `read_only`: `string` \| `boolean`; `source`: `string`; `target`: `string`; `tmpfs`: \{ `[k: string]`: `unknown`;  `mode`: `string` \| `number`; `size`: `string` \| `number`; \}; `type`: `"bind"` \| `"volume"` \| `"tmpfs"` \| `"cluster"` \| `"npipe"` \| `"image"`; `volume`: \{ `[k: string]`: `unknown`;  `labels`: [`ListOrDict`](../type-aliases/ListOrDict.md); `nocopy`: `string` \| `boolean`; `subpath`: `string`; \}; \})[]

Named volumes and paths on the host mapped to paths in the container

***

### volumes\_from?

> `optional` **volumes\_from**: `string`[]

***

### working\_dir?

> `optional` **working\_dir**: `string`

The working directory in which the entrypoint or command will be run
