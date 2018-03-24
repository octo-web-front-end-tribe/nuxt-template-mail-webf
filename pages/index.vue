<template>
  <div>
    <preheader-text/>
    <!--
        Set the email width. Defined in two places:
        1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
        2. MSO tags for Desktop Windows Outlook enforce a 680px width.
        Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
    -->
    <div style="max-width: 680px; margin: auto;" class="email-container">
      <!--[if mso]>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center">
        <tr>
          <td>
      <![endif]-->

      <email-header/>

      <email-body/>

      <email-footer/>

      <!--[if mso]>
      </td>
      </tr>
      </table>
      <![endif]-->
    </div>

    <full-bleed-background/>
  </div>
</template>

<script>
  import PreheaderText from '../components/PreheaderText';
  import TextSpacingHack from '../components/TextSpacingHack';
  import FullBleedBackground from '../components/FullBleedBackground';
  import EmailHeader from '../components/EmailHeader';
  import EmailFooter from '../components/EmailFooter';
  import EmailBody from '../components/EmailBody';

  export default {
    components: {
      EmailBody,
      EmailFooter,
      EmailHeader,
      FullBleedBackground,
      TextSpacingHack,
      PreheaderText
    }
  };
</script>

<style>

</style>
