<template>
  <!-- Email Header : BEGIN -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
         style="max-width: 780px;">
    <tr>
      <td style="padding: 20px 0; text-align: center">
        <img :src="srcLink"
             width="120" height="50" alt="alt_text" border="0"
             style="height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
      </td>
    </tr>
  </table>
  <!-- Email Header : END -->
</template>

<script>
  import Drive from '@/services/linkDrive';

  export default {
    name: 'email-header',

    data() {
      return {
        srcLink: Drive.linkDrive('13GI_JgNCXnjNvjuAfkBH5YbBRvYbFQWj')
      };
    }
  };
</script>

<style scoped>

</style>
