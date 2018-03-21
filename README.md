# la-saliere

cf Documents/README.adoc

## Outils utilisés

VueJS|https://vuejs.org/

## Première installation

``` bash
# il faut avoir node.js et npm déjà installés sur l'ordi
# on commence par installer le plugin avec npm 
npm install -g vue-cli

# on initialise le plugin dans le dossier courant (le GIT de La Salière), acceptez les valeurs par défaut,
vue init webpack-simple  

# on installe toutes les dépendances (ça peut être long, ça crée un dossier node_modules bien garni),
npm install 
```

## Commandes utiles

``` bash
# on lance le serveur de développement (en localhost:8080)
npm run dev
```

## Déploiement pour production

``` bash
# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
