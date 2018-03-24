<template>
  <!-- 1 Column Text + Button : BEGIN -->
  <tr>
    <td bgcolor="#ffffff">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding: 40px 40px 20px; text-align: center;">
            <h1
              style="margin: 0; font-family: sans-serif; font-size: 24px; line-height: 125%; color: #333333; font-weight: normal;">
              Template pour la NewsLetter de WebF</h1>
          </td>
        </tr>
        <tr>
          <td
            style="padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555; text-align: left;">
            <p style="margin: 0;">
              Bonjour,
              <br>
              <br>
              Je suis le template de mail pour la Newsletter de WebF. C'est une première version mais ça devrait être prometteur.
              Je suis écrit totalement en <b>Nuxt</b> et présent sur Github.
            </p>
          </td>
        </tr>
        <tr>
          <td
            style="padding: 0 40px 40px; font-family: sans-serif; font-size: 15px; line-height: 140%; color: #555555;">
            <email-button texte="Découvre mes sources" urlLink="https://google.com"/>
          </td>
        </tr>

      </table>
    </td>
  </tr>
  <!-- 1 Column Text + Button : END -->
</template>

<script>
    import EmailButton from './EmailButton';

    export default {
      components: { EmailButton },
      name: 'column-text-button'
    };
</script>

<style scoped>

</style>
