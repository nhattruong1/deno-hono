import {Redis} from "https://deno.land/x/upstash_redis@v1.19.1/mod.ts";
export const RedisClient = (() => {
    let instance: any;
    function createInstance() {
        const client = new Redis({
            url: Deno.env.get('CACHING_URL') || "",
            token: Deno.env.get('CACHING_KEY') || "",
        })
        return {
            set: (key: string, value: string, opts: object) => client.set(key, value,opts),
            get: (key: string) => client.get(key)
        }
    }
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();