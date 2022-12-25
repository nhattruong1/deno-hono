import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {Context} from "https://deno.land/x/hono@v2.6.2/context.ts";
import {publicRouter} from "./module/public/controller.ts";

const app = new Hono()
// declare global {
//     let connection: string
//     interface Window { connection: string; }
// }
// window.connection = "12";

function handlerHello(c: Context) {
    return c.json({
        hello: "world"
    })
}

app.get('/', handlerHello)
app.route('/public',publicRouter)
serve(app.fetch)