interface ProxyAlgorithm {
    increaseIndexes<T>(val: Array<T>): Array<T>
}

class algorithmProxy implements ProxyAlgorithm {
    constructor() { }

    public increaseIndexes<T>(val: T[]): T[] {
        return Object.keys(val)
            .map((v) => {
                return {
                    ...val[v],
                    key: v,
                }
            }).filter((v) => v.meta && !v.meta.hiedInMenu);
    }
}

export const algorithm = new algorithmProxy()