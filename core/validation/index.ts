import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {Next} from "https://deno.land/x/hono@v2.6.2/types.ts";
import {ParamType} from "../helper/enum/index.ts";
import {validate, ValidationError} from "https://deno.land/x/deno_class_validator@v1.0.0/src/index.ts";

interface ErrorValidation {
    field?: string,
    message: string
    detail?: object
}

export function validation(dto: any,typeParams: ParamType) {
    return async function (c: Context,next: Next) {
        const request = Object.assign(c.req);
        const params = request[typeParams]()
        const dataValidate = new dto();

        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                dataValidate[key] = params[key];
            }
        }

        const errors: ValidationError[] = await validate(dataValidate);
        if (errors.length > 0) {
            const dataError: ErrorValidation = {
                message: "Validate failed",
                field: errors[0]?.property,
                detail: errors[0]?.constraints
            };
            return c.json(dataError,500)
        }else{
            c.set("requestParams", params)
            await next()
        }
    }
}