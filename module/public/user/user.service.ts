import {UserDto} from "./dto/user.dto.ts";
import {getDetailUserById, updateUserInfo} from "./user.storage.ts";
import {CustomError} from "../../../core/errorHandling/index.ts";
import {StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/src/lib/main/code/status-codes.ts";

export function updateUserInformation(id: string, information: UserDto) {
    const userAction = this.c.get("userLogin");
    if(userAction.id !== parseInt(id)){
        return new CustomError<string>({
            code: StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS,
            message: "You can't not action"
        })
    }
    return updateUserInfo(parseInt(id),information);
}

export function getDetailUser(id: string){
    return getDetailUserById(parseInt(id))
}