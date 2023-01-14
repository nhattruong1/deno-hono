import {LoginDTO, RegisterDTO} from "./dto/authentication.dto.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.3.0/mod.ts";
import {CustomError} from "../../../core/errorHandling/index.ts";
import {StatusCodes} from "https://deno.land/x/https_status_codes@v1.2.0/src/lib/main/code/status-codes.ts";
import {createNewUser, findUserByAttribute} from "./auth.storage.ts";
import {create} from "https://deno.land/x/djwt@v2.8/mod.ts";
import {KEY_ACCESS_TOKEN, KEY_REFRESH_TOKEN} from "../../../utils/jwt.key.ts";
import {logging} from "../../../core/helper/storage/index.ts";
import {LogType} from "../../../core/helper/enum/index.ts";
import {sendMail} from "../../../core/service/mail/index.ts";

export async function register(params: RegisterDTO){
    const salt = await bcrypt.genSalt(12);
    params.password = await bcrypt.hash(params.password,salt)
    const checkExistEmail = await findUserByAttribute('email',params.email)
    if(checkExistEmail){
        return new CustomError<string>({
            code: StatusCodes.BAD_REQUEST,
            message: 'Email Exist, please try another'
        })
    }
    const newUser = await createNewUser(params)
    if(!newUser){
        return new CustomError<string>({
            code: StatusCodes.BAD_REQUEST,
            message: "Create user failed, please try again late"
        })
    }
    return newUser;
}

export async function login(params: LoginDTO){
    const userLogin = await findUserByAttribute('email',params.email);
    if(!userLogin){
        return new CustomError<string>({
            code: StatusCodes.BAD_REQUEST,
            message: 'Email or Password Invalid, please try again'
        })
    }

    const isMatchPassword = await bcrypt.compare(params.password, userLogin.password);

    if(!isMatchPassword){
        return new CustomError<string>({
            code: StatusCodes.BAD_REQUEST,
            message: 'Email or Password Invalid, please try again'
        })
    }

    const payloadToken = {
        id: userLogin.id,
    }

    const payloadRefreshToken = {
        id: userLogin.id,
        timeStamp: new Date().getTime()
    }

    const userInfo = {
        id: userLogin.id,
        first_name: userLogin.firstName,
        sur_name: userLogin.surName,
        username: userLogin.userName,
        email: userLogin.email,
        avatar: userLogin.avatar,
        gender: userLogin.gender
    }
    const token = await create({ alg: "HS256", typ: "JWT" }, payloadToken, KEY_ACCESS_TOKEN);
    const refreshToken = await create({ alg: "HS256", typ: "JWT" }, payloadRefreshToken, KEY_REFRESH_TOKEN);

    logging(LogType.LOGIN,userLogin.id)     //Logging Login
    sendMail()
    return {
        access_token: token,
        refresh_token: refreshToken,
        userInformation: userInfo
    };
}