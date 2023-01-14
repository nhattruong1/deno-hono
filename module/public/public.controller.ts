import { Hono } from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {threadRouter} from "./thread/thread.controller.ts";
import {authRouter} from "./authentication/auth.controller.ts";

export const publicRouter = new Hono()

publicRouter.route('/thread',threadRouter)
publicRouter.route('/authentication',authRouter)
publicRouter.get('/', (c: Context) => {
    return c.json("Routing Public")
})