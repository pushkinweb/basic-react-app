/* Declaration TS for modules.scss */
declare module '*.scss' {
    type IClassNames = Record<string, string>

    const classNames: IClassNames
    export = classNames
}

declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean

declare module '*.properties' {
    const src: string
    export default src
}

type RequiredSomeKeys<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>
