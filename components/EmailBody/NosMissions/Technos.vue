<template>
    <div v-if="liste">
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1D5Ln-o9h0Aa4nWT2Q1oG_Q6JZF56bsld')" title="AngularJS" alt="AngularJS" v-if="liste.angularjs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1D5rQqTOcpeT51Aq-58246d1BoIp0DDcz')" title="Angular" alt="Angular" v-if="liste.angular"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1D7mgWkrL6hrH9PXoCr22FiQLIv04dNjw')" title="React" alt="React" v-if="liste.react"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CUp7U1EuAff4uui3sakeI1pKFHK9SYxm')" title="VueJS" alt="VueJS" v-if="liste.vuejs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CrJZfcYh2-c82UTQSpGf8y5oMFnwxKdl')" title="NodeJS" alt="NodeJS" v-if="liste.nodejs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CuJzY_6830lIpbljVbUMCGh6XzUPml-U')" title="Java" alt="Java" v-if="liste.java"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CXsqzz_QhdCDYinWvSMA_TpreXgb7DWc')" title="Ruby" alt="Ruby" v-if="liste.ruby"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1Cx2DXF6l_nXblVn_TcugckDVFVubDclU')" title="Backbone" alt="Backbone" v-if="liste.backbone"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CwuvtRCDfpHCoiZO1t9bYRKHcipc0ua2')" title="Ember" alt="Ember" v-if="liste.ember"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CjdEIW4emUmH4jO3KicnwSL4ktxTyq7i')" title="Python" alt="Python" v-if="liste.python"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1Cw9Tdl3XWLZst20s8_LXzNRKXK3GOSxz')" title="GraphQL" alt="GraphQL" v-if="liste.graphql"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('1CZD31zQQeAefrAQEmO8qN6jutXSLDQco')" title="Redux" alt="Redux" v-if="liste.redux"/>
    </div>
</template>

<script>
    import Drive from '@/services/linkDrive'
  export default {
    name: 'Technos',
    props: ['liste'],

    data () {
      return {
        drive: Drive
      }
    },

    created () {
    },

    methods: {}
  }
</script>

<style scoped>

</style>
