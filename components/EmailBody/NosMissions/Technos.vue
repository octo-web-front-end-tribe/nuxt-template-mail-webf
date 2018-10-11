<template>
    <div v-if="liste">
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('18pZP0YmqNqGuBcsLqdlsoGISCXXY0LKk')" title="AngularJS" alt="AngularJS" v-if="liste.angularjs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('18mqlQZ3Vf93uSDCupPvlqyPzVWDy0FyB')" title="Angular" alt="Angular" v-if="liste.angular"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19VL3ajh_hBvb6b-UqXYpqpUn4ufFpO_x')" title="React" alt="React" v-if="liste.react"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19m6jT9t0XktYdyXJ0MyKQnAzsxSj5ddm')" title="VueJS" alt="VueJS" v-if="liste.vuejs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19FtL1rkGKb40tnYYd3iHp-v3hD_dVB2M')" title="NodeJS" alt="NodeJS" v-if="liste.nodejs"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19CGBZ-gx-nzVHh6aQBVsFxQ8wAgycjyv')" title="Java" alt="Java" v-if="liste.java"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19eMOj4Axdmgt4Y9LqFpCbL5P7Fdzd9zj')" title="Ruby" alt="Ruby" v-if="liste.ruby"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('18v8jSlDj1PnTjB6GY_4ITbYAlzJka6sR')" title="Backbone" alt="Backbone" v-if="liste.backbone"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('192fsqTTXhroKaaJZwLxG6l2T0XZe6BTM')" title="Ember" alt="Ember" v-if="liste.ember"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19LtIQtWRhIbQGvUAQdMg5UBVquv54d5n')" title="Python" alt="Python" v-if="liste.python"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('195G-tmB6v0tJy9FYN5OC9LG-2ZN1kNsD')" title="GraphQL" alt="GraphQL" v-if="liste.graphql"/>
        <img style="max-width: 25px; margin-right: 10px;" :src="drive.linkDrive('19X4sSUVX5DPzG9vQX5JJN96XzFkwN8sx')" title="Redux" alt="Redux" v-if="liste.redux"/>
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
