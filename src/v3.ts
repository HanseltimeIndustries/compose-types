/**
 * This file was generated with json-schema-to-typescript but has been edited
 * to match some patterns that it can't
 */

/**
 * Docker compose allows x- prefixed keys
 */
export type XPrefixedKeys<T extends string = never> = {
	[K in T as `x-${string & K}`]?: any;
};

export type Include =
	| string
	| {
			path?: StringOrList;
			env_file?: StringOrList;
			project_directory?: string;
	  };
export type StringOrList = string | ListOfStrings;
export type ListOfStrings = string[];
export type Development<CustomKeys extends string = never> = {
	watch?: {
		ignore?: StringOrList;
		include?: StringOrList;
		path: string;
		action: "rebuild" | "sync" | "restart" | "sync+restart" | "sync+exec";
		target?: string;
		exec?: ServiceHook<CustomKeys>;
	} & XPrefixedKeys<CustomKeys>[];
} & Development1<CustomKeys> &
	XPrefixedKeys<CustomKeys>;
export type Command = null | string | string[];
export type ListOrDict =
	| {
			/**
			 * This interface was referenced by `undefined`'s JSON-Schema definition
			 * via the `patternProperty` ".+".
			 */
			[k: string]: string | number | boolean | null;
	  }
	| string[];
export type Development1<CustomKeys extends string = never> =
	| ({
			watch?: {
				ignore?: StringOrList;
				include?: StringOrList;
				path: string;
				action: "rebuild" | "sync" | "restart" | "sync+restart" | "sync+exec";
				target?: string;
				exec?: ServiceHook<CustomKeys>;
			} & XPrefixedKeys<CustomKeys>[];
	  } & XPrefixedKeys<CustomKeys>)
	| null;
export type Deployment<CustomKeys extends string = never> = {
	mode?: string;
	endpoint_mode?: string;
	replicas?: number | string;
	labels?: ListOrDict;
	rollback_config?: {
		parallelism?: number | string;
		delay?: string;
		failure_action?: string;
		monitor?: string;
		max_failure_ratio?: number | string;
		order?: "start-first" | "stop-first";
	} & XPrefixedKeys<CustomKeys>;
	update_config?: {
		parallelism?: number | string;
		delay?: string;
		failure_action?: string;
		monitor?: string;
		max_failure_ratio?: number | string;
		order?: "start-first" | "stop-first";
	} & XPrefixedKeys<CustomKeys>;
	resources?: {
		limits?: {
			cpus?: number | string;
			memory?: string;
			pids?: number | string;
		} & XPrefixedKeys<CustomKeys>;
		reservations?: {
			cpus?: number | string;
			memory?: string;
			generic_resources?: GenericResources<CustomKeys>;
			devices?: Devices<CustomKeys>;
		} & XPrefixedKeys<CustomKeys>;
	} & XPrefixedKeys<CustomKeys>;
	restart_policy?: {
		condition?: string;
		delay?: string;
		max_attempts?: number | string;
		window?: string;
	} & XPrefixedKeys<CustomKeys>;
	placement?: {
		constraints?: string[];
		preferences?: ({
			spread?: string;
		} & XPrefixedKeys<CustomKeys>)[];
		max_replicas_per_node?: number | string;
	} & XPrefixedKeys<CustomKeys>;
} & Deployment1<CustomKeys> &
	XPrefixedKeys<CustomKeys>;
export type GenericResources<CustomKeys extends string = never> = ({
	discrete_resource_spec?: {
		kind?: string;
		value?: number | string;
	} & XPrefixedKeys<CustomKeys>;
} & XPrefixedKeys<CustomKeys>)[];
export type Devices<CustomKeys extends string = never> = ({
	capabilities: ListOfStrings;
	count?: string | number;
	device_ids?: ListOfStrings;
	driver?: string;
	options?: ListOrDict;
} & XPrefixedKeys<CustomKeys>)[];
export type Deployment1<CustomKeys extends string = never> =
	| ({
			mode?: string;
			endpoint_mode?: string;
			replicas?: number | string;
			labels?: ListOrDict;
			rollback_config?: {
				parallelism?: number | string;
				delay?: string;
				failure_action?: string;
				monitor?: string;
				max_failure_ratio?: number | string;
				order?: "start-first" | "stop-first";
			} & XPrefixedKeys<CustomKeys>;
			update_config?: {
				parallelism?: number | string;
				delay?: string;
				failure_action?: string;
				monitor?: string;
				max_failure_ratio?: number | string;
				order?: "start-first" | "stop-first";
			} & XPrefixedKeys<CustomKeys>;
			resources?: {
				limits?: {
					cpus?: number | string;
					memory?: string;
					pids?: number | string;
				} & XPrefixedKeys<CustomKeys>;
				reservations?: {
					cpus?: number | string;
					memory?: string;
					generic_resources?: GenericResources<CustomKeys>;
					devices?: Devices<CustomKeys>;
				} & XPrefixedKeys<CustomKeys>;
			} & XPrefixedKeys<CustomKeys>;
			restart_policy?: {
				condition?: string;
				delay?: string;
				max_attempts?: number | string;
				window?: string;
			} & XPrefixedKeys<CustomKeys>;
			placement?: {
				constraints?: string[];
				preferences?: ({
					spread?: string;
				} & XPrefixedKeys<CustomKeys>)[];
				max_replicas_per_node?: number | string;
			} & XPrefixedKeys<CustomKeys>;
	  } & XPrefixedKeys<CustomKeys>)
	| null;
/**
 * Additional hostnames to be defined in the container's /etc/hosts file.
 *
 * Either a list mapping hostnames to IP addresses.
 *   or a list of host:IP mappings in the format 'hostname:IP'.
 */
export type ExtraHosts =
	| {
			/**
			 * A list mapping of hostnames to IP addresses
			 */
			[k: string]: string | string[];
	  }
	| string[];
export type ServiceConfigOrSecret<CustomKeys extends string = never> = (
	| string
	| ({
			source?: string;
			target?: string;
			uid?: string;
			gid?: string;
			mode?: number | string;
	  } & XPrefixedKeys<CustomKeys>)
)[];
export type LabelFile = string | string[];
export type Gpus<CustomKeys extends string = never> =
	| "all"
	| ({
			capabilities?: ListOfStrings;
			count?: string | number;
			device_ids?: ListOfStrings;
			driver?: string;
			options?: ListOrDict;
	  } & XPrefixedKeys<CustomKeys>)[];
/**
 * Profiles that this service is a part of. When the profile is started, this service will be started.
 */
export type ListOfStrings1 = string[];
/**
 * Secrets the service will have access to
 */
export type ServiceConfigOrSecret1<CustomKeys extends string = never> = (
	| string
	| ({
			source?: string;
			target?: string;
			uid?: string;
			gid?: string;
			mode?: number | string;
	  } & XPrefixedKeys<CustomKeys>)
)[];
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type Network<CustomKeys extends string = never> = {
	name?: string;
	/**
	 * The driver used for this network
	 */
	driver?: string;
	driver_opts?: {
		/**
		 * This interface was referenced by `undefined`'s JSON-Schema definition
		 * via the `patternProperty` "^.+$".
		 */
		[k: string]: string | number;
	};
	ipam?: {
		driver?: string;
		config?: ({
			subnet?: string;
			ip_range?: string;
			gateway?: string;
			aux_addresses?: {
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^.+$".
				 */
				[k: string]: string;
			};
		} & XPrefixedKeys<CustomKeys>)[];
		options?: {
			/**
			 * This interface was referenced by `undefined`'s JSON-Schema definition
			 * via the `patternProperty` "^.+$".
			 */
			[k: string]: string;
		};
	} & XPrefixedKeys<CustomKeys>;
	external?:
		| boolean
		| string
		| ({
				/**
				 * @deprecated
				 */
				name?: string;
		  } & XPrefixedKeys<CustomKeys>);
	internal?: boolean | string;
	enable_ipv4?: boolean | string;
	enable_ipv6?: boolean | string;
	attachable?: boolean | string;
	labels?: ListOrDict;
} & XPrefixedKeys<CustomKeys> &
	Network1<CustomKeys>;
export type Network1<CustomKeys extends string = never> =
	| ({
			name?: string;
			/**
			 * The driver used for this network
			 */
			driver?: string;
			driver_opts?: {
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^.+$".
				 */
				[k: string]: string | number;
			};
			ipam?: {
				driver?: string;
				config?: ({
					subnet?: string;
					ip_range?: string;
					gateway?: string;
					aux_addresses?: {
						/**
						 * This interface was referenced by `undefined`'s JSON-Schema definition
						 * via the `patternProperty` "^.+$".
						 */
						[k: string]: string;
					};
				} & XPrefixedKeys<CustomKeys>)[];
				options?: {
					/**
					 * This interface was referenced by `undefined`'s JSON-Schema definition
					 * via the `patternProperty` "^.+$".
					 */
					[k: string]: string;
				};
			} & XPrefixedKeys<CustomKeys>;
			external?:
				| boolean
				| string
				| ({
						/**
						 * @deprecated
						 */
						name?: string;
				  } & XPrefixedKeys<CustomKeys>);
			internal?: boolean | string;
			enable_ipv4?: boolean | string;
			enable_ipv6?: boolean | string;
			attachable?: boolean | string;
			labels?: ListOrDict;
	  } & XPrefixedKeys<CustomKeys>)
	| null;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type Volume<CustomKeys extends string = never> = {
	name?: string;
	/**
	 * The driver used for this volume
	 */
	driver?: string;
	driver_opts?: {
		/**
		 * This interface was referenced by `undefined`'s JSON-Schema definition
		 * via the `patternProperty` "^.+$".
		 */
		[k: string]: string | number;
	};
	external?:
		| boolean
		| string
		| {
				/**
				 * @deprecated
				 */
				name?: string;
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^x-".
				 */
				[k: string]: unknown;
		  };
	labels?: ListOrDict;
} & XPrefixedKeys<CustomKeys> &
	Volume1<CustomKeys>;
export type Volume1<CustomKeys extends string = never> =
	| ({
			name?: string;
			/**
			 * The driver used for this volume
			 */
			driver?: string;
			driver_opts?: {
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^.+$".
				 */
				[k: string]: string | number;
			};
			external?:
				| boolean
				| string
				| ({
						/**
						 * @deprecated
						 */
						name?: string;
				  } & XPrefixedKeys<CustomKeys>);
			labels?: ListOrDict;
	  } & XPrefixedKeys<CustomKeys>)
	| null;

/**
 * The Compose file is a YAML file defining a multi-containers based application.
 */
export type ComposeSpecification<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		/**
		 * declared for backward compatibility, ignored.
		 */
		version?: string;
		/**
		 * define the Compose project name, until user defines one explicitly.
		 */
		name?: string;
		/**
		 * compose sub-projects to be included.
		 */
		include?: Include[];
		/**
		 * The services in your project
		 */
		services?: {
			[k: string]: Service<CustomKeys>;
		};
		/**
		 * Networks that are shared among multiple services
		 */
		networks?: {
			[k: string]: Network<CustomKeys>;
		};
		/**
		 * Named volumes that are shared among multiple services
		 */
		volumes?: {
			[k: string]: Volume<CustomKeys>;
		};
		/**
		 * Secrets that are shared among multiple services
		 */
		secrets?: {
			[k: string]: Secret<CustomKeys>;
		};
		/**
		 * Configurations for services in the project
		 */
		configs?: {
			[k: string]: Config<CustomKeys>;
		};
	};
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type Service<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		develop?: Development<CustomKeys>;
		deploy?: Deployment<CustomKeys>;
		annotations?: ListOrDict;
		attach?: boolean | string;
		build?:
			| string
			| ({
					/**
					 * The context used for building the image
					 */
					context?: string;
					/**
					 * The Dockerfile used for building the image
					 */
					dockerfile?: string;
					dockerfile_inline?: string;
					entitlements?: string[];
					/**
					 * Arguments used during the image build process
					 */
					args?:
						| {
								/**
								 * This interface was referenced by `undefined`'s JSON-Schema definition
								 * via the `patternProperty` ".+".
								 */
								[k: string]: string | number | boolean | null;
						  }
						| string[];
					ssh?: ListOrDict;
					labels?: ListOrDict;
					cache_from?: string[];
					cache_to?: string[];
					no_cache?: boolean | string;
					additional_contexts?: ListOrDict;
					network?: string;
					pull?: boolean | string;
					target?: string;
					shm_size?: number | string;
					extra_hosts?: ExtraHosts;
					isolation?: string;
					privileged?: boolean | string;
					secrets?: ServiceConfigOrSecret<CustomKeys>;
					tags?: string[];
					ulimits?: Ulimits<CustomKeys>;
					platforms?: string[];
			  } & XPrefixedKeys<CustomKeys>);
		blkio_config?: {
			device_read_bps?: BlkioLimit[];
			device_read_iops?: BlkioLimit[];
			device_write_bps?: BlkioLimit[];
			device_write_iops?: BlkioLimit[];
			weight?: number | string;
			weight_device?: BlkioWeight[];
		};
		cap_add?: string[];
		cap_drop?: string[];
		cgroup?: "host" | "private";
		cgroup_parent?: string;
		/**
		 * The command that will be run in the container
		 */
		command?: null | string | string[];
		configs?: ServiceConfigOrSecret<CustomKeys>;
		/**
		 * The name that will be given to the container
		 */
		container_name?: string;
		cpu_count?: string | number;
		cpu_percent?: string | number;
		cpu_shares?: number | string;
		cpu_quota?: number | string;
		cpu_period?: number | string;
		cpu_rt_period?: number | string;
		cpu_rt_runtime?: number | string;
		cpus?: number | string;
		cpuset?: string;
		credential_spec?: {
			config?: string;
			file?: string;
			registry?: string;
		} & XPrefixedKeys<CustomKeys>;
		/**
		 * Other services that this service depends on, which will be started before this one
		 */
		depends_on?:
			| ListOfStrings
			| {
					/**
					 * This interface was referenced by `undefined`'s JSON-Schema definition
					 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
					 */
					[k: string]: {
						restart?: boolean | string;
						required?: boolean;
						condition:
							| "service_started"
							| "service_healthy"
							| "service_completed_successfully";
					} & XPrefixedKeys<CustomKeys>;
			  };
		device_cgroup_rules?: ListOfStrings;
		devices?: (
			| string
			| ({
					source: string;
					target?: string;
					permissions?: string;
			  } & XPrefixedKeys<CustomKeys>)
		)[];
		dns?: StringOrList;
		dns_opt?: string[];
		dns_search?: StringOrList;
		domainname?: string;
		/**
		 * The entrypoint to the application in the container
		 */
		entrypoint?: null | string | string[];
		/**
		 * Files containing environment variables that will be included
		 */
		env_file?:
			| string
			| (
					| string
					| {
							path: string;
							format?: string;
							required?: boolean | string;
					  }
			  )[];
		label_file?: LabelFile;
		/**
		 * Environment variables that will be included
		 */
		environment?:
			| {
					/**
					 * This interface was referenced by `undefined`'s JSON-Schema definition
					 * via the `patternProperty` ".+".
					 */
					[k: string]: string | number | boolean | null;
			  }
			| string[];
		/**
		 * Ports exposed to the other services but not to the host machine
		 */
		expose?: (string | number)[];
		extends?:
			| string
			| {
					service: string;
					file?: string;
			  };
		provider?: {
			type?: string;
			options?: {
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^.+$".
				 */
				[k: string]: string | number | null;
			};
		} & XPrefixedKeys<CustomKeys>;
		external_links?: string[];
		extra_hosts?: ExtraHosts;
		gpus?: Gpus<CustomKeys>;
		group_add?: (string | number)[];
		healthcheck?: Healthcheck<CustomKeys>;
		hostname?: string;
		/**
		 * The image that will be pulled for the service. If `build` is specified, the built image will be given this tag.
		 */
		image?: string;
		init?: boolean | string;
		ipc?: string;
		isolation?: string;
		/**
		 * Labels that will be given to the container
		 */
		labels?:
			| {
					/**
					 * This interface was referenced by `undefined`'s JSON-Schema definition
					 * via the `patternProperty` ".+".
					 */
					[k: string]: string | number | boolean | null;
			  }
			| string[];
		links?: string[];
		/**
		 * Settings for logging for this service
		 */
		logging?: {
			driver?: string;
			options?: {
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^.+$".
				 */
				[k: string]: string | number | null;
			};
		} & XPrefixedKeys<CustomKeys>;
		mac_address?: string;
		mem_limit?: number | string;
		mem_reservation?: string | number;
		mem_swappiness?: number | string;
		memswap_limit?: number | string;
		network_mode?: string;
		/**
		 * The service will be included in these networks, allowing it to reach other containers on the same network
		 */
		networks?:
			| ListOfStrings
			| {
					/**
					 * This interface was referenced by `undefined`'s JSON-Schema definition
					 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
					 */
					[k: string]:
						| ({
								aliases?: ListOfStrings;
								interface_name?: string;
								ipv4_address?: string;
								ipv6_address?: string;
								link_local_ips?: ListOfStrings;
								mac_address?: string;
								driver_opts?: {
									/**
									 * This interface was referenced by `undefined`'s JSON-Schema definition
									 * via the `patternProperty` "^.+$".
									 */
									[k: string]: string | number;
								};
								priority?: number;
								gw_priority?: number;
						  } & XPrefixedKeys<CustomKeys>)
						| null;
			  };
		oom_kill_disable?: boolean | string;
		oom_score_adj?: string | number;
		pid?: string | null;
		pids_limit?: number | string;
		platform?: string;
		/**
		 * Ports that will be exposed to the host
		 */
		ports?: (
			| number
			| string
			| ({
					name?: string;
					mode?: string;
					host_ip?: string;
					target?: number | string;
					published?: string | number;
					protocol?: string;
					app_protocol?: string;
			  } & XPrefixedKeys<CustomKeys>)
		)[];
		post_start?: ServiceHook<CustomKeys>[];
		pre_stop?: ServiceHook<CustomKeys>[];
		privileged?: boolean | string;
		profiles?: ListOfStrings1;
		pull_policy?: string;
		pull_refresh_after?: string;
		read_only?: boolean | string;
		restart?: string;
		runtime?: string;
		scale?: number | string;
		security_opt?: string[];
		shm_size?: number | string;
		secrets?: ServiceConfigOrSecret1<CustomKeys>;
		sysctls?: ListOrDict;
		stdin_open?: boolean | string;
		stop_grace_period?: string;
		stop_signal?: string;
		storage_opt?: {
			[k: string]: unknown;
		};
		tmpfs?: StringOrList;
		tty?: boolean | string;
		ulimits?: Ulimits<CustomKeys>;
		/**
		 * The username under which the app in the container will be started
		 */
		user?: string;
		uts?: string;
		userns_mode?: string;
		/**
		 * Named volumes and paths on the host mapped to paths in the container
		 */
		volumes?: (
			| string
			| ({
					type: "bind" | "volume" | "tmpfs" | "cluster" | "npipe" | "image";
					source?: string;
					target?: string;
					read_only?: boolean | string;
					consistency?: string;
					bind?: {
						propagation?: string;
						create_host_path?: boolean | string;
						recursive?: "enabled" | "disabled" | "writable" | "readonly";
						selinux?: "z" | "Z";
					} & XPrefixedKeys<CustomKeys>;
					volume?: {
						labels?: ListOrDict;
						nocopy?: boolean | string;
						subpath?: string;
					} & XPrefixedKeys<CustomKeys>;
					tmpfs?: {
						size?: number | string;
						mode?: number | string;
					} & XPrefixedKeys<CustomKeys>;
					image?: {
						subpath?: string;
					} & XPrefixedKeys<CustomKeys>;
			  } & XPrefixedKeys<CustomKeys>)
		)[];
		volumes_from?: string[];
		/**
		 * The working directory in which the entrypoint or command will be run
		 */
		working_dir?: string;
	};
export type ServiceHook<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		command: Command;
		user?: string;
		privileged?: boolean | string;
		working_dir?: string;
		environment?: ListOrDict;
	};
export interface Ulimits<CustomKeys extends string = never> {
	/**
	 * This interface was referenced by `Ulimits`'s JSON-Schema definition
	 * via the `patternProperty` "^[a-z]+$".
	 */
	[k: string]:
		| (number | string)
		| ({
				hard: number | string;
				soft: number | string;
				/**
				 * This interface was referenced by `undefined`'s JSON-Schema definition
				 * via the `patternProperty` "^x-".
				 */
				[k: string]: unknown;
		  } & XPrefixedKeys<CustomKeys>);
}
export interface BlkioLimit {
	path?: string;
	rate?: number | string;
}
export interface BlkioWeight {
	path?: string;
	weight?: number | string;
}
/**
 * A command for checking if the container is healthy
 */
export type Healthcheck<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		disable?: boolean | string;
		interval?: string;
		retries?: number | string;
		test?: string | string[];
		timeout?: string;
		start_period?: string;
		start_interval?: string;
	};
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type Secret<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		name?: string;
		environment?: string;
		file?: string;
		external?:
			| boolean
			| string
			| {
					name?: string;
					[k: string]: unknown;
			  };
		labels?: ListOrDict;
		driver?: string;
		driver_opts?: {
			/**
			 * This interface was referenced by `undefined`'s JSON-Schema definition
			 * via the `patternProperty` "^.+$".
			 */
			[k: string]: string | number;
		};
		template_driver?: string;
	};
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type Config<CustomKeys extends string = never> =
	XPrefixedKeys<CustomKeys> & {
		name?: string;
		content?: string;
		environment?: string;
		file?: string;
		external?:
			| boolean
			| string
			| {
					/**
					 * @deprecated
					 */
					name?: string;
					[k: string]: unknown;
			  };
		labels?: ListOrDict;
		template_driver?: string;
	};
