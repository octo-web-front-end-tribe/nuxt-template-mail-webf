<template>
  <!-- Email Body : BEGIN -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
         style="max-width: 680px;" class="email-container">

    <hero-image-flush/>

    <column-text-button/>

    <background-image-text/>

    <!-- 2 Even Columns : BEGIN -->
    <tr>
      <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%">
        <!--[if mso]>
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="660">
          <tr>
            <td align="center" valign="top" width="660">
        <![endif]-->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
               style="max-width:660px;">
          <tr>
            <td align="center" valign="top" style="font-size:0; padding: 10px 0;">
              <!--[if mso]>
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="660">
                <tr>
                  <td align="left" valign="top" width="330">
              <![endif]-->
              <even-colum310/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="330">
              <![endif]-->
              <even-colum310/>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!--[if mso]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- 2 Even Columns : END -->

    <!-- 3 Even Columns : BEGIN -->
    <tr>
      <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%" style="padding: 10px 0;">
        <!--[if mso]>
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="660">
          <tr>
            <td align="center" valign="top" width="660">
        <![endif]-->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
               style="max-width:660px;">
          <tr>
            <td align="center" valign="top" style="font-size:0;">
              <!--[if mso]>
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="660">
                <tr>
                  <td align="left" valign="top" width="220">
              <![endif]-->
              <even-column200/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="220">
              <![endif]-->
              <even-column200/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="220">
              <![endif]-->
              <even-column200/>
              <!--[if mso]>
              </td>
              </tr>
              </table>
              <![endif]-->
            </td>
          </tr>
        </table>
        <!--[if mso]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- 3 Even Columns : END -->

    <thumbnail-left-text-right/>

    <thumbnail-right-text-left/>

    <!-- Clear Spacer : BEGIN -->
    <tr>
      <td aria-hidden="true" height="40" style="font-size: 0; line-height: 0;">
        &nbsp;
      </td>
    </tr>
    <!-- Clear Spacer : END -->

    <column-text/>

  </table>
  <!-- Email Body : END -->
</template>

<script>
  import HeroImageFlush from './email-body/HeroImageFlush';
  import EmailButton from './email-body/EmailButton';
  import ColumnText from './email-body/ColumnText';
  import ThumbnailRightTextLeft from './email-body/ThumbnailRightTextLeft';
  import ThumbnailLeftTextRight from './email-body/ThumbnailLeftTextRight';
  import EvenColumn200 from './email-body/EvenColumn200';
  import EvenColum310 from './email-body/EvenColum310';
  import BackgroundImageText from './email-body/BackgroundImageText';
  import ColumnTextButton from './email-body/ColumnTextButton';

  export default {
    components: {
      ColumnTextButton,
      BackgroundImageText,
      EvenColum310,
      EvenColumn200,
      ThumbnailLeftTextRight,
      ThumbnailRightTextLeft,
      ColumnText,
      EmailButton,
      HeroImageFlush
    },
    name: 'email-body'
  };
</script>

<style scoped>

</style>
