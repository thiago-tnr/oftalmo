const enviar = document.querySelector("#btn");
  
  window.onscroll = () => {  
      document.querySelector(".conteudo").style.backgroundColor = "black";
      if(window.pageYOffset == 0){
        clear();
      }
}
function clear(){
    document.querySelector(".conteudo").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function menuToggle(){
  let menuArea = document.querySelector('.menu-area');

  if(menuArea.style.width =="200px"){
    menuArea.style.width = "0px"
    document.querySelector(".open").src= "./images/menu.png"
  }else{
    menuArea.style.width = "200px"
    document.querySelector(".open").src= "./images/menu2.png"
  }
}
  const animation = document.querySelectorAll('[data-animate]');
  const anime = 'animate';   
 
  function animateScroll(){
     const janela = window.pageYOffset + (window.innerHeight * 0.88);
     animation.forEach(function(e){
         if(janela > e.offsetTop){
             e.classList.add(anime)
         }else{
             e.classList.remove(anime)
         }
     })
  }
  animateScroll();
   if(animation.length){
  window.addEventListener('scroll',function(){
     animateScroll();
  })
 }
 
enviar.addEventListener('click', (e) =>{
  let nome = document.querySelector("#nome").value;
  let tel = document.querySelector("#tel").value;
  let msg =  document.querySelector("#msg").value;
  if(tel.length < 9 || nome.length < 2 && msg.length < 2){
    e.preventDefault;
    alert("Preencha os campos em vermelho")
  }else{
  let texto = (`Olá, meu nome é ${nome}, meu telefone é ${tel} e eu gostaria de: ${msg}`)
  texto = window.encodeURIComponent(texto);
  let celular = 5537991640600
  window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
 }
});