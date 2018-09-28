<template>
    <div v-if="liste">
        <img class="logo" src="@/assets/logos-techno/angularjs.png" v-if="liste.angularjs"/>
        <img class="logo" src="@/assets/logos-techno/angular.svg" v-if="liste.angular"/>
        <img class="logo" src="@/assets/logos-techno/react.png" v-if="liste.react"/>
        <img class="logo" src="@/assets/logos-techno/vue.png" v-if="liste.vuejs"/>
        <img class="logo" src="@/assets/logos-techno/nodejs.png" v-if="liste.nodejs"/>
        <img class="logo" src="@/assets/logos-techno/java.png" v-if="liste.java"/>
        <img class="logo" src="@/assets/logos-techno/ruby.png" v-if="liste.ruby"/>
        <img class="logo" src="@/assets/logos-techno/backbone.png" v-if="liste.backbone"/>
        <img class="logo" src="@/assets/logos-techno/ember.png" v-if="liste.ember"/>
        <img class="logo" src="@/assets/logos-techno/python.png" v-if="liste.python"/>
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
