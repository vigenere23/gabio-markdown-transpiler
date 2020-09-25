type VueDependencyModule = string

type VueDependency = VueDependencyModule[] | { [key: string]: VueDependency }
export type VueDependencies = { [key: string]: VueDependency }
