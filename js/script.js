/*  Como iniciar o simple-slide.

new SimpleSlide({
    slide: 'principal', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });
  */
 if(window.SimpleSlide){

     new SimpleSlide({
         slide: 'quote', // nome do atributo data-slide="principal"
         time: 3700, // tempo de transição dos slides
        });
        
        new SimpleSlide({
            slide: 'portfolio', 
            nav: true, 
            time: 2500,
        });
    } 
 
// iniciando o simple-anime
if(window.SimpleAnime){
    new SimpleAnime();
}

//iniciando o simple-form
if(window.SimpleForm){
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'> <h2>Erro no envio!!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
    });
}