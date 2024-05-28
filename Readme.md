## Instalación del Proyecto

### Requisitos Previos
- Docker
- Docker Compose

### Pasos de Instalación
1. Clonar el repositorio:
   `git clone https://github.com/tu-usuario/tu-repositorio.git `
    `cd tu-repositorio `

2. Construir y levantar los contenedores con Docker Compose:

    `docker-compose up --build`

    La aplicación estará disponible en http://localhost:3000



# Políticas de Nomenclatura

Este documento establece las políticas de nomenclatura para el equipo de desarrollo. Estas políticas cubren la nomenclatura de bases de datos, variables, funciones, clases, y git.

## Tabla de Contenidos
1. [Bases de Datos](#bases-de-datos)
2. [Variables](#variables)
3. [Funciones](#funciones)
4. [Clases](#clases)
5. [Git](#git)

## Bases de Datos

### Nombres de Tablas
- Utilizar nombres en plural.
- Utilizar snake_case.
- Ejemplo: `usuarios`, `productos`, `ordenes`.

### Nombres de Columnas
- Utilizar snake_case.
- Prefijo `id_` para identificadores.
- Ejemplo: `id_usuario`, `nombre_producto`, `fecha_creacion`.

### Nombres de Índices
- Utilizar snake_case.
- Prefijo `idx_`.
- Ejemplo: `idx_usuario_email`, `idx_producto_categoria`.

### Nombres de Claves Extranjeras
- Utilizar snake_case.
- Prefijo `fk_`.
- Ejemplo: `fk_orden_usuario`, `fk_producto_categoria`.

## Variables

### Variables en JavaScript/TypeScript
- Utilizar camelCase para variables locales.
- Utilizar UPPER_SNAKE_CASE para constantes.
- Ejemplo: `let totalVentas = 0;`, `const MAX_USUARIOS = 100;`.

### Variables en Python
- Utilizar snake_case para variables locales.
- Utilizar UPPER_SNAKE_CASE para constantes.
- Ejemplo: `total_ventas = 0`, `MAX_USUARIOS = 100`.

## Funciones

### Funciones en JavaScript/TypeScript
- Utilizar camelCase.
- Nombres descriptivos que indiquen la acción realizada.
- Ejemplo: `function calcularTotalVentas() {}`, `const obtenerUsuarioPorId = (id) => {}`.

### Funciones en Python
- Utilizar snake_case.
- Nombres descriptivos que indiquen la acción realizada.
- Ejemplo: `def calcular_total_ventas():`, `def obtener_usuario_por_id(id):`.

## Clases

### Clases en JavaScript/TypeScript
- Utilizar PascalCase.
- Nombres que indiquen claramente el propósito de la clase.
- Ejemplo: `class Usuario {}`, `class ProductoService {}`.

### Clases en Python
- Utilizar PascalCase.
- Nombres que indiquen claramente el propósito de la clase.
- Ejemplo: `class Usuario:`, `class ProductoService:`.

## Git

### Nombres de Ramas
- Utilizar kebab-case.
- Prefijo `feature/` para nuevas funcionalidades.
- Prefijo `bugfix/` para correcciones de errores.
- Ejemplo: `feature/agregar-autenticacion`, `bugfix/correccion-login`.

### Commits
- Utilizar el presente del indicativo en inglés.
- Mensajes claros y concisos que indiquen el propósito del cambio.
- Ejemplo: `Add user authentication`, `Fix login issue`.

### Tags
- Utilizar versión semántica.
- Prefijo `v`.
- Ejemplo: `v1.0.0`, `v2.1.3`.

## Notas

- Las reglas de nomenclatura deben ser consistentes en todo el código base.
- Los nombres deben ser claros y descriptivos para facilitar la comprensión y el mantenimiento del código.

Estas políticas de nomenclatura ayudarán a mantener un código limpio y fácil de mantener, mejorando la colaboración dentro del equipo de desarrollo.
