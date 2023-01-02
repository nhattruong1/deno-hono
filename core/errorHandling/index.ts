import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";

export function errorHandling(err: string, c: Context){
    return c.text(err, 500)
}