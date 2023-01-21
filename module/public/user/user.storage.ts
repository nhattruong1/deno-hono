import {UserDto} from "./dto/user.dto.ts";
import {User} from "./interface/index.interface.ts";
import {Prisma} from "../../../core/database/index.ts";
import {PrismaClient} from "../../../core/database/client/deno/edge.ts";
import {RedisClient} from "../../../core/service/caching/index.ts";

const prisma: PrismaClient = Prisma.getInstance();
const condition = {
    isActive: true,
    isDelete: false
}
const redis = RedisClient.getInstance();

export async function getDetailUserById(id: number) {
    let user: User | null = null;
    const userInCache = await redis.get(`user:detail:${id}`);
    if(userInCache){
        user = userInCache
    }

    if(!userInCache){
        user = await prisma.user.findFirst({
            where: {
                ...condition,
                id: id
            }
        })
    }
    return user;
}

export async function updateUserInfo(id: number, info: UserDto) {
    const updateData: User = await prisma.user.update({
        where: {
            id: id
        },
        data: info
    })
    delete updateData.password;
    redis.set(`user:detail:${id}`, updateData)
    return updateData;
}