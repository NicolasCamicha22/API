 ![version](https://img.shields.io/badge/version-1.0.0-blue.svg) 

## Presentacion del producto
![Product Presentation Image](https://i.ibb.co/TbfGrL5/landing.png)

## Descripcion

<p>Nuestro proyecto consta en hacer un benchmarking sobre la fundacion "Observatorio pyme" donde las Pymes podran realizar consultas de como se encuentra su empresa en el mercado.</p>
<p>A continuacion les dejamos un link para que vean el contexto del proyecto en el cual estamos trabajando.</p>
https://www.observatoriopyme.org.ar/la-fundacion/historia-y-actualidad/

## Tabla de contenidos

* [Integrantes](#Integrantes)
* [Tecnologia](#Tecnologia)
* [Instalacion](#Instalacion)
* [Navegadores soportados](#Navegadores-soportados)
* [Recursos](#Recursos)
* [Flujo](#Flujo)

## Integrantes grupo 6

* Alcantara Yrigoyen, Stefano Guillermo <b>Legajo : 1058188</b>
* Camicha, Nicolas                      <b>Legajo : 1101634</b>
* Girardi, Facundo Martin               <b>Legajo : 1084454</b>
* Marchant Rojas, Luis Jose Javier      <b>Legajo : 1042891</b>
* Venzmer, Nicolas Alejandro            <b>Legajo : 1076345</b>

## Tecnologia

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg?raw=true" width="64" height="64" /><img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="64" height="64" />

## Instalacion

## FrontEnd

* Descargar la aplicacion del repositorio https://gitlab.com/facundogirardi/aplicaciones-interactivas-frontend
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> aplicaciones-interactivas
* Luego dar <b>npm start</b>
* Se levantará en local http://localhost:3000/

## BackEnd

* El backend de la aplicacion se encuesta en ek siguiente repositorio https://gitlab.com/facundogirardi/aplicaciones-interactivas-backend
* En la carpeta del proyecto ejecutar <b>npm install</b>
* <b>cd</b> aplicaciones-interactivas
* Luego dar <b>npm start</b> o <b>nodemon --exec npm start</b> (Requiere tener instalado el nodemon*) -> Por default se encuentra apuntando a local para cambiar, dirijase a Controller/webServices
* Se levantará en local http://localhost:4000/
* Tambien se encuentra hosteado en Heroku https://api-benchmark-back.herokuapp.com/

## Usuarios

* Usuario Administrador de usuarios : root@mail.com > root
* Usuario Administrador de encuestas : admin@mail.com > admin

## Navegadores soportados

Se probo en los siguientes navegadores: 

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="60" height="60"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="60" height="60"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="60" height="60">

## Recursos

- GIT: <https://gitlab.com/facundogirardi/api-benchmarking>
- GIT: <https://gitlab.com/facundogirardi/aplicaciones-interactivas-backend>

## Flujo
![Product Presentation Image](https://i.ibb.co/HF4scZD/Flujo.png)

## FrontEnd

### Landing Page

![Landing Page](https://i.ibb.co/qk2vbGJ/Landing.jpg)


Es la página inicial a la cual llegaran los usuarios. En ella encontrará lo siguiente:
* <b>REALIZAR CONSULTA</b>:  Los usuarios podrán realizar las encuestas y los llevará a la página "Encuesta"
* <b>INICIAR SESIÓN</b>: Permitirá el acceso al portal a todos aquellos usuarios que tengan credenciales root o administrador de encuestas. Dependiendo el tipo de usuario que acceda, si se trata de un usuario root será redirigido a la página "Administrador". Caso contrario, de ser un usuario administrador será redirigido a la página "ABENCUESTAS".
* Encontrará enlaces a las redes sociales de la fundación tales como Instagram, LinkedIn, Facebook y Twitter


### Encuesta

![Encuesta](https://i.ibb.co/6bRr874/encuestapage.jpg)


Es la página en la cual los usuarios podrán seleccionar la encuesta que deseen para poder iniciar el proceso de respuesta.
Esta página cuenta en su cabecera, el titulo de la página "Seleccion Api Benchmark" y opciones visuales para que el usuario pueda trabajar a medida:

![Opciones Cabecera](https://i.ibb.co/CbyBRvL/opcionescab.jpg)

Estas opciones de izquierda a derecha son:
* <b>MODO OSCURO</b>: Permite el cambio de colores a un tono mas oscuro.
* <b>MAXIMIZAR</b>: Permite ampliar la pantalla principal para mayor comodidad.
* <b>CONTRAER</b>: Permite contraer esta parte de la cabecera y el menú totalmente para mayor comodidad y visualización.

El menú cuenta con las siguientes opciones:
* <b>INICIO</b>: Permite regresar a la Landing Page
* <b>INFORMACIÓN</b>: Muestra información del proyecto y de sus integrantes como nombre y legajo. Además muestra nombre y legajo de los docentes involucrados.
* <b>CONFIGURACIÓN</b>: Permite cambiar el tema de las páginas webs a excepción de la Landing Page. Consta de 3 colores diferentes como se observa a continuación:

![Temas](https://i.ibb.co/MMgRQzB/colores.jpg)

<b>La Cabecera y el menú se repiten en todas las páginas salvo en la Landing Page</b>

En el cuerpo de la página Encuesta, se encuentra un listado con todas las encuestas listas para ser respondidas por el usuario. Éstas se encuentran en una tabla identificadas por los campos Sector, Titulo y Tamaño.
Al hacer clic en cada uno de estos campos, las encuestas se ordenan automaticamente de manera ascendente. Además pueden agruparse las encuestas en grupos de a 5, 10 y 20 por página en la parte inferior.

Para ingresar a la encuesta que se desea responder, el usuario deberá hacer clic en el simbolo "*" <b>asterisco</b> que se encuentra a la izquierda de la encuesta.

Footer:

![Footer](https://i.ibb.co/D58KtCj/footer.jpg)

<b>Todas las páginas webs cuentan con un footer a excepción de la Landing Page</b>

Se compone por las siguientes partes:
* <b>LOGO FUNDACION OBSERVATORIO PYME</b>: Imagen que linkea al sitio web oficial de la Fundación
* <b>REDES SOCIALES</b>: Enlaces a las redes sociales de la fundación tales como Instagram, LinkedIn, Facebook y Twitter
* <b>CONTACTO</b>: Enlace que dirige al formulario de contacto del sitio web oficial de la Fundación
* <b>INFORMACION ADICIONAL</b>: Copyright, número de teléfono y dirección del Observatorio Pyme

### Responder Encuesta

![Responder Encuesta](https://i.ibb.co/fkDvH2g/responder-encuesta.jpg)

En esta página el usuario tendrá la posibilidad de responder la encuesta seleccionada previamente seleccionando las preguntas que tendrá cada encuesta. Debe completarlas todas para poder enviar la encuesta. Para hacer esto deberá hacer clic en <b>SIGUIENTE</b>

### Información de Contacto

![Info Contacto](https://i.ibb.co/FWCdjbW/info-contacto.jpg)

Una vez respondida la encuesta, ésta página será la siguiente pantalla que se ejecutará. La misma solicita los datos de contacto de la persona que respondió dicha encuesta. Estos datos son obligatorios, por lo tanto deberán ser respondidos para seguir avanzando en el proceso de Benchmarking y éstos son:

* <b>RAZON SOCIAL</b>
* <b>CORREO ELECTRONICO</b>: el sistema valida el formato correo mediante el uso del "@" <b>arroba</b>
* <b>REGIÓN</b>
* <b>TAMAÑO DE SU EMPRESA</b>

Una vez completado esto se podrá enviar toda esta información haciendo clic en el botón <b>GENERAR RESULTADOS</b>


### Resultados

![Resultados](https://i.ibb.co/thtrVFM/Resultados.jpg)

Página final del proceso de responder encuestas. Aquí se observarán los resultados del Benchmarking teniendo en cuenta los datos ingresados por el usuario en la encuesta. De está manera se da por concluido el circuito de responder encuestas.

## ACCESO PARA USUARIOS ADMINISTRADORES O ROOT

Desde la <b>Landing Page</b> al hacer clic en <b>INICIAR SESIÓN</b> se accederá a la siguiente pantalla:

![SignIn](https://i.ibb.co/XVSmC7Q/signin.jpg) 


### Acceso como ADMINISTRADOR

Ingresadas las credenciales de administrador en la pantalla previa de <b>INICIAR SESIÓN</b> se observará la siguiente pantalla:

![abencuesta](https://i.ibb.co/vmLbY0z/abencuestas.jpg)

Principalmente este tipo de usuarios podrá <b>GENERAR ENCUESTAS</b> y <b>ELIMINARLAS</b>

En esta pantalla se observa un listado con todas las encuestas creadas en una tabla con los siguientes campos:
* Titulo: Titulo de la encuesta
* Sector: Sector al que pertenece la encuesta
* Tamaño: Mediana ó Pequeña
* Fecha Creación: Fecha en la que dada de alta dicha encuesta
* Acciones: Se podrá borrar la encuesta seleccionada haciendo clic en el icono "Eliminar"

Además este listado de encuestas creadas se podrá agrupar de a 5, 10 o 20 encuestas por página.
También tiene una barra de "Búsqueda" para encontrar la encuesta deseada con cualquier dato de su titulo. 

### GENERAR NUEVA ENCUESTA

De elegir esta opción en la pantalla anterior como administrador, se verá la siguiente página:

![Nueva Encuesta](https://i.ibb.co/7QCKkdS/nuevaencuesta.jpg) 

Se observarán 3 campos para completar los cuales son:

* Titulo Encuesta: Titulo que llevará la encuesta creada
* Tamaño: Pequeña ó Mediana
* Sector: Sector al que pertenece la encuesta creada

Una vez definidos éstos campos, se procederá a cargar preguntas usando el botón <b>AGREGAR PREGUNTA</b>
El sistema nos abrirá automaticamente un campo de texto para completar con la pregunta que deseemos, mas la respuesta y el valor de Referencia que será tomado en cuenta para hacer el Benchmarking correspondiente:

![Pregunta](https://i.ibb.co/y0r5TNL/pregunta.jpg)

* El sistema soporta la carga de hasta 5 preguntas por encuesta, y un total de 5 respuestas por preguntas como máximo 
* Para eliminar preguntas se podrá hacer haciendo clic en la X que se encuentra a la derecha de cada una de ellas.
* El valor de referencia se aplica en todas las preguntas cargadas en la encuesta

Además el sistema cuenta con las siguientes opciones que figuran debajo de la encuesta las cuales son:

![botones encuesta](https://i.ibb.co/xF5hWx1/bt-crear-encuesta.jpg)

* <b>VISTA PREVIA</b>
* <b>COPIAR PREGUNTA</b>
* <b>BORRAR PREGUNTA</b>

Una vez finalizada la carga de toda esta información, ya que es de carácter obligatorio (el sistema validará dicho proceso arrojando un cartel que dirá "Completar todos los datos") se utilizará el botón <b>GUARDAR ENCUESTA</b>

Inmediatamente la encuesta será subida a la Base de Datos y el sistema arrojará un aviso diciendo que la encuesta fue subida exitosamente. De esta manera el sistema retornará a la página inicial de la vista como <b>ADMINISTRADOR</b>


### Acceso como ROOT

Ingresadas las credenciales de root en la pantalla previa de <b>INICIAR SESIÓN</b> se observará la siguiente pantalla:

![administrador](https://i.ibb.co/ZxpH210/administrador1.jpg)

En esta pantalla se observarán todos los usuarios dados de alta en el sistema en una tabla con los siguientes campos editables:
* <b>DNI</b>: Numero de DNI 
* <b>Nombre</b>: Nombre del usuario
* <b>Apellido</b>: Apellido del usuario
* <b>Email</b>: Email del usuario. Utiliza validación de "@" <b>ARROBA</b>
* <b>Contraseña</b>: Contraseña Hasheada del usuario. Ésta podrá ser editada por el root. Al hacerlo automaticamente el sistema volverá a hashear la nueva contraseña
* <b>Root</b>: Define si tiene privilegios Root o no
* <b>Acciones</b>: Editar datos del usuario o elimina al usuario definitivamente

Los usuarios listados se pueden ordenar por grupos de 5, 10 y 20 por página.