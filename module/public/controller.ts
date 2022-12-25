import { Hono } from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {threadRouter} from "./thread/controller.ts";

export const publicRouter = new Hono()

publicRouter.route('/thread',threadRouter)
publicRouter.get('/', (c: Context) => {
    return c.json("Routing Public")
})