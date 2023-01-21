import {loadENV} from "./env.ts";
loadENV()
const encoder = new TextEncoder()
const SUP_ACCESS_TOKEN = encoder.encode(Deno.env.get("SECRET_JWT_ACCESS_TOKEN"));
const SUP_REFRESH_TOKEN = encoder.encode(Deno.env.get("SECRET_JWT_REFRESH_TOKEN"));

export const KEY_ACCESS_TOKEN = await crypto.subtle.importKey(
    "raw",
    SUP_ACCESS_TOKEN,
    {name: "HMAC", hash: "SHA-256"},
    true,
    ["sign", "verify"],
)
export const KEY_REFRESH_TOKEN = await crypto.subtle.importKey(
    "raw",
    SUP_REFRESH_TOKEN,
    {name: "HMAC", hash: "SHA-256"},
    true,
    ["sign", "verify"],
)