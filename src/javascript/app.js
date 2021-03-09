
document.addEventListener('DOMContentLoaded',function(){
    cargarExpositorio();
})

async function cargarExpositorio(){

    const resultado = await fetch('./mercaderia.json');
    const bd = await resultado.json();

    const { remeras } = bd;

    const expositorio = document.querySelector('.expositorio');


    remeras.forEach(remera => {

        //crear clase proyecto
        const producto = document.createElement('DIV');
        producto.classList.add('producto');

        //insertar proyecto en expositorio 
        expositorio.appendChild(producto);

        //crear enlace
        const enlace = document.createElement('A');
        enlace.href=`${remera.link}`

        //crear imagen
        const imagen = document.createElement('IMG');
        imagen.classList.add(`${remera.clase}`);
        imagen.src=`${remera.ubicacion}`;

        //insertar imagen en link
        enlace.appendChild(imagen);

        //crear div producto informacion
        const informacion = document.createElement('DIV');
        informacion.classList.add('producto__informacion');

        //crear p de nombre
        const nombre = document.createElement('P');
        nombre.classList.add('producto__nombre');
        nombre.textContent = `${remera.nombre}`;

        //crear p de precio
        const precio = document.createElement('P');
        precio.classList.add('producto__precio');
        precio.textContent = `${remera.precio}`;

        //insertar parrafos en informacion
        informacion.appendChild(nombre);
        informacion.appendChild(precio);

        //insertar informacion a enlace
        enlace.appendChild(informacion);

        //insertar enlace en producto
        producto.appendChild(enlace);   


    });

    const grafico1 = document.createElement('DIV');
    grafico1.classList.add('grafico');
    grafico1.classList.add('grafico--camisas');
    expositorio.appendChild(grafico1);

    const grafico2 = document.createElement('DIV');
    grafico2.classList.add('grafico');
    grafico2.classList.add('grafico--node');
    expositorio.appendChild(grafico2);
    

}