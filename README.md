# LealApp

Leal - App es una aplicación que permite visualizar las transacciones realizadas por los usuarios que se encuentren registrados. La información mostrada es consumida a traves de los servicios disponibles en el siguiente [link](https://pruebatecnica.puntosleal.com/).

La calidad del código es analizada utilizando Codacity.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/30b78dfe29134ba2b8ae548588055a06)](https://app.codacy.com/project/am.espinosa11/leal-app/dashboard?bid=12589703)

## Donde visualizar
Este proyecto se encuentra desplegado con githubpages. Para visualizarlo ingresar al siguiente link https://amespinosa11.github.io/leal-app/.

## Instalación

A continuación se presentan los requisitos y los pasos para realizar la instalación del proyecto.

### Requisitos

- Node JS (https://nodejs.org/es/download/)
- NPM (https://www.npmjs.com/)
- Angular CLI (https://cli.angular.io/)

### Clonar

Se puede clonar el proyecto utilizando el el siguiente comando.
```sh
git clone https://github.com/amespinosa11/leal-app.git
```

### Setup

Primero, es necesario enocntrarse en la carpeta del proyecto y se deben instalar las dependencias de este.
```sh
cd leal-app

npm install
```
Ahora es posible correr un servidor de desarrollo y ver el proyecto en `http://localhost:4200/`.
```sh
ng serve
```

## Funcionalidades
- Inicio de sesión de los usuarios.
- Visualizar historial con las transacciones realizadas por el usuario.
- Visualizar detalles de cada transacción resalizada.
- Filtro por fechas y por tipo de transacción.
- Mobile first y responsive.

## Diseño

La aplicación se encuentra construida siguiendo el esquema de desarrollo en Angular con Componentes.

### Componentes
- **LoginComponent:** Componente con la información de inicio de sesión.
- **DialogOverviewDialog:** Modal que recibe un objecto con la información de la transacción y la presenta.
- **Home:** Componente en donde se muestra el historial de transacciones.
- **Navbar:** Barra de navegación de la aplicación.

### Servicios
- **Auth:** Se encarga de realizar peticiones con las credenciales de autenticación y verificar si el usuario puede ingresar a la aplicación.
- **Transactions:** Se encarga de realizar peticiones al servicio de transacciones y traer la información correspondiente.

### Pipes
- **Search:** Se encarga de filtrar en un arreglo de acuerdo a los parametros ingresados, por ejemplo, por tipo de transacción.

## Tecnologías utilizadas
- Angular 7
- Bootstrap 4
- Angular Material
- Animates CSS

Este proyecto se genero utilizando Angular CLI con la version 7.3.6.

## Autor
- Ana María Espinosa Chaparro

## Licensia
This project is licensed under the MIT License - see the [LICENSE](https://github.com/amespinosa11/leal-app/blob/master/LICENSE) file for details.

