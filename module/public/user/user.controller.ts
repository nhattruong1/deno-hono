import {Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {validation} from "../../../core/validation/index.ts";
import {ParamType} from "../../../core/helper/enum/index.ts";
import {handler} from "../../../core/controller/index.ts";
import {UserDto} from "./dto/user.dto.ts";
import {getDetailUser, updateUserInformation} from "./user.service.ts"
export const userRouter = new Hono()

userRouter.post('/update/:id',
    validation(UserDto,ParamType.Json),
    handler(updateUserInformation)
)

userRouter.get('/detail/:id',
    handler(getDetailUser)
)