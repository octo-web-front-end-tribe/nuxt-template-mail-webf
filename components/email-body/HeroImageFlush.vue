<template>
  <!-- Hero Image, Flush : BEGIN -->
  <tr>
    <td bgcolor="#ffffff" align="center">
      <img :src="srcLink"
           width="680" height="" alt="alt_text" border="0" align="center"
           style="width: 100%; max-width: 680px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; margin: auto;"
           class="fluid g-img">
    </td>
  </tr>
  <!-- Hero Image, Flush : END -->
</template>

<script>
  import Drive from '@/services/linkDrive';

  export default {
    name: 'hero-image-flush',

    data() {
      return {
        srcLink: Drive.linkDrive('13FclULp8zC7zaSbXN-5wQP9qcqHksAB_')
      };
    }
  };
</script>

<style scoped>

</style>
