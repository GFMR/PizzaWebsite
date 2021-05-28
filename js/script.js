let btnMenuOpen = document.getElementById('btnMenuOpen'),
    btnMenuClose = document.getElementById('btnMenuClose'),
    navigation = document.getElementById('navigation'),
    enlaces = document.querySelector('.navigation--list'),
    nav = document.getElementById('nav');

btnMenuOpen.addEventListener('click', function() {
    navigation.classList.add('active');
    navigation.style.transitionDelay = "0";
});

btnMenuClose.addEventListener('click', function() {
    navigation.classList.remove('active');
});

enlaces.addEventListener('click', function() {
    navigation.classList.remove('active');
    navigation.style.transitionDelay = "0.5s";
});



let contenedor = document.querySelector(".slider-container"),
    btnIzquierdo = document.querySelector("#arrowLeft"),
    btnDerecho = document.querySelector("#arrowRight");

btnDerecho.addEventListener('click', function () {
    contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener('click', function () {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});



let formulario = document.getElementById("formulario");

    let validar = (e)=>{

        let email = document.getElementById("nombre"),
            nombre = document.getElementById("email"),
            comentario = document.getElementById("comentarios"),
            alertSuccess = document.getElementById("alertSuccess")
            alertError = document.getElementById("alertError")

        if(email.value ==0 || nombre.value ==0 || comentario.value == 0){
            e.preventDefault();
            alertError.classList.remove("hide");
            alertError.classList.add("show");

            setTimeout(function(){
                alertError.classList.remove("show");
                alertError.classList.add("hide");
            }, 2000)

        } else {
            e.preventDefault();
            alertSuccess.classList.remove("hide");
            alertSuccess.classList.add("show");

            setTimeout(function(){
                alertSuccess.classList.remove("show");
                alertSuccess.classList.add("hide");
            }, 2000)

            email.value = "";
            nombre.value = "";
            comentario.value = "";
        }

    }

    formulario.addEventListener("submit", validar);




    var btnTop = document.getElementById("btn-top");

    window.addEventListener("scroll", function (){
        var scroll = document.documentElement.scrollTop

        if(scroll > 100) {
            btnTop.classList.add("show");

        }else{
            btnTop.classList.remove("show");
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo(0,0);
    });

    



