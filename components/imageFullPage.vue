<template>
  <div style=" padding: 40px;">
    <h1
      style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 24px; line-height: 125%; color: #333333; font-weight: bold;">
      {{title}}</h1>
    <div style="text-align: center;">
      <img style="width: 90%" :src="srcImage">
    </div>
  </div>
</template>

<script>

  import Drive from '@/services/linkDrive';

  export default {
    name: 'image-full-page',
    props: ['title', 'image'],

    data () {
      return {
        srcImage: Drive.linkDrive(this.image)
      }
    }
  };
</script>

<style scoped>

</style>
