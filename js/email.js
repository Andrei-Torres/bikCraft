function enviar(){
    let nome = (document.querySelector('#nome')).value;
    let email = (document.querySelector("#email")).value;
    let telefone = (document.querySelector("#telefone")).value;
    let msg = (document.querySelector("#espec")).value;

    enviar2(nome, email, telefone, msg);
}

function enviar2(nome, email, telefone ,msg){

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
        text: `Nome: ${nome} E-mail: ${email} Telefone: ${telefone} MSG: ${msg}`
    }).then(message =>{
        console.log(message);
    }).catch(err =>{
        console.log(err);
    });
}