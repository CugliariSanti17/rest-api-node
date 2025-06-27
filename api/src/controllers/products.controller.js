
const products = [
    {
        id: 1,
        nombre: "Camiseta básica",
        precio: 4500,
        descripcion: "Camiseta de algodón 100% con corte clásico, disponible en varios colores."
    },
    {
        id: 2,
        nombre: "Auriculares inalámbricos",
        precio: 15900,
        descripcion: "Auriculares con bluetooth 5.0 y hasta 8 horas de reproducción."
    },
    {
        id: 3,
        nombre: "Mochila urbana",
        precio: 9800,
        descripcion: "Mochila resistente al agua con compartimento para notebook de 15 pulgadas."
    },
    {
        id: 4,
        nombre: "Lámpara LED de escritorio",
        precio: 6200,
        descripcion: "Lámpara con brazo flexible, luz regulable y puerto USB para cargar dispositivos."
    },
    {
        id: 5,
        nombre: "Mouse gamer RGB",
        precio: 8400,
        descripcion: "Mouse ergonómico con iluminación RGB y hasta 7200 DPI ajustables."
    },
    {
        id: 6,
        nombre: "Termo acero inoxidable 1L",
        precio: 7900,
        descripcion: "Termo de alta duración que mantiene la temperatura por hasta 12 horas."
    },
    {
        id: 7,
        nombre: "Teclado mecánico retroiluminado",
        precio: 18500,
        descripcion: "Teclado con switches blue, iluminación RGB y estructura metálica."
    },
    {
        id: 8,
        nombre: "Smartwatch deportivo",
        precio: 23000,
        descripcion: "Reloj inteligente con medición de ritmo cardíaco, pasos y resistencia al agua."
    },
    {
        id: 9,
        nombre: "Parlante portátil bluetooth",
        precio: 11200,
        descripcion: "Parlante compacto con sonido estéreo, batería de 10 horas y entrada auxiliar."
    },
    {
        id: 10,
        nombre: "Cargador rápido USB-C",
        precio: 3700,
        descripcion: "Cargador compatible con carga rápida 18W para dispositivos Android y iOS."
    }
];

export const getAllProducts = (req, res) => {
    res.json(products)
};

export const getProductById = (req, res) => {
    const { id } = req.params

    const product = products.find((product) => product.id == id)

    if (!product) {
        res.status(404).json({ error: 'Error al encontrar el producto.' })
    }

    res.json(product)
};

export const postProduct = (req, res) => {
    const { nombre, precio, descripcion } = req.body

    const product = {
        id: products.length + 1,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    }

    product.push(products)
    res.status(201).send(`Producto guardado: ${product}`)
};

export const putProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10)
    const productIndex = products.findIndex((product) => product.id == productId)

    if (productIndex === -1) {
        res.status(404).json({ error: 'El producto no fue encontrado' })
    }

    const { nombre, precio, descripcion } = req.body

    products[productIndex] = { nombre: nombre, precio: precio, descripcion: descripcion }
    res.send(`Producto modificado: ${products[productIndex]}`)
};

export const deleteProduct = (req, res) => {
    const productId = parseInt(req.params.id, 10)
    const productIndex = products.findIndex((product) => product.id == productId)

    if (productIndex == -1) {
        res.status(404).json({ error: 'El producto no fue encontrado' })
    }

    //const deletedProduct = products[productIndex]

    const deletedProduct = products.splice(productIndex, 1)
    res.status(200).json(deletedProduct)
};