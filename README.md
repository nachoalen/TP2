# TP FINAL IGNACIO ALEN
## App de Música.

Para que el app funcione se necesita:
<pre>
    Una aplicacion para utilizar SQL (XAMP, MAMP).
    Tener una versión actualizada de NodeJs.
    Instalar express mediante el comando npm install express.
    Inicializar una base de datos con los datos de la connectionDb.js ("tpfinalalen", "root", "nachomiercoles")
</pre>

Links a probar:
USUARIO
<pre>
    http://localhost:8080/app/user POST, USA PARAMETROS (String userName, Integer age, Email@email format email, Alphanumeric 6-12 chars String password )
    http://localhost:8080/app/user GET (Trae los Usuarios)
    http://localhost:8080/app/user/1 GET (Trae el primer usuario)
    http://localhost:8080/app/user/1 PUT, USA PARAMETROS (String userName, Integer age, Email@email format email, Alphanumeric 6-12 chars String password )
    http://localhost:8080/app/user/1 DELETE, elimina por ID de usuario.
</pre>

ARTISTA
<pre>
    http://localhost:8080/app/artist POST USA PARAMETROS (String name)
    http://localhost:8080/app/artist GET (Trae los Artistas)
</pre>

CANCION
<pre>
    http://localhost:8080/app/song POST USA PARAMETROS (String name, Integer lengthSeconds, String artistName)
    http://localhost:8080/app/song GET (Trae las canciones)
    http://localhost:8080/app/song/1 GET (Trae la primera canción)
</pre>
