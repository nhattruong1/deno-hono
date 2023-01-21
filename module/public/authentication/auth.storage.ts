import {RegisterDTO} from "./dto/authentication.dto.ts";
import {Prisma} from "../../../core/database/index.ts";
import {PrismaClient} from "../../../core/database/client/deno/edge.ts";

const prisma: PrismaClient = Prisma.getInstance();
export async function findUserByAttribute(key: string,value: string) {
    const condition: any = {}
    condition[key] = value
    return await prisma.user.findUnique({
        where: condition
    })
}

export async function createNewUser(userInfo: RegisterDTO) {
    return await prisma.user.create({
        data: {
            email: userInfo.email,
            password: userInfo.password
        }
    })
}