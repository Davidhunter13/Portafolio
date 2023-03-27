// modo oscuro

window.addEventListener('load', function() {
    const checkbox = document.getElementById('dn');
    const body = document.getElementById('page-body');

    if (checkbox.checked) {
      body.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
    }
  });

  const checkbox = document.getElementById('dn');
  const body = document.getElementById('page-body');

  checkbox.addEventListener('change', function() {
    if (this.checked) {
      body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    }
  });

  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  checkbox.checked = isDarkMode;
  if (isDarkMode) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }

// recarga pagina

if(performance.navigation.type == 1) {
    window.location.href = "index.html";
}


const scrollDown = document.querySelector('.barra-navegacion');

function checkScroll() {
    if (window.pageYOffset === 0) {
        scrollDown.classList.remove('barra-navegacion1');
        
    } else {
        scrollDown.classList.add('barra-navegacion1');
    }
}

window.addEventListener('scroll', checkScroll);

function clip100(){

    var menu =document.getElementById("menu");

    menu.classList.add('menu1')

}

function clip0(){

    var menu =document.getElementById("menu");

    menu.classList.remove('menu1')

}

// animacion scroll

const links = document.querySelectorAll('nav a');

for (const link of links) {
    link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    const targetHeight = targetElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollPosition = targetPosition - (windowHeight - targetHeight) / 2;

    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
        });
    });
}


// scrollquitar

// Obtener los elementos del menú desplegable
var enlaces = document.querySelectorAll("nav ul li a");

// Agregar un controlador de eventos de clic a cada elemento del menú desplegable
enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
    // Ocultar el menú desplegable
    document.getElementById("menu").classList.remove('menu1');
    });
});



// typed

const typed = new Typed('.typed',{

    strings:[
        
            '<b class="escritura">DESARROLLADOR FRONT-END</b>',
            '<b class="escritura">PROGRAMADOR</b>',
            '<b class="escritura">DESARROLLADOR BACK-END</b>',
            '<b class="escritura">DISEÑADOR</b>'
],

//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
shuffle: false, // Alterar el orden en el que escribe las palabras.
backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
loop: true, // Repetir el array de strings
loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
showCursor: true, // Mostrar cursor palpitanto
cursorChar: '|', // Caracter para el cursor
contentType: 'html', // 'html' o 'null' para texto sin formato


})

function dise() {

    var diseño=document.getElementById("diseño");
    var desarrollo=document.getElementById("desarrollo");
    var personal =document.getElementById("personales");
    var btn_diseño =document.getElementById("btn-diseño");
    var btn_desarrollo =document.getElementById("btn-desarrollo");
    var btn_personal =document.getElementById("btn-personal");

    btn_diseño.classList.add('blanco')
    btn_desarrollo.classList.remove('blanco')
    btn_desarrollo.classList.remove('btn-desarrollo')
    btn_personal.classList.remove('blanco')

    diseño.classList.remove('remove');
    diseño.classList.add('add');

    desarrollo.classList.remove('add');
    desarrollo.classList.add('remove');

    personal.classList.remove('add');
    personal.classList.add('remove');
    
}

function des() {

    var diseño=document.getElementById("diseño");
    var desarrollo=document.getElementById("desarrollo");
    var personal =document.getElementById("personales");
    var btn_diseño =document.getElementById("btn-diseño");
    var btn_desarrollo =document.getElementById("btn-desarrollo");
    var btn_personal =document.getElementById("btn-personal");

    btn_diseño.classList.remove('blanco')
    btn_desarrollo.classList.add('blanco')
    btn_desarrollo.classList.remove('btn-desarrollo')
    btn_personal.classList.remove('blanco')

    desarrollo.classList.remove('remove');
    desarrollo.classList.add('add');

    diseño.classList.remove('add');
    diseño.classList.add('remove');

    personal.classList.remove('add');
    personal.classList.add('remove');
    
    
}


function per() {

    var diseño=document.getElementById("diseño");
    var desarrollo=document.getElementById("desarrollo");
    var personal =document.getElementById("personales");
    var btn_diseño =document.getElementById("btn-diseño");
    var btn_desarrollo =document.getElementById("btn-desarrollo");
    var btn_personal =document.getElementById("btn-personal");

    btn_diseño.classList.remove('blanco')
    btn_desarrollo.classList.remove('blanco')
    btn_personal.classList.add('blanco')
    btn_desarrollo.classList.remove('btn-desarrollo')

    personal.classList.remove('remove');
    personal.classList.add('add');

    desarrollo.classList.remove('add');
    desarrollo.classList.add('remove');

    diseño.classList.remove('add');
    diseño.classList.add('remove');

    
}




function Pri(){

    var primaria1=document.getElementById("primaria");
    var secundaria1=document.getElementById("secundaria");
    var cine1=document.getElementById("cine");
    var desarrollo1=document.getElementById("desarrolloyanalisis");


    primaria1.classList.remove('arriba');
    primaria1.classList.add('abajo');

    secundaria1.classList.remove('abajo');
    secundaria1.classList.add('arriba');

    cine1.classList.remove('abajo');
    cine1.classList.add('arriba');

    desarrollo1.classList.remove('abajo');
    desarrollo1.classList.add('arriba');



    var btnpri=document.getElementById("btnpri");
    var btnsec=document.getElementById("btnsec");
    var btncine=document.getElementById("btncine");
    var btndes=document.getElementById("btndesarrollo");

    
    btnpri.classList.add('salir1');
    btnsec.classList.remove('salir2');
    btncine.classList.remove('salir3');
    btndes.classList.remove('salir');
    btndes.classList.add('removercolor');


}


function Sec(){

    var primaria1=document.getElementById("primaria");
    var secundaria1=document.getElementById("secundaria");
    var cine1=document.getElementById("cine");
    var desarrollo1=document.getElementById("desarrolloyanalisis");



    secundaria1.classList.remove('arriba');
    secundaria1.classList.add('abajo');

    primaria1.classList.remove('abajo');
    primaria1.classList.add('arriba');

    cine1.classList.remove('abajo');
    cine1.classList.add('arriba');

    desarrollo1.classList.remove('abajo');
    desarrollo1.classList.add('arriba');


    var btnpri=document.getElementById("btnpri");
    var btnsec=document.getElementById("btnsec");
    var btncine=document.getElementById("btncine");
    var btndes=document.getElementById("btndesarrollo");

    
    btnpri.classList.remove('salir1');
    btnsec.classList.add('salir2');
    btncine.classList.remove('salir3');
    btndes.classList.remove('salir');
    btndes.classList.add('removercolor');


}


function cineytv(){

    var primaria1=document.getElementById("primaria");
    var secundaria1=document.getElementById("secundaria");
    var cine1=document.getElementById("cine");
    var desarrollo1=document.getElementById("desarrolloyanalisis");



    cine1.classList.remove('arriba');
    cine1.classList.add('abajo');

    primaria1.classList.remove('abajo');
    primaria1.classList.add('arriba');

    secundaria1.classList.remove('abajo');
    secundaria1.classList.add('arriba');
    
    desarrollo1.classList.remove('abajo');
    desarrollo1.classList.add('arriba');

    var btnpri=document.getElementById("btnpri");
    var btnsec=document.getElementById("btnsec");
    var btncine=document.getElementById("btncine");
    var btndes=document.getElementById("btndesarrollo");

    
    btnpri.classList.remove('salir1');
    btnsec.classList.remove('salir2');
    btncine.classList.add('salir3');
    btndes.classList.remove('salir');
    btndes.classList.add('removercolor');   

}


function desanalisis(){

    var primaria1=document.getElementById("primaria");
    var secundaria1=document.getElementById("secundaria");
    var cine1=document.getElementById("cine");
    var desarrollo1=document.getElementById("desarrolloyanalisis");



    desarrollo1.classList.remove('arriba');
    desarrollo1.classList.add('abajo');

    primaria1.classList.remove('abajo');
    primaria1.classList.add('arriba');

    cine1.classList.remove('abajo');
    cine1.classList.add('arriba');

    secundaria1.classList.remove('abajo');
    secundaria1.classList.add('arriba');

    var btnpri=document.getElementById("btnpri");
    var btnsec=document.getElementById("btnsec");
    var btncine=document.getElementById("btncine");
    var btndes=document.getElementById("btndesarrollo");

    
    btnpri.classList.remove('salir1');
    btnsec.classList.remove('salir2');
    btncine.classList.remove('salir3');
    btndes.classList.add('salir');
    btndes.classList.remove('removercolor');


}



function supervisor1(){

    var expe=document.getElementById("supervisor");
    var expe1=document.getElementById("desarrolador_consejo");
    var expe2=document.getElementById("back");
    var expe3=document.getElementById("front");

    expe3.classList.remove('ver');
    expe2.classList.remove('ver');
    expe.classList.add('ver');
    expe1.classList.remove('ver');

    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.remove('opacidad');
    opc1.classList.add('opacidad');
    opc2.classList.add('opacidad');
    opc3.classList.add('opacidad');
}

function supervisor2(){

    var expe=document.getElementById("supervisor");

    expe.classList.remove('ver');

        var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.remove('opacidad');
    opc1.classList.remove('opacidad');
    opc2.classList.remove('opacidad');
    opc3.classList.remove('opacidad');
}


function desarro1(){

    var expe1=document.getElementById("desarrolador_consejo");
    var expe=document.getElementById("supervisor");
    var expe2=document.getElementById("back");
    var expe3=document.getElementById("front");

    expe3.classList.remove('ver');
    expe2.classList.remove('ver');
    expe1.classList.add('ver');
    expe.classList.remove('ver');

    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.add('opacidad');
    opc1.classList.remove('opacidad');
    opc2.classList.add('opacidad');
    opc3.classList.add('opacidad');

    
}

function desarro2(){

    var expe1=document.getElementById("desarrolador_consejo");

    expe1.classList.remove('ver');
    
    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.remove('opacidad');
    opc1.classList.remove('opacidad');
    opc2.classList.remove('opacidad');
    opc3.classList.remove('opacidad');
}


function back1(){

    var expe1=document.getElementById("desarrolador_consejo");
    var expe=document.getElementById("supervisor");
    var expe2=document.getElementById("back");
    var expe3=document.getElementById("front");

    expe3.classList.remove('ver');
    expe1.classList.remove('ver');
    expe.classList.remove('ver');
    expe2.classList.add('ver');

    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.add('opacidad');
    opc1.classList.add('opacidad');
    opc2.classList.remove('opacidad');
    opc3.classList.add('opacidad');
}

function back2(){

    var expe2=document.getElementById("back");

    expe2.classList.remove('ver');

    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.remove('opacidad');
    opc1.classList.remove('opacidad');
    opc2.classList.remove('opacidad');
    opc3.classList.remove('opacidad');
}

function front1(){

    var expe1=document.getElementById("desarrolador_consejo");
    var expe=document.getElementById("supervisor");
    var expe2=document.getElementById("back");
    var expe3=document.getElementById("front");

    expe1.classList.remove('ver');
    expe.classList.remove('ver');
    expe2.classList.remove('ver');
    expe3.classList.add('ver');

    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.add('opacidad');
    opc1.classList.add('opacidad');
    opc2.classList.add('opacidad');
    opc3.classList.remove('opacidad');
}

function front2(){

    var expe3=document.getElementById("front");

    expe3.classList.remove('ver');
    
    var opc=document.getElementById("supervisor1");
    var opc1=document.getElementById("desarrolador_consejo1");
    var opc2=document.getElementById("back1");
    var opc3=document.getElementById("front1");

    opc.classList.remove('opacidad');
    opc1.classList.remove('opacidad');
    opc2.classList.remove('opacidad');
    opc3.classList.remove('opacidad');
}


const miDiv = document.getElementById('miDiv');

miDiv.addEventListener('click', () => {
  miDiv.classList.toggle('dark');
});