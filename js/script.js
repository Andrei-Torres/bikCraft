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