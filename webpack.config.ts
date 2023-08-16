import type webpack from 'webpack'

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig'
import { type IBuilEnv } from './config/webpack/types/config'

export default (env: IBuilEnv) => {
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const isDev = mode === 'development'
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        isDev,
        port: PORT
    })

    return config
}
