<template>
    <div v-if="liste">
        <img class="logo" src="@/assets/logos-techno/angularjs.svg" v-if="liste.angularjs"/>
        <img class="logo" src="@/assets/logos-techno/angular.svg" v-if="liste.angular"/>
        <img class="logo" src="@/assets/logos-techno/react.svg" v-if="liste.react"/>
        <img class="logo" src="@/assets/logos-techno/vuejs.svg" v-if="liste.vuejs"/>
        <img class="logo" src="@/assets/logos-techno/nodejs.svg" v-if="liste.nodejs"/>
        <img class="logo" src="@/assets/logos-techno/java.svg" v-if="liste.java"/>
        <img class="logo" src="@/assets/logos-techno/ruby.svg" v-if="liste.ruby"/>
        <img class="logo" src="@/assets/logos-techno/backbone.svg" v-if="liste.backbone"/>
        <img class="logo" src="@/assets/logos-techno/ember.svg" v-if="liste.ember"/>
        <img class="logo" src="@/assets/logos-techno/python.svg" v-if="liste.python"/>
        <img class="logo" src="@/assets/logos-techno/graphql.svg" v-if="liste.graphql"/>
        <img class="logo" src="@/assets/logos-techno/redux.svg" v-if="liste.redux"/>
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
