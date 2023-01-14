import {IsString} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/typechecker/IsString.ts";
import {IsNotEmpty} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/common/IsNotEmpty.ts";
import {IsEmail} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/string/IsEmail.ts";

export class RegisterDTO {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class LoginDTO extends RegisterDTO {}