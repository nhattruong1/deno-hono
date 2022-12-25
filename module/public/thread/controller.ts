import { Hono } from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";

export const threadRouter = new Hono()

threadRouter.get('/', (c: Context) => {
    return c.json("Thread Routing Public")
})