import {GetThreadDTO} from "./dto/get-thread.dto.ts";

export async function getThread(params: GetThreadDTO){
    console.log(params)
    return params;
}