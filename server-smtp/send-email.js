const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 4321,
});

transporter.sendMail(
    {
        from: 'beth@example.com',
        to: 'laddie@example.com',
        subject: 'Hello',
        text: 'Hello World!'        
    },
    (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
            return;
        }
        console.log("Message Sent:", info);
    }
);