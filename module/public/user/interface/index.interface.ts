import {Prisma} from "../../../../core/database/client/deno/index.d.ts";

export interface User {
    id?:          number;
    userName?:    string | null;
    email?:       string | null;
    firstName?:   string | null;
    surName?:     string | null;
    fullName?:    string | null;
    gender?:      string | null;
    birth?:       Date | null;
    avatar?:      string | null;
    cover?:      string | null;
    information?: Prisma.JsonValue;
    password?:    string;
    isActive?:    boolean;
    isDelete?:    boolean;
    createdAt?:   Date;
    updatedAt?:   Date;
}
