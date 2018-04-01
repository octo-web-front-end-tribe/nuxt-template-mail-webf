<template>
  <!-- 1 Column Text : BEGIN -->
  <tr>
    <td bgcolor="#ffffff">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td
            style="padding: 40px; padding-top: 0px; padding-bottom: 0px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
            <p style="margin: 0 0 10px 0;">
              <component :is="name" class="vue-component"/>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <!-- 1 Column Text : END -->
</template>

<script>
  import ParisWeb from '@/contents/parisWeb.md';
  import League from '@/contents/3_league.md';
  import RetD from '@/contents/4_retd.md';
  import Recrutement from '@/contents/5_recrutement.md';

  export default {
    name: 'column-text',
    components: {
      ParisWeb,
      League,
      RetD,
      Recrutement
    },

    props: ['componentName'],

    data() {
      return {
        name: this.componentName
      };
    }
  };
</script>

<style lang="scss">
  .vue-component {
    h1 {
      color: rgb(51, 51, 51);
      font-size: 24px
    }
    h2 {
      color: rgb(51, 51, 51);
      font-size: 20px
    }
  }
</style>
