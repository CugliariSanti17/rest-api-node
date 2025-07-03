const API_URL = 'http://localhost:3000/api/products'

const form = document.getElementById('formPublicar');
const nombre = document.getElementById('nombreProducto');
const precio = document.getElementById('precioProducto');
const descripcion = document.getElementById('descripcionProducto');
const mensaje = document.getElementById('mensajeCrearProducto');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const nuevoProducto = {
        nombre: nombre.value.trim(),
        precio: parseFloat(precio.value),
        descripcion: descripcion.value.trim()
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevoProducto)
    })
    .then(res => res.json())
    .then(data => {
        if(data){
            mensaje.textContent = 'Producto creado correctamente';
            mensaje.style.color = 'green'
            form.reset();

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1000);
        }
    })
    .catch(error =>{
        mensaje.textContent = 'Error al conectar con el servidor';
        mensaje.style.color = 'red'
        console.error(`Error al crear el producto: ${error}`)
    });
})