export interface Paging<T> {
    total: number,
    data: T[],
}

export interface Response<T> {
    code: number;
    message: number;
    detail: T
}