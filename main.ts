import { serve } from 'https://deno.land/std/http/server.ts'
import { Hono } from 'https://deno.land/x/hono/mod.ts'
import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
const app = new Hono()

function handlerHello(c: Context) {
    return c.json({
        hello: "wold"
    })
}

app.get('/hello', handlerHello)

serve(app.fetch)