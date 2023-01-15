import { SMTPClient } from "https://deno.land/x/denomailer/mod.ts";

interface informationMail{
    to: string,
    subject: string,
    text: string,
    html: string,
}

const client = new SMTPClient({
    connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
            username: Deno.env.get("EMAIL_DOMAIN"),
            password: Deno.env.get("EMAIL_APP_PASSWORD"),
        }
    }
});

export async function sendMail() {
    await client.send({
        from: Deno.env.get("EMAIL_DOMAIN"),
        to: "truongvo.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
         content: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    return await client.close();
}