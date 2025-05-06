[**@hanseltime/compose-types**](../../../../README.md)

***

[@hanseltime/compose-types](../../../../README.md) / [v3](../README.md) / Service

# Type Alias: Service\<CustomKeys\>

> **Service**\<`CustomKeys`\> = [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\> & `object`

This interface was referenced by `undefined`'s JSON-Schema definition
via the `patternProperty` "^[a-zA-Z0-9._-]+$".

## Type declaration

### annotations?

> `optional` **annotations**: [`ListOrDict`](ListOrDict.md)

### attach?

> `optional` **attach**: `boolean` \| `string`

### blkio\_config?

> `optional` **blkio\_config**: `object`

#### blkio\_config.device\_read\_bps?

> `optional` **device\_read\_bps**: [`BlkioLimit`](../interfaces/BlkioLimit.md)[]

#### blkio\_config.device\_read\_iops?

> `optional` **device\_read\_iops**: [`BlkioLimit`](../interfaces/BlkioLimit.md)[]

#### blkio\_config.device\_write\_bps?

> `optional` **device\_write\_bps**: [`BlkioLimit`](../interfaces/BlkioLimit.md)[]

#### blkio\_config.device\_write\_iops?

> `optional` **device\_write\_iops**: [`BlkioLimit`](../interfaces/BlkioLimit.md)[]

#### blkio\_config.weight?

> `optional` **weight**: `number` \| `string`

#### blkio\_config.weight\_device?

> `optional` **weight\_device**: [`BlkioWeight`](../interfaces/BlkioWeight.md)[]

### build?

> `optional` **build**: `string` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

### cap\_add?

> `optional` **cap\_add**: `string`[]

### cap\_drop?

> `optional` **cap\_drop**: `string`[]

### cgroup?

> `optional` **cgroup**: `"host"` \| `"private"`

### cgroup\_parent?

> `optional` **cgroup\_parent**: `string`

### command?

> `optional` **command**: `null` \| `string` \| `string`[]

The command that will be run in the container

### configs?

> `optional` **configs**: [`ServiceConfigOrSecret`](ServiceConfigOrSecret.md)\<`CustomKeys`\>

### container\_name?

> `optional` **container\_name**: `string`

The name that will be given to the container

### cpu\_count?

> `optional` **cpu\_count**: `string` \| `number`

### cpu\_percent?

> `optional` **cpu\_percent**: `string` \| `number`

### cpu\_period?

> `optional` **cpu\_period**: `number` \| `string`

### cpu\_quota?

> `optional` **cpu\_quota**: `number` \| `string`

### cpu\_rt\_period?

> `optional` **cpu\_rt\_period**: `number` \| `string`

### cpu\_rt\_runtime?

> `optional` **cpu\_rt\_runtime**: `number` \| `string`

### cpu\_shares?

> `optional` **cpu\_shares**: `number` \| `string`

### cpus?

> `optional` **cpus**: `number` \| `string`

### cpuset?

> `optional` **cpuset**: `string`

### credential\_spec?

> `optional` **credential\_spec**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### config?

> `optional` **config**: `string`

##### file?

> `optional` **file**: `string`

##### registry?

> `optional` **registry**: `string`

### depends\_on?

> `optional` **depends\_on**: [`ListOfStrings`](ListOfStrings.md) \| \{\}

Other services that this service depends on, which will be started before this one

#### Type declaration

[`ListOfStrings`](ListOfStrings.md)

\{\}

#### Index Signature

\[`k`: `string`\]: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

### deploy?

> `optional` **deploy**: [`Deployment`](Deployment.md)\<`CustomKeys`\>

### develop?

> `optional` **develop**: [`Development`](Development.md)\<`CustomKeys`\>

### device\_cgroup\_rules?

> `optional` **device\_cgroup\_rules**: [`ListOfStrings`](ListOfStrings.md)

### devices?

> `optional` **devices**: (`string` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>)[]

### dns?

> `optional` **dns**: [`StringOrList`](StringOrList.md)

### dns\_opt?

> `optional` **dns\_opt**: `string`[]

### dns\_search?

> `optional` **dns\_search**: [`StringOrList`](StringOrList.md)

### domainname?

> `optional` **domainname**: `string`

### entrypoint?

> `optional` **entrypoint**: `null` \| `string` \| `string`[]

The entrypoint to the application in the container

### env\_file?

> `optional` **env\_file**: `string` \| (`string` \| \{ `format`: `string`; `path`: `string`; `required`: `boolean` \| `string`; \})[]

Files containing environment variables that will be included

### environment?

> `optional` **environment**: \{\} \| `string`[]

Environment variables that will be included

#### Type declaration

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number` \| `boolean`

`string`[]

### expose?

> `optional` **expose**: (`string` \| `number`)[]

Ports exposed to the other services but not to the host machine

### extends?

> `optional` **extends**: `string` \| \{ `file`: `string`; `service`: `string`; \}

### external\_links?

> `optional` **external\_links**: `string`[]

### extra\_hosts?

> `optional` **extra\_hosts**: [`ExtraHosts`](ExtraHosts.md)

### gpus?

> `optional` **gpus**: [`Gpus`](Gpus.md)\<`CustomKeys`\>

### group\_add?

> `optional` **group\_add**: (`string` \| `number`)[]

### healthcheck?

> `optional` **healthcheck**: [`Healthcheck`](Healthcheck.md)\<`CustomKeys`\>

### hostname?

> `optional` **hostname**: `string`

### image?

> `optional` **image**: `string`

The image that will be pulled for the service. If `build` is specified, the built image will be given this tag.

### init?

> `optional` **init**: `boolean` \| `string`

### ipc?

> `optional` **ipc**: `string`

### isolation?

> `optional` **isolation**: `string`

### label\_file?

> `optional` **label\_file**: [`LabelFile`](LabelFile.md)

### labels?

> `optional` **labels**: \{\} \| `string`[]

Labels that will be given to the container

#### Type declaration

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number` \| `boolean`

`string`[]

### links?

> `optional` **links**: `string`[]

### logging?

> `optional` **logging**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

Settings for logging for this service

#### Type declaration

##### driver?

> `optional` **driver**: `string`

##### options?

> `optional` **options**: `object`

###### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number`

### mac\_address?

> `optional` **mac\_address**: `string`

### mem\_limit?

> `optional` **mem\_limit**: `number` \| `string`

### mem\_reservation?

> `optional` **mem\_reservation**: `string` \| `number`

### mem\_swappiness?

> `optional` **mem\_swappiness**: `number` \| `string`

### memswap\_limit?

> `optional` **memswap\_limit**: `number` \| `string`

### network\_mode?

> `optional` **network\_mode**: `string`

### networks?

> `optional` **networks**: [`ListOfStrings`](ListOfStrings.md) \| \{\}

The service will be included in these networks, allowing it to reach other containers on the same network

#### Type declaration

[`ListOfStrings`](ListOfStrings.md)

\{\}

#### Index Signature

\[`k`: `string`\]: `null` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

### oom\_kill\_disable?

> `optional` **oom\_kill\_disable**: `boolean` \| `string`

### oom\_score\_adj?

> `optional` **oom\_score\_adj**: `string` \| `number`

### pid?

> `optional` **pid**: `string` \| `null`

### pids\_limit?

> `optional` **pids\_limit**: `number` \| `string`

### platform?

> `optional` **platform**: `string`

### ports?

> `optional` **ports**: (`number` \| `string` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>)[]

Ports that will be exposed to the host

### post\_start?

> `optional` **post\_start**: [`ServiceHook`](ServiceHook.md)\<`CustomKeys`\>[]

### pre\_stop?

> `optional` **pre\_stop**: [`ServiceHook`](ServiceHook.md)\<`CustomKeys`\>[]

### privileged?

> `optional` **privileged**: `boolean` \| `string`

### profiles?

> `optional` **profiles**: [`ListOfStrings1`](ListOfStrings1.md)

### provider?

> `optional` **provider**: `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>

#### Type declaration

##### options?

> `optional` **options**: `object`

###### Index Signature

\[`k`: `string`\]: `null` \| `string` \| `number`

##### type?

> `optional` **type**: `string`

### pull\_policy?

> `optional` **pull\_policy**: `string`

### pull\_refresh\_after?

> `optional` **pull\_refresh\_after**: `string`

### read\_only?

> `optional` **read\_only**: `boolean` \| `string`

### restart?

> `optional` **restart**: `string`

### runtime?

> `optional` **runtime**: `string`

### scale?

> `optional` **scale**: `number` \| `string`

### secrets?

> `optional` **secrets**: [`ServiceConfigOrSecret1`](ServiceConfigOrSecret1.md)\<`CustomKeys`\>

### security\_opt?

> `optional` **security\_opt**: `string`[]

### shm\_size?

> `optional` **shm\_size**: `number` \| `string`

### stdin\_open?

> `optional` **stdin\_open**: `boolean` \| `string`

### stop\_grace\_period?

> `optional` **stop\_grace\_period**: `string`

### stop\_signal?

> `optional` **stop\_signal**: `string`

### storage\_opt?

> `optional` **storage\_opt**: `object`

#### Index Signature

\[`k`: `string`\]: `unknown`

### sysctls?

> `optional` **sysctls**: [`ListOrDict`](ListOrDict.md)

### tmpfs?

> `optional` **tmpfs**: [`StringOrList`](StringOrList.md)

### tty?

> `optional` **tty**: `boolean` \| `string`

### ulimits?

> `optional` **ulimits**: [`Ulimits`](../interfaces/Ulimits.md)\<`CustomKeys`\>

### user?

> `optional` **user**: `string`

The username under which the app in the container will be started

### userns\_mode?

> `optional` **userns\_mode**: `string`

### uts?

> `optional` **uts**: `string`

### volumes?

> `optional` **volumes**: (`string` \| `object` & [`XPrefixedKeys`](XPrefixedKeys.md)\<`CustomKeys`\>)[]

Named volumes and paths on the host mapped to paths in the container

### volumes\_from?

> `optional` **volumes\_from**: `string`[]

### working\_dir?

> `optional` **working\_dir**: `string`

The working directory in which the entrypoint or command will be run

## Type Parameters

### CustomKeys

`CustomKeys` *extends* `string` = `never`
