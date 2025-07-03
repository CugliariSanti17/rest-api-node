const API_URL = 'http://localhost:3000/api/products'
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const form = document.getElementById('formEditar');
const nombre = document.getElementById('nombre');
const precio = document.getElementById('precio');
const descripcion = document.getElementById('descripcion')
const mensaje = document.getElementById('mensaje')

fetch(`${API_URL}/${id}`)
.then(res => res.json())
.then(data =>{
    nombre.value = data.nombre;
    precio.value = data.precio;
    descripcion.value = data.descripcion;
})
.catch(error =>{
    mensaje.textContent = 'Error al cargar el producto';
    console.error(error)
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const productoActualizado = {
        nombre: nombre.value,
        precio: precio.value,
        descripcion: descripcion.value
    };

    fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productoActualizado)
    })
    .then(res => res.json())
    .then(() =>{
        mensaje.textContent = 'Producto actualizado correctamente'
        mensaje.style.color = 'green'

        setTimeout(() => {
            window.location.href = "index.html"
        }, 1000);
    })
    .catch(error =>{
        mensaje.textContent = 'Error al actualizar el producto';
        mensaje.style.color = 'red'
        console.error(error)
    });
});