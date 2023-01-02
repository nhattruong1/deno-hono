import { serve } from 'https://deno.land/std@0.170.0/http/server.ts'
import {Context, Hono} from 'https://deno.land/x/hono@v2.6.2/mod.ts'
import {publicRouter} from "./module/public/public.controller.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";
import { PrismaClient } from './core/database/client/deno/edge.ts'

const envVars = await config();
const prisma: PrismaClient = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL_PROXY,
        },
    },
});

const app = new Hono()

declare global {
    let connection: PrismaClient
    interface Window { connection: PrismaClient; }
}
window.connection = prisma;

async function handlerHello(c: Context) {
    return c.json({
        hello: "wold"
    })
}

app.get('/', handlerHello)
app.route('/public',publicRouter)
serve(app.fetch)