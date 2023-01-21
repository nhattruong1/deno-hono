import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import {Context, Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {publicRouter} from "./module/public/public.controller.ts";
import {Prisma} from "./core/database/index.ts";
import {RedisClient} from "./core/service/caching/index.ts";

const app = new Hono();
Prisma.getInstance()
RedisClient.getInstance()

function handlerHello(c: Context) {
    return c.json({
        hello: "wold"
    })
}

app.get('/', handlerHello)
app.route('/api/public',publicRouter)
serve(app.fetch)