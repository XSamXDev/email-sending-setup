require('dotenv').config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});


(async function test() {
    try {
        await transporter.verify();
        console.log("Server is ready to take our messages");
    } catch (err) {
        console.error("Verification failed:", err);
    }

})();


async function sendMail() {
    try {
        const info = await transporter.sendMail({
            from: process.env.user, 
            to: process.env.to, 
            subject: "Testing ",
            text: "Hello world from NodeJS Testing",
            html: `<b>Hello ${process.env.to}</b>`,
            attachments: [{
                path:"image.jpg"
            },
            {
                filename:"test",
                path: "C:/Users/samee/OneDrive/Desktop/test.jpg"
            }
        ]
        });

        console.log("Message sent: %s", info.messageId);
    } catch (err) {
        console.error("Error while sending mail:", err);
    }
}
sendMail();

