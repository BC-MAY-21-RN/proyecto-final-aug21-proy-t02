![BrightCoders Logo](img/logo-bc.png)

# Nombre del proyecto
GoTo

## Problematica que atiende
Los negocios recién inaugurados se ven en la necesidad de pagar por publicidades costosas para dar a conocer sus negocios y lo que ofrece.

## Propuesta de solución
Crear una aplicación donde te permita registrar tu negocio en la app GoTo, con una descripción breve de lo que ofrece, la cual los usuarios registrados podrán consultar y opinar sobre el negocio o sitio asistido. sugiriendo algunos de sus negocios y así atraer a más clientes dándose a conocer de una manera más extensa 

## Definición de requerimientos del MVP

### Requerimientos funcionales
1. Manejo de usuarios 
  - El sistema deberá permitir crear una cuenta como usuario de negocios o usuario normal solicitando los siguientes para los usuarios 
    - Usuario de negocios
      - Nombre del negocio 
      - Celular 
      - Contraseña 
      - Categoría
      - Costo global 
      - Descripción
      - Horarios 
      - Ubicación
      - Imagenes principal 
      - 4 Imágenes más
     - Usuario normal
         - Nombre 
         - Teléfono
         - Contraseña 
         - Ubicación
2. EL sistema deberá permitir loguearse con usuario numero de celular y contraseña
3. EL sistema deberá permitir cerrar la sección activa   
4. Información de la pantalla de inicio
   - El sistema deberá permitirle al usuario comun realizar una búsqueda  en la pantalla de inicio por nombre  o categoría mostrando la siguiente información
        - Imagen 
        - Título
        - Descripción breve 
    - El sistema deberá permitir visualizar los negocios recientes tomando como criterio y sugerencias tomando como criterio de selección la cantidad de     reacciones, estrellas, y vistas mostrando la siguiente información
         - Imagen
         - Título
    
5. El sistema deberá mostrar un menú con indicador sobre la pantalla de inicio. 
    - Utilizando los siguiente iconos 
      - Icono de inicio
      - Icono de reacciones 
      - Icono de la session
      - En caso de ser usuario de negocio mostrar icono del negocio
      - Botón de cerrar sesión en la parte inferior derecha de la pantalla de inicio 
6. Iformación de la pantalla de detalles de los negocios
     - El sistema deberá permitir  visualizar una pantalla como usuario normal donde se aprecie como se visualiza el negocio.
7. Pantalla de los negocios al que el usuario reaccionó 
    - El sistema deberá tener una pantalla para para visualizar las reacciones a sitios o negocios   en forma de carta mostrando la siguiente información
       - Imagen del negocio
       - Cantidad de estrellas 
       - Título 
       - Icono de reacción 
       - Descripción 
8. Pantalla de de vista del negocio para el usuario negocio
    - El sistema deberá mostrar una imagen principal la información siguiente 
      - Título
      - Categoría
      - Selección de estrellas 
      - Cantidad de visitas
      - Cantidad de estrellas 
      - Cantidad de reacciones 
      - Descripción general 
      - Teléfono
      - Precio General
      - 4 Imágenes 
      - Ubicación

### Requerimientos no funcionales
9. Usabilidad
    - El sistema deberá validar los los datos ingresados por los usuarios con las siguientes validaciones  
  Campos obligatorios
        - Contraseña de 8 caracteres
        - Incluye  letra 
        - Un carácter especial
        - Un número
        - Numero de celular con  lada    
        - Cantidad de caracteres 10 A  50
10. Base de datos 
    - EN el maneje la información del sistema se utilizara  usará postgresql y heroku.
    - La información podrá ser consultada a través de apis con ruby consumidas desde react native 
11. Otros recursos 
    - API de google
    - Para poder usar la ubicación de los negocios y de los usuarios  
12. Interfaces
    - Inicio de sesión 
    - Registro de usuario de negocios y usuario normal 
    - Pantalla de inicio 
    - Detalles de los negocios 
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
