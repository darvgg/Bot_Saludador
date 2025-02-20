const fecha = new Date();
const hora = fecha.getHours();

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

function saludar_genero_edad(genero,edad){
    var pro_nombre;
    if (edad >= 30){
        if (genero === 'M')
            pro_nombre= "señor";
        else if (genero === 'F')
            pro_nombre= "señora";
        else 
            pro_nombre= "señore";
    }
    else{
        if (genero === 'M')
            pro_nombre= "jovencito";
        else if (genero === 'F')
            pro_nombre= "jovencita";
        else 
            pro_nombre= "jovencite";
    }

    return pro_nombre;
}

function saludo(nombre, genero,edad){
    var mensaje;
    var inicio_saludo=saludar_hora(hora);
    var pronom=saludar_genero_edad(genero,edad);
    mensaje = inicio_saludo + " " + pronom + " " + nombre;
    return mensaje;
}
export default saludo;
