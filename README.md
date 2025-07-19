# Api Rest con NodeJS
## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego de editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## Documentacion de la API

### Obtener todos los productos

- **GET** `/api/products`
- **Descripcion:** Devuelve la lista de todos los productos.
- **Respuesta de ejemplo:**

```json
[
 {
    "id": "oY3K7Wzkcx2kEIzvPQoq",
    "nombre": "Camiseta básica",
    "precio": 4500,
    "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
    "categoria": ["ropa", "básicos"]
  },
  {
    "id": "JIwdEwLhQKqAEb0s0ZfW",
    "nombre": "Auriculares inalámbricos",
    "precio": 15900,
    "descripcion": "Auriculares con bluetooth 5.0 y hasta 8 horas de reproducción.",
    "categoria": ["tecnología", "audio"]
  }
]
```
---

### Buscar productos por nombre

- **GET** `/api/products/search?nombre=palabra`
- **Descripcion:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
    - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplos de uso:** `/api/products/search?nombre=camiseta`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "oY3K7Wzkcx2kEIzvPQoq",
        "nombre": "Camiseta básica",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```
---

### Obtener producto por ID

- **GET** `/api/products/:id`
- **Descripcion:** Devuelve un producto específico por su ID.
- **Parámetros:** 
    - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `/api/products/oY3K7Wzkcx2kEIzvPQoq`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "oY3K7Wzkcx2kEIzvPQoq" ,
        "nombre": "Camiseta básica",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```
---

### Crear un producto

- **POST** `/api/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
[
    {
        "nombre": "Camiseta básica",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```

- **Respuesta de ejemplo:**

```json
[
    {
        "id": "oY3K7Wzkcx2kEIzvPQoq" ,
        "nombre": "Camiseta básica",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```
---

### Eliminar un producto

- **DELETE** `/api/products/:id`
- **Descripcion:** Elimina un producto por su ID.
- **Parámetros:**
    - `id` (path, requerido): ID del producto a eliminar
- **Ejemplo de uso:** `/api/products/oY3K7Wzkcx2kEIzvPQoq`
- **Respuesta de ejemplo:**

```json
[
    {
        "id": "oY3K7Wzkcx2kEIzvPQoq" ,
        "nombre": "Camiseta básica",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```
---

### Actualizar un producto (PUT)
- **PUT** `/api/products/:id`
- **Descripcion:** Actualiza completamente un producto existente
- **Parámetros**
    - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
[
    {
        "nombre": "Camiseta básica actualizada",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```

-**Respuesta de ejemplo:**

```json
[
    {
        "id": "oY3K7Wzkcx2kEIzvPQoq",
        "nombre": "Camiseta básica actualizada",
        "precio": 4500,
        "descripcion": "Camiseta de algodón 100% con corte clásico, disponible en varios colores.",
        "categoria": ["ropa", "básicos"]
    }
]
```

> ⚠️ **Importante:** ⚠️ 
> Si dejas algunos de los campos vacios a la hora de actualizar un producto, estos seran borrados del documento.

---

## Codigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `401` -
- `403` -
- `404` - Not Found: Recurso no encontrado

---

## Estructura del proyecto

```
src/
├── Controllers/
│   └── products.controller.js
│ 
├── Models/
│   └── products.model.js
└── Routes/
    └── products.router.js

```

## Tecnologías utilizadas

- Node.js
- Express.js
- Express validator
- Cors
- Json Web Tokens (JWT)
- Firestore y Firebase
- Dotenv
- ES6 Modules