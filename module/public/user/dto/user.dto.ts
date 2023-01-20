import {IsString} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/typechecker/IsString.ts";
import {IsNotEmpty} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/common/IsNotEmpty.ts";
import {IsISO8601} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/string/IsISO8601.ts";
import {IsEnum} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/typechecker/IsEnum.ts";
import {Gender} from "../../../../core/helper/enum/index.ts";

export class UserDto {
    @IsString()
    firstName: string;

    @IsString()
    surName: string;

    @IsEnum(["MALE","FEMALE","CUSTOM"])
    gender: Gender;

    @IsISO8601()
    birth: Date;

}

