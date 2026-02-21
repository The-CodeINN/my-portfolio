declare module 'hast-to-hyperscript' {
    export function toH(
        h: typeof import('react').createElement,
        tree: any,
        options?: any
    ): any;
}
