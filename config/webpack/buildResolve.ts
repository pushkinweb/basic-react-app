import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import {paths} from "./paths";
import {TsconfigPathsPlugin} from "tsconfig-paths-webpack-plugin"

export function buildResolve(options: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg', '.css', '.scss', '.sass'],
        modules: [paths.src, 'node_modules'],
        plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
        alias: {
            '@': paths.src,
            '@Config': paths.config,
            '@Public': paths.public,
            '@App': paths.app,
            '@Pages': paths.pages,
            '@Widgets': paths.widgets,
            '@Features': paths.features,
            '@Entities': paths.entities,
            '@Shared': paths.shared
        }

    }
}
