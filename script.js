
function WorksAnimationOff() {
  let movingtext = document.getElementById("container-move-works")
  let textBefore = document.getElementById("div-name-box-works")
  let elementoAnimado = document.getElementById("text-move-works")


  if (movingtext.style.opacity = "100%") {
    movingtext.style.opacity = "0%"
    textBefore.style.opacity = "100%"
    elementoAnimado.style.animationPlayState = "paused";
  }

}

function WorksAnimationOn() {
  let movingtext = document.getElementById("container-move-works")
  let textBefore = document.getElementById("div-name-box-works")
  const elementoAnimado = document.getElementById("text-move-works")

  if (movingtext.style.opacity = "0%") {
    movingtext.style.opacity = "100%"
    textBefore.style.opacity = "0%"
    elementoAnimado.style.animationPlayState = "running";
  }

}

function sizeBoxLargeWorks() {
  let worksContainer = document.getElementById("works-menu")
  worksContainer.style.width = "100%";
  worksContainer.style.height = "100%";
}

function sizeBoxSmallWorks() {
  let worksContainer = document.getElementById("works-menu")
  worksContainer.style.width = "95%";
  worksContainer.style.height = "95%";
}


function SkillsAnimationOff() {
  let movingtext = document.getElementById("container-move-skills")
  let textBefore = document.getElementById("div-name-box-skills")
  let elementoAnimado = document.getElementById("text-move-skills")


  if (movingtext.style.opacity = "100%") {
    movingtext.style.opacity = "0%"
    textBefore.style.opacity = "100%"
    elementoAnimado.style.animationPlayState = "paused";
  }

}

function SkillsAnimationOn() {
  let movingtext = document.getElementById("container-move-skills")
  let textBefore = document.getElementById("div-name-box-skills")
  let elementoAnimado = document.getElementById("text-move-skills")

  if (movingtext.style.opacity = "0%") {
    movingtext.style.opacity = "100%"
    textBefore.style.opacity = "0%"
    elementoAnimado.style.animationPlayState = "running";
  }

}

function sizeBoxLargeSkills() {
  let worksContainer = document.getElementById("skills-menu")
  worksContainer.style.width = "100%";
  worksContainer.style.height = "100%";
}

function sizeBoxSmallSkills() {
  let worksContainer = document.getElementById("skills-menu")
  worksContainer.style.width = "95%";
  worksContainer.style.height = "95%";
}


function AboutAnimationOff() {
  let movingtext = document.getElementById("container-move-about")
  let textBefore = document.getElementById("div-name-box-about")
  let elementoAnimado = document.getElementById("text-move-about")


  if (movingtext.style.opacity = "100%") {
    movingtext.style.opacity = "0%"
    textBefore.style.opacity = "100%"
    elementoAnimado.style.animationPlayState = "paused";
  }

}

function AboutAnimationOn() {
  let movingtext = document.getElementById("container-move-about")
  let textBefore = document.getElementById("div-name-box-about")
  let elementoAnimado = document.getElementById("text-move-about")

  if (movingtext.style.opacity = "0%") {
    movingtext.style.opacity = "100%"
    textBefore.style.opacity = "0%"
    elementoAnimado.style.animationPlayState = "running";
  }

}

function sizeBoxLargeAbout() {
  let worksContainer = document.getElementById("about-menu")
  worksContainer.style.width = "100%";
  worksContainer.style.height = "100%";
}

function sizeBoxSmallAbout() {
  let worksContainer = document.getElementById("about-menu")
  worksContainer.style.width = "95%";
  worksContainer.style.height = "95%";
}




var imagemAtual = 1;
document.getElementById('txt-banner-id').classList.add("txt-banner-bf");

function DarkMode() {
 
  document.body.classList.toggle("dark-mode");
  document.querySelector('nav').classList.toggle("dark-mode");
  document.querySelector('h3').classList.toggle("dark-mode");

 
  document.getElementById('works-menu').classList.toggle("box-dark-mode")
  document.getElementById('works-menu').classList.toggle("name-box-dm")


  document.getElementById('skills-menu').classList.toggle("box-dark-mode")
  document.getElementById('skills-menu').classList.toggle("name-box-dm")

  document.getElementById('about-menu').classList.toggle("box-dark-mode")
  document.getElementById('about-menu').classList.toggle("name-box-dm")

  document.querySelector('.toggle-p-dm').classList.toggle("name-box-dm")

  
  document.querySelector('.floating-button').classList.toggle("floating-button-dm")

  
  document.querySelector('.svg-function').classList.toggle("svg-dm")
  
  
  const imgJava = document.getElementById("img-java");
  const imgC = document.getElementById("img-c");
  const imgPython = document.getElementById("img-python")
  const imgCpp = document.getElementById("img-c++")
  const imgCsharp = document.getElementById("img-csharp")
  
  const imgJs = document.getElementById("img-js")
  const imgBootstrap = document.getElementById("img-bootstrap")
  const imgIllustrator = document.getElementById("img-illustrator")
  const imgFigma = document.getElementById("img-figma")
  
  const imgInfo = document.getElementById("img-info-id")

  const imgProfile = document.getElementById('txt-banner-id');

  if (imagemAtual === 1) {
    imgProfile.classList.remove("txt-banner-bf");
    imgJava.src = './icons/Java-dm.png';
    imgC.src = './icons/C-dm.png';
    imgPython.src = './icons/Python-dm.png'
    imgCpp.src = './icons/C++dm.png'
    imgCsharp.src = './icons/Csharp-dm.png'

    imgJs.src = './icons/Javascript-dm.png'
    imgBootstrap.src = './icons/Bootstrap-dm.png'
    imgIllustrator.src = './icons/Illustrator-dm.png'
    imgFigma.src = './icons/Figma-dm.png'

    imgInfo.src = './icons/img-info-dm.png'
    imagemAtual = 2;
  } 
  else if (imagemAtual === 2) {
    imgProfile.classList.add("txt-banner-bf");
    imgJava.src = './icons/Java.png';
    imgC.src = './icons/C.png'
    imgPython.src = './icons/Python.png'
    imgCpp.src = './icons/C++.png'
    imgCsharp.src = './icons/Csharp.png'

    imgJs.src = './icons/js.png'
    imgBootstrap.src = './icons/boostrap.png'
    imgIllustrator.src = './icons/Illustrator.png'
    imgFigma.src = './icons/Figma.png'

    imgInfo.src = './icons/img-info.png'
    imagemAtual = 1;
  }
}




const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
  let value = e.target.value;
  let cleanValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
  let maskedValue = '';

  if (cleanValue.length < 3) {
    maskedValue = `(${cleanValue}`;
  } else if (cleanValue.length < 6) {
    maskedValue = `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
  } else if (cleanValue.length < 10) {
    maskedValue = `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6)}`;
  } else {
    maskedValue = `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2, 6)}-${cleanValue.slice(6, 10)}`;
  }

  e.target.value = maskedValue;
});


var inputElement = document.getElementById("input-nome");

inputElement.addEventListener('input', function() { // Adicionando um evento de entrada ao input
  var nome = inputElement.value;

  if (nome.length > 0) {
    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    inputElement.value = nome;
  }
});

