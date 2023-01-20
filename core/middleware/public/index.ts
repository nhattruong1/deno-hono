import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {Next} from "https://deno.land/x/hono@v2.6.2/types.ts";
import {CustomError} from "../../errorHandling/index.ts";
import {StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/src/lib/main/code/status-codes.ts";
import {KEY_ACCESS_TOKEN} from "../../../utils/jwt.key.ts";
import {verify} from "https://deno.land/x/djwt@v2.8/mod.ts";

export async function verifyLogin(c: Context, next: Next) {
    let error;
    try {
        let bearerToken = c.req.headers.get('Authorization');
        if(!bearerToken){
            error = new CustomError<string>({
                code: StatusCodes.UNAUTHORIZED
            });
        }
        bearerToken = bearerToken ? bearerToken.split("Bearer ")[1] : "";
        const decodeToken = await verify(bearerToken, KEY_ACCESS_TOKEN);
        const userLogin = decodeToken.data;
        c.set("userLogin", userLogin)
    }catch (e) {
        error = new CustomError<string>({
            code: StatusCodes.UNAUTHORIZED
        });
    }
    if(error){
        return c.json(error, error.code)
    }
    await next();
}