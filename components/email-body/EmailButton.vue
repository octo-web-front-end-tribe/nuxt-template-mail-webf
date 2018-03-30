<template>
  <!-- Button : BEGIN -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" :align="align"
         style="margin: auto;">
    <tr>
      <td style="border-radius: 3px; background: #222222; text-align: center;" class="button-td">
        <a :href="urlLink"
           style="background: #222222; border: 15px solid #222222; font-family: sans-serif; font-size: 13px; line-height: 110%; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;"
           class="button-a"
        target="_blank">
          <span style="color:#ffffff;"
                class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;{{texteSpan}}&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </a>
      </td>
    </tr>
  </table>
  <!-- Button : END -->
</template>

<script>
  export default {
    name: 'email-button',
    props: ['texte', 'urlLink', 'alignButton'],

    data () {
      return {
        texteSpan: this.texte || 'Button',
        align: this.alignButton || 'center'
      }
    }
  };
</script>

<style scoped>

</style>
