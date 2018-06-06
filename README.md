# template-mail-webf

> Template Mail VueJS

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Warning

N'arrivant pas à correctement créer des composants Vue à partir de Markdown dans les tests, je passe par un Mock des 
fichiers .md dans les tests avec le fichier @/components/spec/MarkdownMock.vue pour éviter les erreurs : 

```
console.error node_modules/vue/dist/vue.runtime.common.js:589
    [Vue warn]: Invalid Component definition: <p>Ce premier trimestre ....</p>.... 
```