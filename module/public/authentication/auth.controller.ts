import {Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {RegisterDTO,LoginDTO} from "./dto/authentication.dto.ts";
import {validation} from "../../../core/validation/index.ts";
import {ParamType} from "../../../core/helper/enum/index.ts";
import {handler} from "../../../core/controller/index.ts";
import {login, register} from "./auth.service.ts";

export const authRouter = new Hono()

authRouter.post('/register',
    validation(RegisterDTO,ParamType.Json),
    handler(register)
)

authRouter.post('/login',
    validation(LoginDTO,ParamType.Json),
    handler(login)
)

