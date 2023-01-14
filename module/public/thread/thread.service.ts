import {GetThreadDTO} from "./dto/get-thread.dto.ts";
import {CustomError} from "../../../core/errorHandling/index.ts";
import {StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/src/lib/main/code/status-codes.ts";

export async function getThread(params: GetThreadDTO){
    let listThread = await window.connection.thread.findMany()

    return new CustomError<string>({
        code: StatusCodes.BAD_GATEWAY
    });
}