import { barcelona, londres, paris, roma } from "./ciudades.js";


//Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


//Agregar evento click a cada enlace

enlaces.forEach(function(enlace){
    enlace.addEventListener('click', function(){
        //Remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })
        //Agregar active al que corresponde

        this.classList.add('active')

        //Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    })
        

//Agregar active al que corresponde

//Traer informacion del objeto correspondiente a la eleccion

//Mostrar el contenido en el DOM
})

//Funcion para traer la informacion desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace]
}