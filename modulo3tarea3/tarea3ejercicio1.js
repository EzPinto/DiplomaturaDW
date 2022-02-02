let distancia = prompt ("Escriba la distancia en metros");
//distancia = parseInt(distancia);

if (distancia >= 0 && distancia <= 1000) {
    document.write("Ir a pie");
} else {
    if (distancia >= 1001 && distancia <= 10000) {
        document.write("Ir en bicicleta");
    } else {
    if (distancia >= 10001 && distancia <= 30000) {
        document.write("Ir en colectivo");
    } else {
    if (distancia >= 30001 && distancia <= 100000) {
        document.write("Ir en auto");
    } else {
    if (distancia >= 100001) {
        document.write("Ir en avion");
    } else {
    if (distancia <= -1) {
        document.write("Viajar en el tiempo");
    }}}}}};

  /*   switch (distancia) {
        case (distancia < 0): document.write("viajar en el tiempo");
        break;
        case (distancia < 1000): document.write("Ir a pie");
        break;
        case (distancia < 10000): document.write("Ir en bicicleta");
        break;
        case (distancia < 30000): document.write("Ir en colectivo");
        break;
        case (distancia < 100000): document.write("Ir en auto ");
        break;
        case (distancia > 100000): document.write("Ir en avion");
        break;
    } */