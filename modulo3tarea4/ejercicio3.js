var alumnos = [
    {  
      nombre: 'Juan Gomez',  
      nota: 7  
    }, {  
      nombre: 'Pedro Rodriguez',  
      nota: 4  
    }, {  
      nombre: 'Roxana García',  
      nota: 8  
    }, {  
      nombre: 'Luciano Lopez',  
      nota: 5  
    }, {  
      nombre: 'Fernanda Gimenez',  
      nota: 6
    }, {  
      nombre: 'Florencia Martinez',  
      nota: 10  
    }, {
        nombre: 'Raul Sanchez',  
      nota: 7  
    }, {  
      nombre: 'Sandra Figueroa',  
      nota: 8  
    }];

 const notas = alumnos.filter(function(element) {
     return element.nota > 6;
 })

 for (i=0; i<notas.length; i++) {
     document.write (`${notas[i]["nombre"]} aprobo con ${notas[i]["nota"]}.<br>`);

 }
