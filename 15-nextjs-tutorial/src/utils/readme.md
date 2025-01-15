### **¿Qué son las Server Actions en React/Next.js?**

Las **Server Actions** son una característica de **Next.js** para manejar lógica del lado del servidor directamente desde los componentes del frontend sin tener que crear rutas de API explícitas. Al marcar una función con `"use server"`, indicas que esa función debe ejecutarse en el servidor, no en el cliente.

Esto permite operaciones como:

- Leer o escribir archivos en el servidor.
- Consultar bases de datos.
- Enviar correos electrónicos.
- Evitar exponer información sensible al cliente.

---

### **Explicación del Código**

#### 1. **Creación de Usuario (`createUser`)**

```typescript
export const createUser = async (formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const newUser: User = { firstName, lastName, id: Date.now().toString() };
  await saveUser(newUser);
  console.log(newUser);
};
```

- La función `createUser` toma un objeto `FormData`, que contiene los datos del formulario enviado por el usuario.
- Extrae `firstName` y `lastName` del formulario.
- Crea un objeto `User` con un identificador único basado en la marca de tiempo actual (`Date.now().toString()`).
- Llama a la función `saveUser` para guardar el nuevo usuario en un archivo JSON.
- Los datos del usuario y los valores del formulario se imprimen en la consola del servidor.

#### 2. **Obtención de Usuarios (`fetchUsers`)**

```typescript
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};
```

- `fetchUsers` lee el archivo `users.json` que almacena los usuarios.
- Si el archivo contiene datos, los analiza y devuelve una lista de usuarios. Si no hay datos, devuelve una lista vacía.

#### 3. **Guardado de Usuario (`saveUser`)**

```typescript
const saveUser = async (user: User) => {
  const users = await fetchUsers();
  users.push(user);
  await writeFile("users.json", JSON.stringify(users));
};
```

- Llama a `fetchUsers` para obtener la lista actual de usuarios.
- Agrega el nuevo usuario al array.
- Escribe la lista actualizada de usuarios en el archivo `users.json`.

---

### **Beneficios de Server Actions**

1. **Seguridad:** Las operaciones se realizan en el servidor, manteniendo la lógica de negocio y datos sensibles ocultos del cliente.

2. **Simplificación:** Evita la necesidad de rutas de API separadas (`/api`), ya que puedes definir la lógica directamente en los componentes.

3. **Eficiencia:** La ejecución del servidor permite manejar tareas que no serían seguras o posibles directamente en el cliente.

---

### **Consideraciones Importantes**

1. **Acceso Controlado:** Asegúrate de validar y sanitizar los datos del formulario para evitar inyecciones de datos maliciosos.

2. **Manejo de Archivos:** El uso de archivos JSON para almacenamiento solo es adecuado para prototipos o aplicaciones pequeñas. En producción, se recomienda una base de datos.

3. **Sin Exposición:** Las Server Actions nunca deben ser importadas ni ejecutadas en el cliente.
