import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {Next} from "https://deno.land/x/hono@v2.6.2/types.ts";
import {ParamType} from "../helper/enum/index.ts";
import {validate, ValidationError} from "https://deno.land/x/deno_class_validator@v1.0.0/src/index.ts";
import {CustomError} from "../errorHandling/index.ts";
import {StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/mod.ts";

interface ErrorValidation {
    field?: string,
    detail?: object
}

export function validation(dto: any,typeParams: ParamType) {
    return async function (c: Context,next: Next) {
        try {
            const request = Object.assign(c.req);
            const params = await request[typeParams]()
            const dataValidate = new dto();

            Object.assign(dataValidate,params)

            const errors: ValidationError[] = await validate(dataValidate);
            if (errors.length > 0) {
                const dataError: ErrorValidation = {
                    field: errors[0]?.property,
                    detail: errors[0]?.constraints
                };
                const error = new CustomError<ErrorValidation>({
                    code: StatusCodes.BAD_REQUEST,
                    message: "Validation Failed",
                    detail_error: dataError
                });
                return c.json(error,500)
            }else{
                c.set("requestParams", params)
                await next()
            }
        }catch (e) {
            console.log(e)
            return c.json("Internal Error",500)
        }
    }
}