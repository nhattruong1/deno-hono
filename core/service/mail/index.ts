import nodemailer from "npm:nodemailer@6.9.0"
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import fa from "https://deno.land/x/deno_libphonenumber@v1.9.20/index.js";

const env = config();

interface informationMail{
    to: string,
    subject: string,
    text: string,
    html: string,
}

const TRANSPORTER = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
        user: env.EMAIL_DOMAIN,
        pass: env.EMAIL_APP_PASSWORD,
    }
});


export async function sendMail() {
     TRANSPORTER.sendMail({
        from: env.EMAIL_DOMAIN,
        to: "truongvo.dev@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    },(error: any, info: any) => {
         if (error) {
             console.log(error);
         } else {
             console.log(`Email sent: ${info.response}`);
         }
     }
 );
}