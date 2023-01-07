import {
    getReasonPhrase
} from "https://deno.land/x/https_status_codes@v1.2.0/mod.ts";
import {StatusCode} from "https://deno.land/x/hono@v2.7.0/utils/http-status.ts";

export class Error<T> {
    code: StatusCode;
    key_error?: string;
    message?: string;
    detail_error?: T;
}

export class CustomError<T> extends Error<T>{
    constructor(init:Partial<Error<T>>) {
        super();
        init.message = init.message ? init.message : getReasonPhrase(init.code || 200)
        Object.assign(this, init);
    }
}
