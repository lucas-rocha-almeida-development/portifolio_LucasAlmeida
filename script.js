//função que ira mostrar e ocultar o menu barra=menu
let menuVisivel = false;
function MostrarOcultarMenu(){
    if(menuVisivel){
        document.getElementById("nav").classList="";
       menuVisivel = false;

    }else{
        //caso a pagina esteja responsiva ira retonar true, e sera aplicado a clase =responsivo,já pre-definida no css.
        document.getElementById("nav").classList="responsivo";
        menuVisivel = true;
    }
}

//função de ocultar menu, somente quando eu clicar em alguma opção do (menu=>inicio,skills,contato,portifolio)
function selecionar(){
document.getElementById("nav").classList="";
menuVisivel= false;

}

//função que ira aplicar animação das skills (porcentagem do aprendizado das skills)
function efeitoHabilidades(){
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        let habilidades = document.getElementsByClassName("progresso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("bootstrap");
        habilidades[3].classList.add("Oracle");
        habilidades[4].classList.add("isolgpd");
        habilidades[5].classList.add("comunicacao");
        habilidades[6].classList.add("proatividade");
        habilidades[7].classList.add("trabalhoequipe");
        habilidades[8].classList.add("persuasao");
        habilidades[9].classList.add("lider");
    }
}

//detector de scrolling para aplicar as animaçoes da barra de skills(habilidades)
window.onscroll= function(){
    efeitoHabilidades();
}
