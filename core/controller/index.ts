import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";

async function _executeHandler(c: Context) {
    try {
        const requestParams = c.get("requestParams")
        const result = await this.apply({c},[requestParams]);
        return c.json(result,200)
    } catch (e) {
        return c.json("Internal Error",500)
    }
}

export function handler <F extends Function>(func: F) {
    return _executeHandler.bind(func);
}