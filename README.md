# Challenge Backend Tap

Challenge realizado para TAP

## Comenzando 

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Configuración e instalación

_Install dependencies_

```
npm i
```

_una vez que termina las dependencias, ejecutar el siguiente comando con propósito de inicializar docker(este comando NO se tiene que dar de baja) _

```
docker compose up
```

_el tercer comando a realizar tiene el objetivo de inicializar las migraciones (este comando se realizará en una consola diferente a la que esta corriendo Docker_

```
npm run db:migrate
```
_El último comando a utilizar es nodemon, el cual pondra nuestro proyecto a funcionar en el servidor local 3001_

```
nodemon
```

_Podemos realizar las siguientes consultas_

```
Get games    => Trae todas las partidas
Get game     => Trae los datos del juego que especifiquemos /:id
Delete Game  => Borra un juego que le digamos mediante el parametro /:id
Post games   => Crea un juego nuevo. Si no ponemos datos esta como default juego Created
PUT game     => Nos permite modificar el estado un juego,
```
## Ejecutando las pruebas

_Utilización de las rutas y datos necesarios_

_Para utilizar las distintas rutas necesitaremos enviar los datos de la siguiente forma:_ 

```
{
    "state_id":1,
    "cells_id":null
}
```

_Testing con_

```
npm test
```

