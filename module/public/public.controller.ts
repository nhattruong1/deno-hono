import { Hono } from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {threadRouter} from "./thread/thread.controller.ts";
import {authRouter} from "./authentication/auth.controller.ts";
import {userRouter} from "./user/user.controller.ts";
import {verifyLogin} from "../../core/middleware/public/index.ts";

export const publicRouter = new Hono()

//Middleware
publicRouter.use('/user/*', verifyLogin)
publicRouter.use('/thread/*', verifyLogin)

publicRouter.route('/thread',threadRouter)
publicRouter.route('/user',userRouter)
publicRouter.route('/authentication',authRouter)

