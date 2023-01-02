import {IsString} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/typechecker/IsString.ts";
import {IsNotEmpty} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/common/IsNotEmpty.ts";
import {IsNumberString} from "https://deno.land/x/deno_class_validator@v1.0.0/src/decorator/string/IsNumberString.ts";

export class GetThreadDTO {
    @IsNumberString()
    @IsNotEmpty()
    page: number;

    @IsNumberString()
    @IsNotEmpty()
    size: number;

    @IsString()
    @IsNotEmpty()
    search: string;
}