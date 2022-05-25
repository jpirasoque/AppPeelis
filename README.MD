*** Avance del proyecto ***


    *** Etapa 1 ***


1) Cree los directorios "APP" y "PUBLIC" donde estos van a estar encargados de alojar los archivos de cada parte de la app
    - APP => Almacena los archivos relacionados con el backend
    - PUBLIC => Almacena los archivos relacionados al FrontEnd

2) instalé 2 dependencias necesarias para utilizar (Express y Mysql), con el comando ***npm i express mysql***, se instalan las 2 a la vez.

3) instalé 2 dependencias necesarias para utilizarlas en el entorno de desarrollo (Morgan y Nodemon), 
    - Nodemon => es un monitor donde nos va a permitir guardar los archivos y recargar automaticamente el servidor de nodejs
    - Morgan => nos permite ver en la terminal los Request y response qe realizamos al servidor
    - estos los instalamos con el comando *** npm i morgan nodemon -D *** el ( -D ) nos informa de que sera una "Dev-Dependencies"

/// NOTA ///
Debemos ejecutar en la terminal ***npm install*** para que se instalen las librerias necesarias, 
Los comandos para ejecutar son :
    - ***npm run dev*** ejecuta en entorno de desarrollo la app
    - *** npm start *** ejecuta en entorno de produccion

