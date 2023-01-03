import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

export function loadENV() {
    try {
        config({ export: true });
    } catch (error) {
        console.warn("Failed to read environment variables from \".env\" file,");
        console.info("are you running in a Deno Deploy environment? This is an expected error, so it works only with \"Deno.env\".");
    }
}