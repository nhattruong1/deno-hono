import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";

interface informationMail{
    to: string,
    subject: string,
    text: string,
    html: string,
}
const client = new SmtpClient();
console.log(Deno.env.get("EMAIL_DOMAIN"))
console.log(Deno.env.get("EMAIL_APP_PASSWORD"))
await client.connectTLS({
    hostname: "smtp.gmail.com",
    port: 465,
    username: Deno.env.get("EMAIL_DOMAIN"),
    password: Deno.env.get("EMAIL_APP_PASSWORD"),
});

export async function sendMail() {
    await client.send({
        from: Deno.env.get("EMAIL_DOMAIN"),
        to: "truongvo.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        content: "Hello world?", // plain text body
    });

    return await client.close();
}