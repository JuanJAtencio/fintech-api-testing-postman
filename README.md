# Fintech API Testing – Postman Portfolio

## 📌 Descripción del proyecto

Proyecto de testing de APIs realizado con **Postman**, orientado a escenarios **financieros / fintech**.

El objetivo es demostrar habilidades como **QA Analyst** en:

* Testing funcional de APIs REST
* Manejo de autenticación con token (Bearer)
* Uso de variables de entorno
* Validación de respuestas (assertions)
* Análisis de escenarios negativos y de seguridad

La API utilizada es **FakeStore API**, adaptada conceptualmente para simular una billetera digital, donde:

* Usuarios representan clientes
* Carts / Products representan movimientos o débitos

---

## 🛠️ Tecnologías y herramientas

* Postman (última versión)
* API REST pública: FakeStore API
* JavaScript (scripts de validación en Postman)

---

## 📂 Estructura del proyecto

```
Fintech_API_Testing_Postman
├── Auth
│   └── Login – Get Token
├── Users
│   └── Get User Data
├── Transactions
│   └── Get Transactions (User Carts)
├── Negative Scenarios
│   ├── Get User – Invalid Token
│   ├── Get User – No Token
│   └── Get User – Invalid User ID
└── Environment
    └── Fintech-Env
```

---

## 🔐 Autenticación

* Tipo: **Bearer Token**
* El token se obtiene mediante el endpoint de login y se guarda automáticamente como variable de entorno (`authToken`).

---

## ✅ Escenarios testeados

### Escenarios positivos

* Login exitoso y obtención de token
* Consulta de datos de usuario autenticado
* Consulta de movimientos (transacciones simuladas)

### Escenarios negativos

* Acceso con token inválido
* Acceso sin token
* Consulta de usuario inexistente

---

## 🧪 Tipos de validaciones realizadas

* Status codes (200, 201, 401, 403, 404)
* Presencia de campos obligatorios en la respuesta
* Validación de integridad de datos por usuario
* Manejo correcto de errores

---

## ⚠️ Notas QA importantes

* Algunos endpoints de la API FakeStore **no aplican validaciones de autenticación estrictas**.
* Estos comportamientos fueron documentados como **hallazgos QA**, demostrando análisis crítico del sistema bajo prueba.

---

## 🚀 Cómo ejecutar el proyecto

1. Importar la collection en Postman
2. Importar el environment `Fintech-Env`
3. Seleccionar el environment en Postman
4. Ejecutar el request de **Login**
5. Ejecutar el resto de los requests (Users, Transactions, Negative Scenarios)

---

## 👤 Autor

**Juan Atencio**
QA Analyst | QA Automation (Junior / Semi-Senior)
Perfil orientado a proyectos financieros y fintech
