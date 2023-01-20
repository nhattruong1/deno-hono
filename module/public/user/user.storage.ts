import {UserDto} from "./dto/user.dto.ts";

const condition = {
    isActive: true,
    isDelete: false
}

export async function getDetailUserById(id: number) {
    return window.connection.user.findFirst({
        select: {
            id: true,
            firstName: true,
            surName: true,
            fullName: true,
            email: true,
            userName: true,
            createdAt: true
        },
        where: {
            ...condition,
            id: id
        }
    })
}

export async function updateUserInfo(id: number, info: UserDto) {
    return window.connection.user.update({
        where: {
            id: id
        },
        data: info
    })
}