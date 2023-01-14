import {RegisterDTO} from "./dto/authentication.dto.ts";

export async function findUserByAttribute(key: string,value: string) {
    const condition: any = {}
    condition[key] = value
    return await window.connection.user.findUnique({
        where: condition
    })
}

export async function createNewUser(userInfo: RegisterDTO) {
    return await window.connection.user.create({
        data: {
            email: userInfo.email,
            password: userInfo.password
        }
    })
}