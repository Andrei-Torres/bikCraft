const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: "andrei.dev93@gmail.com",
        pass: "dcba_DCBA"
    }
});

transporter.sendMail({
        from: "Teste Andrei <andrei.dev93@gmail.com>",
        to: "andreisoarestorres@gmail.com",
        subject: "Teste sem ligação a web",
        text: "Na verdade da certo, mas preciso ir bem mais a fundo para aprender como fazer funcionar online" 
    }).then(message =>{
        console.log(message);
    }).catch(err =>{
        console.log(err);
    });