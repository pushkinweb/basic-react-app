export type TBuildMode = 'production' | 'development'

export interface IBuilEnv {
    mode: TBuildMode
    port: number
}

export interface IBuildPaths {
    entry: string
    build: string
    html: string
    config: string
    public: string
    src: string
    app: string
    pages: string
    widgets: string
    features: string
    entities: string
    shared: string
}

export interface IBuildOptions {
    mode: TBuildMode
    paths?: IBuildPaths
    isDev: boolean
    port: number
}
