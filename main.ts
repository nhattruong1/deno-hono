import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import {Context, Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {publicRouter} from "./module/public/public.controller.ts";
import { PrismaClient } from './core/database/client/deno/edge.ts'
import {loadENV} from "./utils/env.ts";
import {RedisClient} from "./core/service/caching/index.ts";
loadENV()
const prisma: PrismaClient = new PrismaClient({
    datasources: {
        db: {
            url: Deno.env.get('DATABASE_URL_PROXY'),
        },
    },
});

const app = new Hono();

declare global {
    let connection: PrismaClient
    interface Window { connection: PrismaClient; }
}
window.connection = prisma;

function handlerHello(c: Context) {
    return c.json({
        hello: "wold"
    })
}

app.get('/', handlerHello)
app.route('/api/public',publicRouter)
serve(app.fetch)