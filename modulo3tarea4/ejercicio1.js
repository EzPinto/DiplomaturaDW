function cambiarColor(color) {
    var fondo = document.getElementById("contenedor");
    fondo.style.backgroundColor = color;
};

/*------------OPCION 2, SIN UTILIZAR onClick en HTML, Y CON MAS LINEAS DE CODIGO------------------------------------------------- */
 

/* var rojo = document.getElementsByTagName("button")[0];
    rojo.addEventListener("click", function cambiarColor() {
        var fondo = document.getElementById("contenedor");
            fondo.style.backgroundColor = "#ff0000";
});

var violeta = document.getElementsByTagName("button")[1];
    violeta.addEventListener("click", function cambiarColor() {
        var fondo = document.getElementById("contenedor");
            fondo.style.backgroundColor = "#8F00FF";
});

var azul = document.getElementsByTagName("button")[2];
    azul.addEventListener("click", function cambiarColor() {
        var fondo = document.getElementById("contenedor");
            fondo.style.backgroundColor = "#0000FF";
});

var blanco = document.getElementsByTagName("button")[3];
    blanco.addEventListener("click", function cambiarColor() {
        var fondo = document.getElementById("contenedor");
            fondo.style.backgroundColor = "#ffff";
});  */


/*-------------Intente utilizar este metodo, para revertir el uso del boton 
        y no me funciono; a que se deberia?----*/
        
        /* var rojo = document.getElementById("btn-rojo");
            rojo.addEventListener("click" , function fondoBlanco () {
                var fondo = document.getElementById("contenedor");
                if (fondo.style.backgroundColor = "ffff") {
                    fondo.style.backgroundColor = "ff0000"
                } else {
                    fondo.style.backgroundColor = "ffff"
                }
            } );  */



/*-----------Al intentar utilizar este formato; me ejecutaba la ultima funcion escrita con el ultimo color; 
y no me dejaba cambiar el resto. Porque puede ser?- ------------*/


   /*      function cambiarColor(color) {
         var fondo = document.getElementById("contenedor");
         fondo.style.backgroundColor = color;
    }

       var violeta = document.getElementsByTagName("button")[0];
        violeta.addEventListener("click", cambiarColor("#8F00FF"));

        var azul = document.getElementsByTagName("button")[1];
        azul.addEventListener("click", cambiarColor("#0000FF"));  */