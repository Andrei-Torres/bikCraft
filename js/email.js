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
        text: "Nome:  E-mail:  Telefone:  MSG:" 
    }).then(message =>{
        console.log(message);
    }).catch(err =>{
        console.log(err);
    });