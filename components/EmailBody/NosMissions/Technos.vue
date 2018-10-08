<template>
    <div v-if="liste">
        <img class="logo" src="@/assets/logos-techno/angularjs.svg" title="AngularJS" v-if="liste.angularjs"/>
        <img class="logo" src="@/assets/logos-techno/angular.svg" title="Angular" v-if="liste.angular"/>
        <img class="logo" src="@/assets/logos-techno/react.svg" title="React" v-if="liste.react"/>
        <img class="logo" src="@/assets/logos-techno/vuejs.svg" title="VueJS" v-if="liste.vuejs"/>
        <img class="logo" src="@/assets/logos-techno/nodejs.svg" title="NodeJS" v-if="liste.nodejs"/>
        <img class="logo" src="@/assets/logos-techno/java.svg" title="Java" v-if="liste.java"/>
        <img class="logo" src="@/assets/logos-techno/ruby.svg" title="Ruby" v-if="liste.ruby"/>
        <img class="logo" src="@/assets/logos-techno/backbone.svg" title="Backbone" v-if="liste.backbone"/>
        <img class="logo" src="@/assets/logos-techno/ember.svg" title="Ember" v-if="liste.ember"/>
        <img class="logo" src="@/assets/logos-techno/python.svg" title="Python" v-if="liste.python"/>
        <img class="logo" src="@/assets/logos-techno/graphql.svg" title="GraphQL" v-if="liste.graphql"/>
        <img class="logo" src="@/assets/logos-techno/redux.svg" title="Redux" v-if="liste.redux"/>
    </div>
</template>

<script>
  export default {
    name: 'Technos',
    props: ['liste'],

    data () {
      return {}
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>
    .logo {
        max-width: 25px;
        margin-right: 10px;
    }
</style>
