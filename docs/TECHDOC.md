# Documentation technique

Ce document représente la documentation technique du backend de l'application "Producteur à Particulier" réalisé durant le workshop de l'**EPSI**.

L'application "PàP" permet la mise en relation entres producteurs et livreurs afin de pouvoir délivrer les commandes aux clients.

L'objectif est de développer le retour aux produits locaux, notamment dans les villes : seulement les producteurs n'ont pas toujours les moyens (financiers, logistiques, etc..)
pour mettre en place un système de livraison aux clients particuliers.

Notre application permet aux producteurs désirant vendre et livrer ses clients particuliers d'être mis en relation avec un livreur disponible.



## 1. Solution technique

<p align="center"><a href="http://nodejs.com/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" width="160" alt="Node Logo"/></a></p>

**NodeJS** est un environnement d'exécution serveur très léger et performant.

<p align="center">
</br><a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="240" alt="Nest Logo" /></a>
</p>

**NestJS** est un framework backend de programmation orienté-objet écrit en *TypeScript* permettant l'édition d'application basé sur <a href="http://nodejs.com/" target="blank">NodeJS</a>
dîte "server-side" se voulant efficiente et scalable.

* L'avantage de choisir un framework écrit en *TypeScript* nous permettra de s'interfacer beaucoup plus simplement avec d'autre framework frontend tel qu'*Angular*. 

* Le second avantage est de tirer partie du langage lui même : en effet, l'utilisation de *TypeScript* nous permet
d'assigner un type à nos variables, de déclarer des interfaces, des classes, etc. 

* <a href="http://nestjs.com/" target="blank">NestJS</a> est simple d'utilisation: l'emploie de décorateur permet de rapidement cibler la fonction _CRUD_ associée (_GET/POST/PUT/DELETE_)

```javascript
@Get(':id')
async findOne(@Param('id') id: string): Promise<Deliverer> {
  return this.deliverersService.findOne(id);
}
``` 
<p align="center"><a href="http://mongodb<.com/" target="blank"><img src="https://cdn.worldvectorlogo.com/logos/mongodb.svg" width="240" alt="Nest Logo" /></a></p>

**MongoDB** est un système de gestion de base de données orienté documents et faisant partie de la famille des _SGBD_ dîte **NoSQL**.

Le NoSQL qui signifie "**N**ot **O**nly **SQL**" englobe une variété de technologies de base de données permettant de répondre aux nouveaux besoins applicatifs.

<a href="http://mongodb.com/" target="blank">MongoDB</a> est basé sur l"une d'entres elles à savoir les base de données orientés documents : ces base de données 
associent chaque clé à une structure de données complexe appelées documents.

C'est donc une base de données non relationnelle, avce de multiples documents pouvant s'adapter facilement aux changements le tout formater en <a href="https://www.json.org/json-fr.html" target="blank">JSON</a>.

<p align="center"><a href="http://mongoosejs.com/" target="blank"><img src="https://dyma.fr/assets/technos/mongoose.png" width="240" alt="Nest Logo" /></a></p>

**Mongoose** est un outil de modélisation d'objet _MongoDB_ pensé pour être utiliser dans un environnement asynchrone.

Exemple de création de modélisation d'un objet _MongoDB_ :
```javascript
export const BlogPost = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , buf       : Buffer
  , date      : Date
  , comments  : [Comments]
  , meta      : {
      votes : Number
    , favs  : Number
  }
});
``` 

Une fois déclarer ce model est utilisable afin d'insérer des données en base.



## 2. Mise en route

### Pré-requis

* Installation de <a href="https://nodejs.org/en/download/" target="blank">NodeJS</a> contenant <a href="https://www.npmjs.com/package/mongodb" target="blank">NPM</a>
* Installation du gestionnaire de dépendances : <a href="https://yarnpjkg.com/" target="blank">Yarn</a>
  * Via <a href="https://www.npmjs.com/package/yarn" target="blank">NPM</a>
   * ```bash
      $ npm install -g yarn
      ```
* Installation de <a href="http://mongodb.com/" target="blank">MongoDB</a>

  * Via <a href="https://www.npmjs.com/package/mongodb" target="blank">NPM</a>
  * ```bash
    $ npm install mongodb
    ```
  * Via <a href="http://docker.com/" target="blank">Docker</a>
   * ```bash
      $ docker pull mongo:latest
      ```

## Installation

Dans votre terminal :

```bash
$ yarn
```

Cela va initialiser le projet et installer les dépendances nécessaires au projet.

## Configuration de MongoDB

Une fois le container docker récupérer via :

```bash
$ docker pull mongo:latest
```

Il faut démarrer le container, pour cela :

* Démarrer le container correspondant à mongoDB :

```bash
$ mkdir ~/data
$ sudo docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```

* Vérification que le container a bien été créer :
```bash
$ docker ps

> CONTAINER ID | IMAGE | COMMAND                | CREATED    | STATUS
  d75f0d303e91 | mongo | "docker-entrypoint.s…" | 3 days ago | Running
```

* Accéder a mongo via docker :

```bash
$ docker exec -it <CONTAINER ID> bash
$ mongo
```

* Créer la base de données :

```bash
> use pap-back
```

* Vérification de la base actuellement utilisée :

```bash
> db
pap-back
```

* Lister toutes les base de données mongoDB :

```bash
>show dbs
local     0.78125GB
test      0.23012GB
```

<i>La base "pap-back" n'est pas présente, c'est tout à fait normal il faut effectuer un premier insert dans la base.</i>

## Démarrer l'application

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Utiliser l'application

* Pour récupérer un utilisateur utiliser _PostMan_ ou bien directement dans votre navigateur :

Requête : ```http://localhost:3000/users``` (GET)

* Pour créer un nouvel utilisateur, utiliser _PostMan_ :

Requête : ```http://localhost:3000/users``` (POST)

Dans la section **Body** de _PostMan_ en format **RAW/JSON** : 

```json5
{ 
    "firstName":"antoine",
    "lastName": "durand",
    "age": 21,
    "email": "yolo@yolo.yolo",
    "password": "password"
}
```

#### [Retour au sommaire](../../master/README.md)


