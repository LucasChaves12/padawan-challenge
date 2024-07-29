# padawan-challenge

# GraphQL To-Do API

Esta es una implementación de una API de lista de tareas (to-do list) utilizando Node.js y Apollo Server.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/LucasChaves12/padawan-challenge.git
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Instala las dependencias de desarrollo para las pruebas:
    ```bash
    npm install --save-dev jest supertest apollo-server-testing
    ```

## Ejecución

Para ejecutar el servidor de desarrollo, utiliza el siguiente comando:

```bash
node index.js
```

## Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando: 

```bash
npm test
```

##  Uso 

Puedes usar la interfaz de GraphiQL para probar las operaciones GraphQL. Aquí hay algunos ejemplos de consultas y mutaciones que puedes usar.

### Crear una nueva tarea

```graphql
mutation {
  createTask(content: "Become a jedi") {
    id
    content
    completed
  }
}
```
### Obtener la lista de tareas

```graphql
query {
  tasks {
    id
    content
    completed
  }
}
```
### Actualizar una tarea existente

```graphql
mutation {
  updateTask(id: 66, content: "Execute order", completed: true) {
    id
    content
    completed
  }
}
```

### Eliminar una tarea

```graphql
mutation {
  deleteTask(id: 1)
}
```
