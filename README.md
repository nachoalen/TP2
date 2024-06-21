# TP FINAL IGNACIO ALEN
## App de Música.

Para que el app funcione se necesita:
Una aplicacion para utilizar SQL (XAMP, MAMP).
La contraseña del SQL en caso de haberla.
xxxx

Links a probar:
USUARIO
http://localhost:8080/app/user POST, USA PARAMETROS (String userName, Integer age, Email@email format email, Alphanumeric 6-12 chars String password )
http://localhost:8080/app/user GET (Trae los Usuarios)
http://localhost:8080/app/user/1 GET (Trae el primer usuario)
http://localhost:8080/app/user/1 PUT, USA PARAMETROS (String userName, Integer age, Email@email format email, Alphanumeric 6-12 chars String password )
http://localhost:8080/app/user/1 DELETE, elimina por ID de usuario.

ARTISTA
http://localhost:8080/app/artist POST USA PARAMETROS (String name)
http://localhost:8080/app/artist GET (Trae los Artistas)

CANCION
http://localhost:8080/app/song POST USA PARAMETROS (String name, Integer lengthSeconds, String artistName)
http://localhost:8080/app/song GET (Trae las canciones)
http://localhost:8080/app/song/1 GET (Trae la primera canción)
