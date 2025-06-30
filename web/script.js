
const API_URL = 'http://localhost:3000/api/products'
const contenedorProductos = document.getElementById('productsContainer')

const renderizarProductos = (productos) => {
    contenedorProductos.innerHTML = ''

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "product"

        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <strong>$${producto.precio}</strong>
            <button class="eliminar-btn" data-id="${producto.id}">Eliminar</button>
            <button class="editar-btn" data-id="${producto.id}">Editar</button>
        `

        contenedorProductos.appendChild(div);
    });

    const botonEliminar = document.querySelectorAll('.eliminar-btn')

    botonEliminar.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id')

            const confirmDelete = confirm('¿Estas seguro que querés eliminar este producto?');

            if (!confirmDelete) {
                return
            }

            fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            })
            .then((res) => res.json())
            .then(() => {
                fetch(API_URL)
                    .then(res => res.json())
                    .then(data => renderizarProductos(data))
                    .catch((error) => {
                        console.error('Error al eliminar producto:', error)
                    })
            })
        })
    })
};

fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
        renderizarProductos(data)
    })
    .catch((error) => {
        contenedorProductos.innerHTML = "<p>Error al cargar productos.</p>";
        console.error("Error:", error);
    })

