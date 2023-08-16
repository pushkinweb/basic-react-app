import {IBuildPaths} from "./types/config"
import path from 'path'

export const paths: IBuildPaths = {
    entry: path.resolve(__dirname, '../../src', 'index.tsx'),
    build: path.resolve(__dirname, '../../build'),
    html: path.resolve(__dirname, '../../public', 'index.html'),
    config: path.resolve(__dirname, '../../config'),
    public: path.resolve(__dirname, '../../public'),
    src: path.resolve(__dirname, '../../src'),
    app: path.resolve(__dirname, '../../src/app'),
    pages: path.resolve(__dirname, '../../src/pages'),
    widgets: path.resolve(__dirname, '../../src/widgets'),
    features: path.resolve(__dirname, '../../src/features'),
    entities: path.resolve(__dirname, '../../src/entities'),
    shared: path.resolve(__dirname, '../../src/shared'),
}
