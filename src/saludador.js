const hora = new Date().getHours();

function saludar_hora(){
    var txt;
    if (hora<12)
        txt= "Buenos dias";
    else if (hora<20)
        txt= "Buenas tardes";
    else 
        txt= "Buenos noches";
    return txt;
}

function saludar_genero(genero){
    var pro_nombre;
    if (genero === 'M')
        pro_nombre= "Señor";
    else if (genero === 'F')
        pro_nombre= "Señora";
    else 
        pro_nombre= "Señore";
    return pro_nombre;
}

function saludo(nombre, genero){
    var mensaje;
    inicio_saludo=saludar_hora(hora);
    pronom=saludar_genero(genero);
    mensaje = inicio_saludo + " " + pronom + " " + nombre;
    return mensaje;
}
export default saludo;
