function saludar_hola(nombre){
    var txt;
    const hora = 21//new Date().getHours()
    if (hora<12)
        txt= "Buenos dias "+nombre
    else if (hora<20)
        txt= "Buenas tardes "+nombre
    else 
        txt= "Buenos noches "+nombre
    return txt;
}
export default saludar_hola;
