import {LogType} from "../enum/index.ts";

export async function logging(type: LogType, userId: number, detail: object = {}) {
    return await window.connection.monitoring.create({
        data: {
            type: type,
            detail: detail,
            userId: userId
        }
    })
}