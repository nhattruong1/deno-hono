import {Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {GetThreadDTO} from "./dto/get-thread.dto.ts";
import {validation} from "../../../core/validation/index.ts";
import {ParamType} from "../../../core/helper/enum/index.ts";
import {handler} from "../../../core/controller/index.ts";
import {getThread} from "./thread.service.ts";

export const threadRouter = new Hono()

threadRouter.get('/',
    validation(GetThreadDTO,ParamType.Query),
    handler(getThread)
)

