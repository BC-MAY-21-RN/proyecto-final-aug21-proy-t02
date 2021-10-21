![BrightCoders Logo](img/logo-bc.png)

# Nombre del proyecto
GoTo

## Problematica que atiende
El turismo es una parte muy relevante en la mayor parte de los estados del país 
y es de suma importancia que puedan conocer los lugares que caracteriza a cada uno de ellos, por lo cual queremos ofrecer una guía turística para que las personas que llegan la ciudad puedan orientarse acerca de los sitios que tiene para visitar.


## Propuesta de solución
Crear una guía turística que les permita tenerla a la mano en todo momento a través de su celular  la app GoTo, donde los usuarios podrán registrarse y ver cada uno de los sitios a los que pueden asistir, con una descripción breve de lo que ofrece, la cual los usuarios registrados podrán consultar e indicar su nivel de satisfacción sobre el sitio asistido. sugiriendo algunos de sus lugares más famosos y así atraer a más turistas 
## Definición de requerimientos del MVP

### Requerimientos funcionales
1. Manejo de usuarios 
  - El sistema deberá permitir al usuario administrador agregar sitios turisticos solicitando los siguientes informacion
    - Usuario administrador
      - Nombre del negocio 
      - Celular
      - Categoría
      - Costo global 
      - Descripción
      - Horarios 
      - Ubicación
      - Imagenes principal 
      - 4 Imágenes más
   - El sistema debera permitir al usuario turista poder registrarse  solicitando la siguiente informacion 
     - Usuario turista
         - Nombre 
         - Correo
         - Contraseña 
         - Ubicación
2. EL sistema deberá permitir loguearse con correo de y contraseña
3. EL sistema deberá permitir cerrar la sección activa   
4. Información de la pantalla de inicio
   - El sistema deberá permitirle al usuario turista realizar una búsqueda  en la pantalla de inicio por nombre  o categoría mostrando la siguiente información
        - Imagen 
        - Título
        - Descripción breve 
    - El sistema deberá permitir visualizar los sitios turisticos recientes tomando como criterio, sugerencias y  cantidad de  reacciones, estrellas, y vistas mostrando la siguiente información
         - Imagen
         - Título
    
5. El sistema deberá mostrar un menú con indicador sobre la pantalla de inicio. 
    - Utilizando los siguiente iconos 
      - Icono de inicio
      - Icono de reacciones 
      - Icono de la session
      - En caso de ser administrador  mostrar icono de agregar un nuevo sitio
      - Botón de cerrar sesión en la parte inferior derecha de la pantalla de inicio 
6. Iformación de la pantalla de detalles de los sitios 
     - El sistema deberá permitir  visualizar una pantalla como usuario turista poder ver los detalles del sitio.
7. Pantalla de los sitios al que el usuario turista reaccionó 
    - El sistema deberá tener una pantalla para para visualizar las reacciones a sitios turisticos en forma de carta mostrando la siguiente información
       - Imagen del negocio
       - Cantidad de estrellas 
       - Título 
       - Icono de reacción 
       - Descripción 
### Requerimientos no funcionales
8. Usabilidad
    - El sistema deberá validar los los datos ingresados por los usuarios con las siguientes validaciones  
  Campos obligatorios
        - Contraseña de 8 caracteres
        - Incluye  letra 
        - Un carácter especial
        - Numero de celular con  lada    
        - Cantidad de caracteres de la descripcion 10 A  50
   - Campos opcionales 
        - Un número
9. Base de datos 
    - EN el maneje la información del sistema se utilizara  usará postgresql y heroku.
    - La información podrá ser consultada a través de apis con ruby consumidas desde react native 
10. Otros recursos 
    - API de google
    - Para poder usar la ubicación de los negocios y de los usuarios  
11. Interfaces
    - Inicio de sesión 
    - Registro de usuario turista
    - Agregar nuevo sitio 
    - Pantalla de inicio 
    - Detalles del sitio turistico 
    - Pantalla de reacciones  


## Diseño del MVP

Incluyan en [esta carpeta](/design) su propuesta de diseño

## Recursos

- [Minimum Viable Product](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Minimum Viable Product (MVP)](https://www.productplan.com/glossary/minimum-viable-product/)
- [Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)
- [El proceso de pensamiento de diseño](https://www.youtube.com/watch?v=_r0VX-aU_T8)
- [Metodología Design Thinking. Ejemplos](https://www.youtube.com/watch?v=_ul3wfKss58) 
- [Design Thinking ejemplo sencillo](https://www.youtube.com/watch?v=_H33tA2-j0s)
