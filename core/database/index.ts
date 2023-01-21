import { PrismaClient } from './client/deno/edge.ts'
import {loadENV} from "../../utils/env.ts";
loadENV()

export const Prisma = (() => {
    let instance: PrismaClient;
    function createInstance() {
        return new PrismaClient({
            datasources: {
                db: {
                    url: Deno.env.get('DATABASE_URL_PROXY'),
                },
            },
        });
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();