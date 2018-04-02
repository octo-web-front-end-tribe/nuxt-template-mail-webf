<template>
  <!-- Email Body : BEGIN -->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%"
         style="max-width: 780px;" class="email-container">

    <hero-image-flush/>

    <introduction/>

    <column-text component-name="Organisation"/>

    <!-- 2 Even Columns : BEGIN -->
    <tr>
      <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%">
        <!--[if mso]>
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
          <tr>
            <td align="center" valign="top" width="780">
        <![endif]-->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
               style="max-width:780px;">
          <tr>
            <td align="center" valign="top" style="font-size:0; padding: 10px 0;">
              <!--[if mso]>
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
                <tr>
                  <td align="left" valign="top" width="330">
              <![endif]-->
              <even-colum310 :journee="journees[0]"/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="330">
              <![endif]-->
              <even-colum310 :journee="journees[1]"/>
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
    <!--&lt;!&ndash; 2 Even Columns : END &ndash;&gt;-->

    <column-text component-name="Invitation"/>

    <column-text component-name="League"/>

    <column-text component-name="RetD"/>

    <imageFullPage :image="retd.image"  padding="10px"/>

    <column-text component-name="Recrutement"/>

    <!--&lt;!&ndash; 3 Even Columns : BEGIN &ndash;&gt;-->
    <tr>
      <td bgcolor="#ffffff" align="center" height="100%" valign="top" width="100%" style="padding: 10px 0;">
        <!--[if mso]>
        <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
          <tr>
            <td align="center" valign="top" width="780">
        <![endif]-->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%"
               style="max-width:780px;">
          <tr>
            <td align="center" valign="top" style="font-size:0;">
              <!--[if mso]>
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="780">
                <tr>
                  <td align="left" valign="top" width="220">
              <![endif]-->
              <div style="text-align:left">
                <h2 style="margin: 0px 10px 10px; font-family: sans-serif; font-size: 24px; line-height: 125%; color: rgb(20, 160, 192); font-weight: bold;">Mouvements dans la tribu</h2>
              </div>
              <even-column200 :mouvement="mouvements[0]"/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="220">
              <![endif]-->
              <even-column200 :mouvement="mouvements[1]"/>
              <!--[if mso]>
              </td>
              <td align="left" valign="top" width="220">
              <![endif]-->
              <even-column200 :mouvement="mouvements[2]"/>
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

    <thumbnail-left-text-right :title='parisWeb.title' :content="parisWeb.content" :image="parisWeb.image"
                               :linkButton="parisWeb.linkButton"/>

    <thumbnail-right-text-left :title='vuejsAmsterdam.title' :content="vuejsAmsterdam.content"
                               :image="vuejsAmsterdam.image" :linkButton="vuejsAmsterdam.linkButton"/>

    <imageFullPage :title="weo2018.title" :image="weo2018.image"/>

    <title-table title="Nos missions" />

    <nos-missions v-for="(mission, index) in missions" :key="index" :mission="mission"/>
  </table>



  <!-- Email Body : END -->
</template>

<script>
  import HeroImageFlush from './email-body/HeroImageFlush';
  import EmailButton from './email-body/EmailButton';
  import ThumbnailRightTextLeft from './email-body/ThumbnailRightTextLeft';
  import ThumbnailLeftTextRight from './email-body/ThumbnailLeftTextRight';
  import EvenColumn200 from './email-body/EvenColumn200';
  import EvenColum310 from './email-body/EvenColum310';
  import BackgroundImageText from './email-body/BackgroundImageText';
  import Introduction from './email-body/Introduction';

  import config from '@/contents/config';
  import imageFullPage from './imageFullPage';
  import ColumnText from './email-body/ColumnText';
  import NosMissions from './missions/NosMissions';
  import TitleTable from './email-body/TitleTable';

  export default {
    components: {
      TitleTable,
      NosMissions,
      ColumnText,
      imageFullPage,
      Introduction,
      BackgroundImageText,
      EvenColum310,
      EvenColumn200,
      ThumbnailLeftTextRight,
      ThumbnailRightTextLeft,
      EmailButton,
      HeroImageFlush
    },
    name: 'email-body',

    data() {
      return {
        parisWeb: config.parisWeb,
        journees: config.journees,
        retd: config.retd,
        vuejsAmsterdam: config.vuejsAmsterdam,
        mouvements: config.mouvements,
        weo2018: config.weo2018,
        missions: config.missions
      };
    }
  };
</script>

<style scoped>

</style>
