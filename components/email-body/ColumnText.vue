<template>
  <!-- 1 Column Text : BEGIN -->
  <tr>
    <td bgcolor="#ffffff">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td
            style="padding: 10px; padding-top: 0px; padding-bottom: 0px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
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
  import Organisation from '@/contents/2_organisation.md';
  import League from '@/contents/3_league.md';
  import RetD from '@/contents/4_retd.md';
  import Recrutement from '@/contents/5_recrutement.md';
  import Invitation from '@/contents/8_invitation.md';

  export default {
    name: 'column-text',
    components: {
      ParisWeb,
      Organisation,
      League,
      RetD,
      Recrutement,
      Invitation
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
      color: rgb(20, 160, 192);
      font-size: 24px
    }
    h2 {
      color: rgb(51, 51, 51);
      font-size: 20px
    }
  }
</style>
