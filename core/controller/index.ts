import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {Error} from "../errorHandling/index.ts";
import {getReasonPhrase, StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/mod.ts";

async function _executeHandler(c: Context) {
    try {
        const requestParams = c.get("requestParams")
        const params : any[] = []
        const urlParam = c.req.param();
        for (const [key, value] of Object.entries(urlParam)) {
            params.push(value)
        }
        params.push(requestParams)
        const result = await this.apply({c},params);
        if(result instanceof Error){
            return c.json(result, result.code)
        }
        return c.json({
            code: StatusCodes.OK,
            message:getReasonPhrase(StatusCodes.OK),
            data: result
        },200)
    } catch (e) {
        console.log(e)
        return c.json("Internal Error",500)
    }
}

export function handler <F extends Function>(func: F) {
    return _executeHandler.bind(func);
}