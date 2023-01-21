import {LogType} from "../enum/index.ts";
import {Prisma} from "../../database/index.ts";
import {PrismaClient} from "../../../core/database/client/deno/edge.ts";

const prisma: PrismaClient = Prisma.getInstance();
export async function logging(type: LogType, userId: number, detail: object = {}) {

    return await prisma.monitoring.create({
        data: {
            type: type,
            detail: detail,
            userId: userId
        }
    })
}